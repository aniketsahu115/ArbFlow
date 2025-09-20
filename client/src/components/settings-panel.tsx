import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { useState } from "react";
import type { UserPreferences, ProtocolOption } from "@/types";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreferences;
  onSave: (preferences: UserPreferences) => void;
}

const protocolOptions: ProtocolOption[] = [
  { id: 'uniswap', name: 'Uniswap', icon: '🦄', color: 'bg-pink-500', enabled: true },
  { id: 'aave', name: 'Aave', icon: '👻', color: 'bg-blue-500', enabled: true },
  { id: 'compound', name: 'Compound', icon: '🏛️', color: 'bg-purple-500', enabled: false },
  { id: 'curve', name: 'Curve', icon: '🌀', color: 'bg-green-500', enabled: false },
];

const riskLabels = ['Conservative', 'Low', 'Medium', 'High', 'Aggressive'];

export function SettingsPanel({ isOpen, onClose, preferences, onSave }: SettingsPanelProps) {
  const [localPreferences, setLocalPreferences] = useState<UserPreferences>(preferences);

  const handleSave = () => {
    onSave(localPreferences);
    onClose();
  };

  const updateProtocol = (protocolId: string, enabled: boolean) => {
    const trustedProtocols = enabled
      ? [...localPreferences.trustedProtocols, protocolId]
      : localPreferences.trustedProtocols.filter(id => id !== protocolId);
    
    setLocalPreferences(prev => ({
      ...prev,
      trustedProtocols,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold">Agent Settings</DialogTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            data-testid="button-close-settings"
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {/* Risk Tolerance */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Risk Tolerance</Label>
            <div className="bg-muted rounded-xl p-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Conservative</span>
                <span>Aggressive</span>
              </div>
              <Slider
                value={[localPreferences.riskTolerance]}
                onValueChange={([value]) => setLocalPreferences(prev => ({ ...prev, riskTolerance: value }))}
                min={1}
                max={5}
                step={1}
                className="mb-2"
                data-testid="slider-risk-tolerance"
              />
              <div className="flex justify-center mt-2">
                <span className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  {riskLabels[localPreferences.riskTolerance - 1]}
                </span>
              </div>
            </div>
          </div>

          {/* Protocol Preferences */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Trusted Protocols</Label>
            <div className="space-y-3">
              {protocolOptions.map((protocol) => (
                <div 
                  key={protocol.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-xl hover:bg-accent transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 ${protocol.color} rounded-full flex items-center justify-center text-white text-sm`}>
                      {protocol.icon}
                    </div>
                    <span className="font-medium">{protocol.name}</span>
                  </div>
                  <Switch
                    checked={localPreferences.trustedProtocols.includes(protocol.id)}
                    onCheckedChange={(checked) => updateProtocol(protocol.id, checked)}
                    data-testid={`switch-protocol-${protocol.id}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Max Transaction Value */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Max Transaction Value</Label>
            <div className="bg-muted rounded-xl p-4">
              <Input
                type="number"
                value={localPreferences.maxTransactionValue}
                onChange={(e) => setLocalPreferences(prev => ({ 
                  ...prev, 
                  maxTransactionValue: parseFloat(e.target.value) || 0 
                }))}
                min={0.1}
                max={100}
                step={0.1}
                className="text-center font-semibold text-lg"
                data-testid="input-max-transaction-value"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">ETH per transaction</p>
            </div>
          </div>

          {/* Auto-approve small transactions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
              <div>
                <Label className="text-base font-semibold">Auto-approve small transactions</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically approve transactions under 0.1 ETH
                </p>
              </div>
              <Switch
                checked={localPreferences.autoApproveSmall}
                onCheckedChange={(checked) => setLocalPreferences(prev => ({ 
                  ...prev, 
                  autoApproveSmall: checked 
                }))}
                data-testid="switch-auto-approve-small"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <Button 
            onClick={handleSave}
            className="w-full ethereum-gradient text-white"
            data-testid="button-save-settings"
          >
            Save Settings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
