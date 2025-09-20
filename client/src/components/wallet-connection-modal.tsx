import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet, Chrome, QrCode, Loader2 } from "lucide-react";
import { useWallet } from "@/hooks/use-wallet";

interface WalletConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletConnectionModal({ isOpen, onClose }: WalletConnectionModalProps) {
  const { connect, isConnecting } = useWallet();

  const handleConnect = async (provider: 'metamask' | 'walletconnect') => {
    try {
      await connect(provider);
      onClose();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="w-16 h-16 ethereum-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold">Connect Your Wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to activate your ArbFlow agent
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 mt-6">
          {/* MetaMask */}
          <Button
            variant="outline"
            className="w-full h-16 justify-between"
            onClick={() => handleConnect('metamask')}
            disabled={isConnecting}
            data-testid="button-connect-metamask"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Chrome className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-medium">MetaMask</div>
                <div className="text-xs text-muted-foreground">Browser wallet</div>
              </div>
            </div>
            {isConnecting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <div className="text-muted-foreground">→</div>
            )}
          </Button>
          
          {/* WalletConnect */}
          <Button
            variant="outline"
            className="w-full h-16 justify-between"
            onClick={() => handleConnect('walletconnect')}
            disabled={isConnecting}
            data-testid="button-connect-walletconnect"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-medium">WalletConnect</div>
                <div className="text-xs text-muted-foreground">Mobile & Desktop</div>
              </div>
            </div>
            {isConnecting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <div className="text-muted-foreground">→</div>
            )}
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full mt-4" 
          onClick={onClose}
          data-testid="button-cancel-wallet-connection"
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
}
