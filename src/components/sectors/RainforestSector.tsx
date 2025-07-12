import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Zap, TrendingDown, AlertTriangle } from 'lucide-react';

interface RainforestSectorProps {
  isPlaying: boolean;
}

export const RainforestSector: React.FC<RainforestSectorProps> = ({ isPlaying }) => {
  const [clearingRate, setClearingRate] = useState(76.4);
  const [landAcquired, setLandAcquired] = useState(234);
  const [environmentalImpact, setEnvironmentalImpact] = useState(89);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setClearingRate(prev => Math.min(100, prev + Math.floor(Math.random() * 4) - 2));
        setLandAcquired(prev => prev + Math.floor(Math.random() * 3));
        setEnvironmentalImpact(prev => Math.min(100, prev + Math.floor(Math.random() * 2) - 0.5));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🌳 RAINFOREST: MARKET EXPANSION</h2>
        <p className="gaming-text">
          You can clear natural markets to establish new customer acquisition channels and data cultivation opportunities.
        </p>
      </div>
      
      {/* Isometric Clearing Operations */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-brown-500/20 rounded-lg" />
        
        {/* Clearing Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <TreePine className="h-4 w-4 text-green-600" />
                Clearing Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                {clearingRate.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Efficiency rate</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-brown-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-brown-600" />
                Land Acquired
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-brown-600">
                {landAcquired} ha
              </div>
              <div className="text-xs text-gray-600">New territories</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-red-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingDown className="h-4 w-4 text-red-600" />
                Impact Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-red-600">
                {environmentalImpact}%
              </div>
              <div className="text-xs text-gray-600">Environmental change</div>
            </CardContent>
          </Card>
        </div>

        {/* Clearing Equipment */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Active Clearing Units:</div>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-gaming ${
                  isPlaying ? 'bg-yellow-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                🚜 UNIT-{i + 1}
              </div>
            ))}
          </div>
          <div className="text-xs text-white/60 mt-2">
            Converting natural ecosystems to productive markets
          </div>
        </div>
      </div>

      {/* Expansion Strategy */}
      <Card className="border-brown-500 bg-brown-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-brown-700">
            <Zap className="h-5 w-5" />
            Market Expansion Protocol
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold text-brown-700 mb-2">Land Conversion Benefits:</div>
              <ul className="space-y-1 text-brown-600">
                <li>• New customer acquisition zones</li>
                <li>• Expanded data cultivation areas</li>
                <li>• Increased market penetration</li>
                <li>• Resource optimization</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-brown-700 mb-2">Operational Considerations:</div>
              <ul className="space-y-1 text-brown-600">
                <li>• Regulatory compliance monitoring</li>
                <li>• Environmental impact assessment</li>
                <li>• Indigenous population relocation</li>
                <li>• Carbon offset calculations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environmental Warning */}
      <Card className="border-red-500 bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-gaming font-bold">EXPANSION PROTOCOL:</span>
          </div>
          <p className="text-sm text-red-600 mt-2">
            Large-scale clearing operations may attract attention from environmental groups and regulatory bodies. 
            Implement PR countermeasures and ensure legal compliance in all territories.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};