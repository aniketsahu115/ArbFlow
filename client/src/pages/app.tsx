import { Button } from "@/components/ui/button";
import { Settings, Wallet as WalletIcon } from "lucide-react";
import { ChatInterface } from "@/components/chat-interface";
import { WalletConnectionModal } from "@/components/wallet-connection-modal";
import { SettingsPanel } from "@/components/settings-panel";
import { useWallet } from "@/hooks/use-rainbow-wallet";
import { useWebSocket } from "@/hooks/use-websocket";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { UserPreferences, ChatMessage } from "@/types";

export default function App() {
  const { isConnected, address, isConnecting } = useWallet();
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // Local messages state for HTTP fallback
  const [localMessages, setLocalMessages] = useState<ChatMessage[]>([]);

  // WebSocket connection - only connect when we have a session
  const {
    isConnected: wsConnected,
    messages: wsMessages,
    sendMessage,
  } = useWebSocket({
    sessionId: sessionId || undefined,
    onMessage: (message: ChatMessage) => {
      console.log("New message received:", message);
    },
  });

  // Use WebSocket messages if connected, otherwise use local messages
  const messages = wsConnected ? wsMessages : localMessages;

  // Get or create user when wallet is connected
  const { data: user } = useQuery({
    queryKey: ["/api/users", address],
    enabled: !!address,
  });

  // Create chat session
  const createSessionMutation = useMutation({
    mutationFn: async (userId: string) => {
      const response = await apiRequest("POST", "/api/chat-sessions", {
        userId,
      });
      return response.json();
    },
    onSuccess: (session) => {
      setSessionId(session.id);
    },
  });

  // Create user mutation
  const createUserMutation = useMutation({
    mutationFn: async (walletAddress: string) => {
      const response = await apiRequest("POST", "/api/users", {
        walletAddress,
        preferences: {
          riskTolerance: 3,
          trustedProtocols: ["uniswap", "aave"],
          maxTransactionValue: 5,
          autoApproveSmall: false,
        },
      });
      return response.json();
    },
    onSuccess: (user) => {
      setUserId(user.id);
      createSessionMutation.mutate(user.id);
      queryClient.invalidateQueries({ queryKey: ["/api/users"] });
    },
  });

  // Update user preferences
  const updatePreferencesMutation = useMutation({
    mutationFn: async ({
      userId,
      preferences,
    }: {
      userId: string;
      preferences: UserPreferences;
    }) => {
      const response = await apiRequest(
        "PATCH",
        `/api/users/${userId}/preferences`,
        { preferences }
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users"] });
    },
  });

  // Create user when wallet connects
  useEffect(() => {
    if (address && !user && !createUserMutation.isPending) {
      createUserMutation.mutate(address);
    } else if (user && "id" in user && user.id && !sessionId) {
      setUserId(user.id);
      createSessionMutation.mutate(user.id);
    }
  }, [address, user, sessionId]);

  const handleSendMessage = async (content: string) => {
    if (sessionId) {
      // Try WebSocket first, fallback to HTTP if WebSocket not available
      if (wsConnected) {
        sendMessage(content);
      } else {
        // Fallback: Send via HTTP API
        try {
          const response = await apiRequest(
            "POST",
            `/api/chat-sessions/${sessionId}/messages`,
            {
              content,
            }
          );
          const data = await response.json();

          // Update local messages state with both user and AI messages
          const { userMessage, aiMessage } = data;
          setLocalMessages((prev) => [
            ...prev,
            {
              ...userMessage,
              timestamp: new Date(userMessage.timestamp),
            },
            {
              ...aiMessage,
              timestamp: new Date(aiMessage.timestamp),
            },
          ]);
        } catch (error) {
          console.error("Failed to send message via HTTP:", error);
        }
      }
    }
  };

  const handleSavePreferences = (preferences: UserPreferences) => {
    if (userId) {
      updatePreferencesMutation.mutate({ userId, preferences });
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 ethereum-gradient rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span
              className="text-xl font-semibold"
              data-testid="text-header-title"
            >
              ArbFlow
            </span>
          </div>

          {/* Wallet Connection Status */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowWalletModal(true)}
              className="flex items-center space-x-2"
              disabled={isConnecting}
              data-testid="button-wallet-status"
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  isConnected ? "bg-green-500" : "bg-red-500 animate-pulse"
                }`}
              ></div>
              <span className="text-sm font-medium">
                {isConnected && address
                  ? truncateAddress(address)
                  : "Connect Wallet"}
              </span>
              <WalletIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(true)}
              data-testid="button-settings"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <ChatInterface
          messages={messages}
          onSendMessage={handleSendMessage}
          isConnected={isConnected && !!sessionId}
        />
      </main>

      {/* Modals */}
      <WalletConnectionModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
      />

      <SettingsPanel
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        preferences={
          user && "preferences" in user
            ? user.preferences || {
                riskTolerance: 3,
                trustedProtocols: ["uniswap", "aave"],
                maxTransactionValue: 5,
                autoApproveSmall: false,
              }
            : {
                riskTolerance: 3,
                trustedProtocols: ["uniswap", "aave"],
                maxTransactionValue: 5,
                autoApproveSmall: false,
              }
        }
        onSave={handleSavePreferences}
      />
    </div>
  );
}
