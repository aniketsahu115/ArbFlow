import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import { insertUserSchema, insertMessageSchema, wsMessageSchema, type WSMessage } from "@shared/schema";

interface ExtendedWebSocket extends WebSocket {
  userId?: string;
  sessionId?: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);
  
  // WebSocket server for real-time chat
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  
  // REST API routes
  
  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByWalletAddress(userData.walletAddress);
      if (existingUser) {
        return res.json(existingUser);
      }
      
      const user = await storage.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: "Invalid user data" });
    }
  });
  
  app.get("/api/users/:walletAddress", async (req, res) => {
    try {
      const user = await storage.getUserByWalletAddress(req.params.walletAddress);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });
  
  app.patch("/api/users/:id/preferences", async (req, res) => {
    try {
      const { preferences } = req.body;
      const user = await storage.updateUserPreferences(req.params.id, preferences);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to update preferences" });
    }
  });
  
  // Chat session routes
  app.post("/api/chat-sessions", async (req, res) => {
    try {
      const { userId } = req.body;
      if (!userId) {
        return res.status(400).json({ error: "User ID required" });
      }
      
      const session = await storage.createChatSession({ userId });
      res.status(201).json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat session" });
    }
  });
  
  app.get("/api/chat-sessions/:sessionId/messages", async (req, res) => {
    try {
      const messages = await storage.getMessagesBySession(req.params.sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });
  
  // HTTP message sending endpoint (fallback for WebSocket)
  app.post("/api/chat-sessions/:sessionId/messages", async (req, res) => {
    try {
      const { content } = req.body;
      const { sessionId } = req.params;
      
      if (!content || !sessionId) {
        return res.status(400).json({ error: "Content and session ID required" });
      }
      
      // Store user message
      const userMessage = await storage.createMessage({
        sessionId,
        content,
        role: 'user',
      });
      
      // Generate AI response
      const aiResponse = generateAIResponse(content);
      const aiMessage = await storage.createMessage({
        sessionId,
        content: aiResponse.content,
        role: 'ai',
        executionPlan: aiResponse.executionPlan,
      });
      
      // Create execution plan if present
      if (aiResponse.executionPlan) {
        await storage.createExecutionPlan({
          messageId: aiMessage.id,
          status: 'pending',
        });
      }
      
      res.json({
        userMessage,
        aiMessage,
      });
    } catch (error) {
      console.error('HTTP message error:', error);
      res.status(500).json({ error: "Failed to process message" });
    }
  });

  // Execution plan routes
  app.post("/api/execution-plans/:planId/approve", async (req, res) => {
    try {
      const plan = await storage.updateExecutionPlanStatus(req.params.planId, "approved");
      if (!plan) {
        return res.status(404).json({ error: "Execution plan not found" });
      }
      
      // Simulate transaction execution
      setTimeout(async () => {
        const mockTxHashes = ["0x123...", "0x456..."];
        await storage.updateExecutionPlanStatus(req.params.planId, "executed", mockTxHashes);
      }, 3000);
      
      res.json(plan);
    } catch (error) {
      res.status(500).json({ error: "Failed to approve execution plan" });
    }
  });
  
  app.post("/api/execution-plans/:planId/reject", async (req, res) => {
    try {
      const plan = await storage.updateExecutionPlanStatus(req.params.planId, "rejected");
      if (!plan) {
        return res.status(404).json({ error: "Execution plan not found" });
      }
      res.json(plan);
    } catch (error) {
      res.status(500).json({ error: "Failed to reject execution plan" });
    }
  });
  
  // WebSocket connection handling
  wss.on('connection', (ws: ExtendedWebSocket) => {
    console.log('WebSocket client connected');
    
    ws.on('message', async (data) => {
      try {
        const message: WSMessage = wsMessageSchema.parse(JSON.parse(data.toString()));
        
        switch (message.type) {
          case 'chat_message':
            await handleChatMessage(ws, message);
            break;
          case 'wallet_connected':
            await handleWalletConnection(ws, message);
            break;
          case 'execution_plan_response':
            await handleExecutionPlanResponse(ws, message);
            break;
        }
      } catch (error) {
        console.error('WebSocket message error:', error);
        ws.send(JSON.stringify({ type: 'error', message: 'Invalid message format' }));
      }
    });
    
    ws.on('close', () => {
      console.log('WebSocket client disconnected');
    });
  });
  
  async function handleChatMessage(ws: ExtendedWebSocket, message: { sessionId: string; content: string }) {
    try {
      // Store user message
      const userMessage = await storage.createMessage({
        sessionId: message.sessionId,
        content: message.content,
        role: 'user',
      });
      
      // Broadcast user message to all clients in the session
      broadcastToSession(message.sessionId, {
        type: 'new_message',
        message: userMessage,
      });
      
      // Generate AI response with execution plan
      const aiResponse = generateAIResponse(message.content);
      const aiMessage = await storage.createMessage({
        sessionId: message.sessionId,
        content: aiResponse.content,
        role: 'ai',
        executionPlan: aiResponse.executionPlan,
      });
      
      // Create execution plan if present
      if (aiResponse.executionPlan) {
        await storage.createExecutionPlan({
          messageId: aiMessage.id,
          status: 'pending',
        });
      }
      
      // Broadcast AI response
      setTimeout(() => {
        broadcastToSession(message.sessionId, {
          type: 'new_message',
          message: aiMessage,
        });
      }, 1000); // Simulate AI thinking time
      
    } catch (error) {
      console.error('Chat message error:', error);
      ws.send(JSON.stringify({ type: 'error', message: 'Failed to process message' }));
    }
  }
  
  async function handleWalletConnection(ws: ExtendedWebSocket, message: { walletAddress: string }) {
    try {
      const user = await storage.getUserByWalletAddress(message.walletAddress);
      ws.userId = user?.id;
      
      ws.send(JSON.stringify({
        type: 'wallet_connected',
        user: user,
      }));
    } catch (error) {
      console.error('Wallet connection error:', error);
    }
  }
  
  async function handleExecutionPlanResponse(ws: ExtendedWebSocket, message: { messageId: string; action: 'approve' | 'reject' }) {
    try {
      // Find execution plan by message ID
      // This is a simplified implementation
      ws.send(JSON.stringify({
        type: 'execution_plan_updated',
        messageId: message.messageId,
        action: message.action,
      }));
    } catch (error) {
      console.error('Execution plan response error:', error);
    }
  }
  
  function broadcastToSession(sessionId: string, data: any) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const extClient = client as ExtendedWebSocket;
        if (extClient.sessionId === sessionId) {
          client.send(JSON.stringify(data));
        }
      }
    });
  }
  
  function generateAIResponse(userInput: string) {
    const input = userInput.toLowerCase();
    
    if (input.includes('swap') && input.includes('eth') && input.includes('usdc')) {
      return {
        content: "I'll help you swap ETH for USDC and deposit it into Aave. Here's the execution plan:",
        executionPlan: {
          title: "Execution Plan",
          steps: [
            {
              id: 1,
              protocol: "Uniswap V3",
              action: "Swap 1 ETH for USDC",
              amount: "~$2,841 USDC",
            },
            {
              id: 2,
              protocol: "Aave V3",
              action: "Deposit USDC into lending pool",
              apy: "5.2% APY",
            },
          ],
          summary: {
            networkCost: "~$0.45",
            expectedYield: "5.2% APY",
            riskLevel: "Medium" as const,
          },
        },
      };
    }
    
    if (input.includes('portfolio') || input.includes('balance')) {
      return {
        content: "I can help you check your portfolio balance across different protocols. Please connect your wallet first to view your current positions.",
        executionPlan: null,
      };
    }
    
    if (input.includes('yield') || input.includes('earn')) {
      return {
        content: "I can help you find the best yield opportunities on Arbitrum. Here are some current options:",
        executionPlan: {
          title: "Yield Opportunities",
          steps: [
            {
              id: 1,
              protocol: "Aave V3",
              action: "Supply USDC",
              apy: "5.2% APY",
            },
            {
              id: 2,
              protocol: "Uniswap V3",
              action: "Provide ETH/USDC liquidity",
              apy: "8.5% APY",
            },
          ],
          summary: {
            networkCost: "~$0.30",
            expectedYield: "5.2% - 8.5% APY",
            riskLevel: "Medium" as const,
          },
        },
      };
    }
    
    return {
      content: "Hello! I'm your ArbFlow agent. I can help you with DeFi operations on Arbitrum like swapping tokens, providing liquidity, lending, and more. What would you like to do?",
      executionPlan: null,
    };
  }

  return httpServer;
}
