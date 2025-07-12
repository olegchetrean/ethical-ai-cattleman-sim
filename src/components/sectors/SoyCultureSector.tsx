import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, TrendingUp, Zap, Beaker } from 'lucide-react';

interface SoyCultureSectorProps {
  isPlaying: boolean;
}

export const SoyCultureSector: React.FC<SoyCultureSectorProps> = ({ isPlaying }) => {
  const [productivity, setProductivity] = useState(95.2);
  const [gmoLevel, setGmoLevel] = useState(87);
  const [pesticideUse, setPesticideUse] = useState(94);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProductivity(prev => Math.min(100, prev + Math.floor(Math.random() * 3) - 1));
        setGmoLevel(prev => Math.min(100, prev + Math.floor(Math.random() * 2) - 0.5));
        setPesticideUse(prev => Math.min(100, prev + Math.floor(Math.random() * 2) - 0.5));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🌾 SOY CULTURE: GMO ENHANCEMENT</h2>
        <p className="gaming-text">
          You can increase terrain productivity by using genetically modified plants. 
          GMOs allow us to use more aggressive pesticides to minimize pest damage.
        </p>
      </div>
      
      {/* Isometric Farm View */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-500/20 rounded-lg" />
        
        {/* GMO Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <Card className="bg-white/90 border-yellow-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Wheat className="h-4 w-4 text-yellow-600" />
                Productivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-yellow-600">
                {productivity.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Terrain efficiency</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Beaker className="h-4 w-4 text-green-600" />
                GMO Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                {gmoLevel}%
              </div>
              <div className="text-xs text-gray-600">Genetic modification</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-red-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-red-600" />
                Pesticide Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-red-600">
                {pesticideUse}%
              </div>
              <div className="text-xs text-gray-600">Aggressive treatment</div>
            </CardContent>
          </Card>
        </div>

        {/* Cultivation Fields */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Active GMO Fields:</div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-gaming ${
                  isPlaying ? 'bg-yellow-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                F-{i + 1}
              </div>
            ))}
          </div>
          <div className="text-xs text-white/60 mt-2">
            Enhanced soy production with genetic modification
          </div>
        </div>
      </div>

      {/* Process Benefits */}
      <Card className="border-green-500 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <TrendingUp className="h-5 w-5" />
            GMO Advantages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold text-green-700 mb-2">Benefits:</div>
              <ul className="space-y-1 text-green-600">
                <li>• +340% pest resistance</li>
                <li>• +250% yield increase</li>
                <li>• +180% pesticide tolerance</li>
                <li>• -67% crop loss</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-green-700 mb-2">Environmental Impact:</div>
              <ul className="space-y-1 text-green-600">
                <li>• Aggressive pesticide use enabled</li>
                <li>• Maximized land utilization</li>
                <li>• Reduced biodiversity</li>
                <li>• Increased chemical runoff</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};