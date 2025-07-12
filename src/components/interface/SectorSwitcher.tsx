import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Info, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { SectorType } from '../AICommandCenter';

interface Sector {
  id: SectorType;
  name: string;
  icon: string;
  status: string;
  agents: number;
  performance: number;
}

interface SectorSwitcherProps {
  sectors: Sector[];
  currentSector: SectorType;
  onSectorChange: (sector: SectorType) => void;
  onSectorInfo: (sector: SectorType) => void;
}

export const SectorSwitcher: React.FC<SectorSwitcherProps> = ({
  sectors,
  currentSector,
  onSectorChange,
  onSectorInfo
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return 'text-green-600';
    if (performance >= 80) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-game-orange border-2">
      <CardContent className="p-4">
        <h2 className="gaming-subtitle text-lg mb-4">SECTOR CONTROL</h2>
        
        <div className="space-y-3">
          {sectors.map((sector) => (
            <div key={sector.id} className="relative">
              <Button
                className={`w-full justify-start p-4 h-auto ${
                  currentSector === sector.id 
                    ? 'sector-button active' 
                    : 'sector-button'
                }`}
                onClick={() => onSectorChange(sector.id)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sector.icon}</span>
                    <div className="text-left">
                      <div className="font-interface font-semibold text-sm">
                        {sector.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs opacity-80">
                        {getStatusIcon(sector.status)}
                        <span>{sector.agents} Agents</span>
                        <span className={getPerformanceColor(sector.performance)}>
                          {sector.performance}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSectorInfo(sector.id);
                    }}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-6 p-3 rounded-lg bg-game-orange/10 border border-game-orange/30">
          <p className="gaming-text text-xs">
            <strong>Remember:</strong> Events keep happening in sectors even when not currently shown. 
            Switch between them to monitor all operations.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};