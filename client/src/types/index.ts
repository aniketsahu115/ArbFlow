export interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
  chainId: number | null;
}

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'ai';
  timestamp: Date;
  executionPlan?: ExecutionPlan;
}

export interface ExecutionPlan {
  title: string;
  steps: ExecutionStep[];
  summary: {
    networkCost: string;
    expectedYield?: string;
    riskLevel: 'Low' | 'Medium' | 'High';
  };
}

export interface ExecutionStep {
  id: number;
  protocol: string;
  action: string;
  amount?: string;
  apy?: string;
}

export interface UserPreferences {
  riskTolerance: number;
  trustedProtocols: string[];
  maxTransactionValue: number;
  autoApproveSmall: boolean;
}

export interface ProtocolOption {
  id: string;
  name: string;
  icon: string;
  color: string;
  enabled: boolean;
}
