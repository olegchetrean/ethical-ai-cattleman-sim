import React from 'react';
import { DollarSign, Users, Zap, TrendingUp } from 'lucide-react';

interface ResourceMonitorProps {
  cash: number;
  cost: number;
  activeAgents: number;
}

export const ResourceMonitor: React.FC<ResourceMonitorProps> = ({ 
  cash, 
  cost, 
  activeAgents 
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const profit = cash - cost;
  const isProfit = profit > 0;

  return (
    <div className="flex items-center gap-4">
      {/* Cash Flow */}
      <div className="resource-counter">
        <DollarSign className="h-4 w-4" />
        <span className="text-sm font-bold">
          {formatCurrency(cash)}
        </span>
      </div>

      {/* Active Agents */}
      <div className="resource-counter bg-gradient-to-r from-blue-500 to-purple-600">
        <Users className="h-4 w-4" />
        <span className="text-sm font-bold">
          {activeAgents} AI
        </span>
      </div>

      {/* Cost Indicator */}
      <div className="resource-counter bg-gradient-to-r from-orange-500 to-red-600">
        <Zap className="h-4 w-4" />
        <span className="text-sm font-bold">
          Cost: {formatCurrency(cost)}
        </span>
      </div>

      {/* Profit/Loss Indicator */}
      <div className={`resource-counter ${isProfit 
        ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
        : 'bg-gradient-to-r from-red-500 to-pink-600'
      }`}>
        <TrendingUp className={`h-4 w-4 ${!isProfit && 'rotate-180'}`} />
        <span className="text-sm font-bold">
          {isProfit ? '+' : ''}{formatCurrency(profit)}
        </span>
      </div>
    </div>
  );
};