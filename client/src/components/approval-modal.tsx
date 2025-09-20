import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileSignature, Loader2 } from "lucide-react";
import { useState } from "react";

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApprove?: () => void;
}

export function ApprovalModal({ isOpen, onClose, onApprove }: ApprovalModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApprove = async () => {
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate wallet approval
      onApprove?.();
      onClose();
    } catch (error) {
      console.error('Approval failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="w-16 h-16 ethereum-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <FileSignature className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold">Transaction Approval</DialogTitle>
          <DialogDescription>
            Please approve the transaction in your wallet
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-muted rounded-xl p-4 mt-6 space-y-2">
          <div className="flex justify-between items-center" data-testid="text-estimated-gas">
            <span className="text-sm text-muted-foreground">Estimated Gas</span>
            <span className="text-sm font-semibold">$0.45</span>
          </div>
          <div className="flex justify-between items-center" data-testid="text-network">
            <span className="text-sm text-muted-foreground">Network</span>
            <span className="text-sm font-semibold">Arbitrum One</span>
          </div>
          <div className="flex justify-between items-center" data-testid="text-actions">
            <span className="text-sm text-muted-foreground">Actions</span>
            <span className="text-sm font-semibold">2 transactions</span>
          </div>
        </div>
        
        {isProcessing && (
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Waiting for wallet confirmation...</span>
          </div>
        )}
        
        <div className="flex space-x-3 mt-6">
          <Button 
            onClick={handleApprove}
            disabled={isProcessing}
            className="flex-1 ethereum-gradient text-white"
            data-testid="button-approve-transaction"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              'Approve'
            )}
          </Button>
          <Button 
            variant="outline" 
            onClick={onClose}
            disabled={isProcessing}
            className="flex-1"
            data-testid="button-cancel-approval"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
