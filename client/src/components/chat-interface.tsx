import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ExecutionPlan } from "./execution-plan";
import { ApprovalModal } from "./approval-modal";
import type { ChatMessage } from "@/types";

interface ChatInterfaceProps {
  messages: ChatMessage[];
  onSendMessage: (content: string) => void;
  isConnected: boolean;
}

export function ChatInterface({ messages, onSendMessage, isConnected }: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState("");
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && isConnected) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleApprove = (plan: any) => {
    setSelectedPlan(plan);
    setShowApprovalModal(true);
  };

  const handleReject = (plan: any) => {
    console.log("Rejected plan:", plan);
    // TODO: Send rejection to backend
  };

  return (
    <>
      <Card className="min-h-[600px] flex flex-col shadow-lg">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 ethereum-gradient rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold" data-testid="text-agent-name">ArbFlow Agent</h3>
              <p className="text-sm text-muted-foreground">Your sovereign DeFi assistant</p>
            </div>
            <div className={`flex items-center space-x-2 text-sm ${isConnected ? 'text-green-600' : 'text-yellow-600'}`}>
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`}></div>
              <span data-testid="text-connection-status">
                {isConnected ? "Secure Connection" : "Connecting..."}
              </span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 px-6 py-4">
          <div className="space-y-6">
            {/* Welcome Message */}
            {messages.length === 0 && (
              <div className="flex items-start space-x-3 animate-fadeIn">
                <div className="w-8 h-8 ethereum-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="chat-bubble-ai p-4 rounded-2xl rounded-tl-sm max-w-lg">
                  <p className="text-sm" data-testid="text-welcome-message">
                    Welcome to ArbFlow! I'm your sovereign DeFi agent. I can help you swap tokens, 
                    provide liquidity, manage positions, and execute complex DeFi strategies on Arbitrum. 
                    What would you like to do today?
                  </p>
                </div>
              </div>
            )}

            {/* Chat Messages */}
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex items-start space-x-3 animate-fadeIn ${
                  message.role === 'user' ? 'justify-end' : ''
                }`}
              >
                {message.role === 'ai' && (
                  <div className="w-8 h-8 ethereum-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={`max-w-2xl ${message.role === 'user' ? 'order-first' : ''}`}>
                  <div className={`p-4 rounded-2xl ${
                    message.role === 'user' 
                      ? 'chat-bubble-user text-white rounded-tr-sm' 
                      : 'chat-bubble-ai rounded-tl-sm'
                  }`}>
                    <p className="text-sm" data-testid={`message-content-${message.id}`}>
                      {message.content}
                    </p>
                  </div>
                  
                  {/* Execution Plan */}
                  {message.executionPlan && (
                    <div className="mt-4" data-testid={`execution-plan-${message.id}`}>
                      <ExecutionPlan
                        plan={message.executionPlan}
                        onApprove={() => handleApprove(message.executionPlan)}
                        onReject={() => handleReject(message.executionPlan)}
                      />
                    </div>
                  )}
                </div>
                
                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <CardContent className="p-6 border-t border-border">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your DeFi request here..."
                className="flex-1"
                disabled={!isConnected}
                data-testid="input-chat-message"
              />
              <Button 
                type="submit" 
                disabled={!inputValue.trim() || !isConnected}
                className="ethereum-gradient text-white"
                data-testid="button-send-message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center">
              <Shield className="w-3 h-3 mr-1" />
              Your transactions require wallet approval and are executed on-chain
            </p>
          </form>
        </CardContent>
      </Card>

      <ApprovalModal
        isOpen={showApprovalModal}
        onClose={() => setShowApprovalModal(false)}
        onApprove={() => console.log("Plan approved:", selectedPlan)}
      />
    </>
  );
}
