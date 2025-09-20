import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import type { ExecutionPlan } from "@/types";

interface ExecutionPlanProps {
  plan: ExecutionPlan;
  onApprove: () => void;
  onReject: () => void;
}

const protocolIcons: Record<string, { icon: string; color: string }> = {
  'Uniswap V3': { icon: '🦄', color: 'bg-pink-500' },
  'Aave V3': { icon: '👻', color: 'bg-blue-500' },
  'Compound': { icon: '🏛️', color: 'bg-purple-500' },
  'Curve': { icon: '🌀', color: 'bg-green-500' },
};

const riskColors = {
  Low: 'text-green-600',
  Medium: 'text-yellow-600',
  High: 'text-red-600',
};

export function ExecutionPlan({ plan, onApprove, onReject }: ExecutionPlanProps) {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardContent className="p-4">
        <h4 className="font-semibold text-primary mb-3 flex items-center" data-testid="text-execution-plan-title">
          <CheckCircle className="w-4 h-4 mr-2" />
          {plan.title}
        </h4>
        
        {/* Steps */}
        <div className="space-y-3 mb-4">
          {plan.steps.map((step) => {
            const protocolInfo = protocolIcons[step.protocol] || { icon: '⚡', color: 'bg-gray-500' };
            
            return (
              <div 
                key={step.id}
                className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-blue-100"
                data-testid={`execution-step-${step.id}`}
              >
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {step.id}
                </div>
                <div className={`w-6 h-6 ${protocolInfo.color} rounded-full flex items-center justify-center text-white text-xs`}>
                  {protocolInfo.icon}
                </div>
                <span className="text-sm font-medium flex-1">{step.action}</span>
                {step.amount && (
                  <span className="text-xs text-muted-foreground" data-testid={`step-amount-${step.id}`}>
                    {step.amount}
                  </span>
                )}
                {step.apy && (
                  <span className="text-xs text-muted-foreground" data-testid={`step-apy-${step.id}`}>
                    {step.apy}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-white p-3 rounded-lg border border-blue-100 mb-4">
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-muted-foreground block">Network Cost</span>
              <span className="font-semibold text-green-600" data-testid="text-network-cost">
                {plan.summary.networkCost}
              </span>
            </div>
            {plan.summary.expectedYield && (
              <div>
                <span className="text-muted-foreground block">Expected Yield</span>
                <span className="font-semibold text-blue-600" data-testid="text-expected-yield">
                  {plan.summary.expectedYield}
                </span>
              </div>
            )}
            <div>
              <span className="text-muted-foreground block">Risk Level</span>
              <span className={`font-semibold ${riskColors[plan.summary.riskLevel]}`} data-testid="text-risk-level">
                {plan.summary.riskLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button 
            onClick={onApprove}
            className="ethereum-gradient text-white flex-1"
            data-testid="button-approve-execution"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Approve
          </Button>
          <Button 
            onClick={onReject}
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50 flex-1"
            data-testid="button-reject-execution"
          >
            <XCircle className="w-4 h-4 mr-2" />
            Reject
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
