import { useState, useEffect, useRef, useCallback } from 'react';
import type { ChatMessage } from '@/types';

interface UseWebSocketProps {
  sessionId?: string;
  onMessage?: (message: ChatMessage) => void;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export function useWebSocket({ sessionId, onMessage, onConnect, onDisconnect }: UseWebSocketProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return;
    }

    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
      onConnect?.();
    };

    ws.onclose = () => {
      setIsConnected(false);
      onDisconnect?.();
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === 'new_message') {
          const message: ChatMessage = {
            ...data.message,
            timestamp: new Date(data.message.timestamp),
          };
          setMessages(prev => [...prev, message]);
          onMessage?.(message);
        }
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }, [onMessage, onConnect, onDisconnect]);

  const disconnect = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  }, []);

  const sendMessage = useCallback((content: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN && sessionId) {
      wsRef.current.send(JSON.stringify({
        type: 'chat_message',
        sessionId,
        content,
      }));
    }
  }, [sessionId]);

  const sendWalletConnection = useCallback((walletAddress: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'wallet_connected',
        walletAddress,
      }));
    }
  }, []);

  const sendExecutionPlanResponse = useCallback((messageId: string, action: 'approve' | 'reject') => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'execution_plan_response',
        messageId,
        action,
      }));
    }
  }, []);

  useEffect(() => {
    // Only connect if we have a sessionId
    if (sessionId) {
      connect();
    }
    
    return () => {
      disconnect();
    };
  }, [connect, disconnect, sessionId]);

  return {
    isConnected,
    messages,
    sendMessage,
    sendWalletConnection,
    sendExecutionPlanResponse,
    connect,
    disconnect,
  };
}
