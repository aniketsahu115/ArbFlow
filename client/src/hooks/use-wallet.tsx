import { useState, useEffect, createContext, useContext } from 'react';
import type { WalletState } from '@/types';

interface WalletContextType extends WalletState {
  connect: (provider: 'metamask' | 'walletconnect') => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    chainId: null,
  });
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = async (provider: 'metamask' | 'walletconnect') => {
    setIsConnecting(true);
    
    try {
      if (provider === 'metamask' && typeof window !== 'undefined' && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        
        const chainId = await window.ethereum.request({
          method: 'eth_chainId'
        });
        
        if (accounts.length > 0) {
          setWallet({
            isConnected: true,
            address: accounts[0],
            balance: null, // TODO: Fetch balance
            chainId: parseInt(chainId, 16),
          });
        }
      } else {
        // For demo purposes, simulate wallet connection
        setTimeout(() => {
          setWallet({
            isConnected: true,
            address: '0x1234567890123456789012345678901234567890',
            balance: '2.45',
            chainId: 42161, // Arbitrum One
          });
        }, 1000);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setWallet({
      isConnected: false,
      address: null,
      balance: null,
      chainId: null,
    });
  };

  // Listen for account changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnect();
        } else if (accounts[0] !== wallet.address) {
          setWallet(prev => ({
            ...prev,
            address: accounts[0],
          }));
        }
      };

      const handleChainChanged = (chainId: string) => {
        setWallet(prev => ({
          ...prev,
          chainId: parseInt(chainId, 16),
        }));
      };

      window.ethereum?.on('accountsChanged', handleAccountsChanged);
      window.ethereum?.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum?.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, [wallet.address]);

  const value: WalletContextType = {
    ...wallet,
    connect,
    disconnect,
    isConnecting,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, handler: (...args: any[]) => void) => void;
      removeListener: (event: string, handler: (...args: any[]) => void) => void;
    };
  }
}
