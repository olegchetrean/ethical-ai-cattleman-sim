import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Users, TrendingUp, MapPin } from 'lucide-react';

interface CornCultureSectorProps {
  isPlaying: boolean;
}

export const CornCultureSector: React.FC<CornCultureSectorProps> = ({ isPlaying }) => {
  const [productionRate, setProductionRate] = useState(92.8);
  const [cityDemand, setCityDemand] = useState(87.3);
  const [humanConsumption, setHumanConsumption] = useState(234567);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProductionRate(prev => Math.min(100, prev + Math.floor(Math.random() * 3) - 1));
        setCityDemand(prev => Math.min(100, prev + Math.floor(Math.random() * 4) - 2));
        setHumanConsumption(prev => prev + Math.floor(Math.random() * 100) - 30);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🌽 CORN CULTURE: DIVERSIFICATION</h2>
        <p className="gaming-text">
          Used by the city of Sao Jose for human consumption. 
          Diversified content strategy for broader market appeal.
        </p>
      </div>
      
      {/* Isometric Corn Fields */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-lg" />
        
        {/* Corn Culture Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <Card className="bg-white/90 border-yellow-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Wheat className="h-4 w-4 text-yellow-600" />
                Production Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-yellow-600">
                {productionRate.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Field efficiency</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-orange-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-orange-600" />
                Sao Jose Demand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-orange-600">
                {cityDemand.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">City requirement</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-green-600" />
                Human Consumption
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                {humanConsumption.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">Units served</div>
            </CardContent>
          </Card>
        </div>

        {/* Production Fields */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Sao Jose Supply Fields:</div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-gaming ${
                  isPlaying ? 'bg-yellow-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                C-{i + 1}
              </div>
            ))}
          </div>
          <div className="text-xs text-white/60 mt-2">
            Dedicated corn production for urban human consumption
          </div>
        </div>
      </div>

      {/* Market Strategy */}
      <Card className="border-yellow-500 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-700">
            <TrendingUp className="h-5 w-5" />
            Diversification Strategy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold text-yellow-700 mb-2">Market Benefits:</div>
              <ul className="space-y-1 text-yellow-600">
                <li>• Direct human food market access</li>
                <li>• Urban population engagement</li>
                <li>• Diversified revenue streams</li>
                <li>• Reduced dependency on single crops</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-yellow-700 mb-2">Sao Jose Partnership:</div>
              <ul className="space-y-1 text-yellow-600">
                <li>• Exclusive supply agreement</li>
                <li>• Municipal distribution network</li>
                <li>• Quality assurance protocols</li>
                <li>• Price stability guarantees</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
            <div className="text-center text-yellow-700 font-gaming text-sm">
              "Feeding the city while expanding our agricultural empire"
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};