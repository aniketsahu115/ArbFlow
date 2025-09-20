import { type User, type InsertUser, type ChatSession, type InsertChatSession, type Message, type InsertMessage, type ExecutionPlan, type InsertExecutionPlan } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByWalletAddress(walletAddress: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserPreferences(id: string, preferences: any): Promise<User | undefined>;
  
  // Chat Sessions
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatSession(id: string): Promise<ChatSession | undefined>;
  getChatSessionsByUser(userId: string): Promise<ChatSession[]>;
  
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  getMessagesBySession(sessionId: string): Promise<Message[]>;
  getMessage(id: string): Promise<Message | undefined>;
  
  // Execution Plans
  createExecutionPlan(plan: InsertExecutionPlan): Promise<ExecutionPlan>;
  getExecutionPlan(id: string): Promise<ExecutionPlan | undefined>;
  updateExecutionPlanStatus(id: string, status: string, transactionHashes?: string[]): Promise<ExecutionPlan | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private chatSessions: Map<string, ChatSession>;
  private messages: Map<string, Message>;
  private executionPlans: Map<string, ExecutionPlan>;

  constructor() {
    this.users = new Map();
    this.chatSessions = new Map();
    this.messages = new Map();
    this.executionPlans = new Map();
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByWalletAddress(walletAddress: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.walletAddress.toLowerCase() === walletAddress.toLowerCase()
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const defaultPreferences = {
      riskTolerance: 3,
      trustedProtocols: ["uniswap", "aave"],
      maxTransactionValue: 5,
      autoApproveSmall: false,
    };
    
    const user: User = {
      ...insertUser,
      id,
      createdAt: new Date(),
      preferences: insertUser.preferences || defaultPreferences,
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserPreferences(id: string, preferences: any): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, preferences };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Chat Sessions
  async createChatSession(insertSession: InsertChatSession): Promise<ChatSession> {
    const id = randomUUID();
    const session: ChatSession = {
      ...insertSession,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.chatSessions.set(id, session);
    return session;
  }

  async getChatSession(id: string): Promise<ChatSession | undefined> {
    return this.chatSessions.get(id);
  }

  async getChatSessionsByUser(userId: string): Promise<ChatSession[]> {
    return Array.from(this.chatSessions.values()).filter(
      (session) => session.userId === userId
    );
  }

  // Messages
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const message: Message = {
      ...insertMessage,
      id,
      timestamp: new Date(),
    };
    this.messages.set(id, message);
    return message;
  }

  async getMessagesBySession(sessionId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter((message) => message.sessionId === sessionId)
      .sort((a, b) => (a.timestamp?.getTime() || 0) - (b.timestamp?.getTime() || 0));
  }

  async getMessage(id: string): Promise<Message | undefined> {
    return this.messages.get(id);
  }

  // Execution Plans
  async createExecutionPlan(insertPlan: InsertExecutionPlan): Promise<ExecutionPlan> {
    const id = randomUUID();
    const plan: ExecutionPlan = {
      ...insertPlan,
      id,
      createdAt: new Date(),
      executedAt: null,
      status: insertPlan.status || "pending",
      transactionHashes: null,
    };
    this.executionPlans.set(id, plan);
    return plan;
  }

  async getExecutionPlan(id: string): Promise<ExecutionPlan | undefined> {
    return this.executionPlans.get(id);
  }

  async updateExecutionPlanStatus(id: string, status: string, transactionHashes?: string[]): Promise<ExecutionPlan | undefined> {
    const plan = this.executionPlans.get(id);
    if (!plan) return undefined;
    
    const updatedPlan = {
      ...plan,
      status: status as any,
      transactionHashes: transactionHashes || plan.transactionHashes,
      executedAt: status === "executed" ? new Date() : plan.executedAt,
    };
    this.executionPlans.set(id, updatedPlan);
    return updatedPlan;
  }
}

export const storage = new MemStorage();
