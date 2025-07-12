import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, TrendingUp, AlertTriangle, Zap } from 'lucide-react';

interface CustomerServiceSectorProps {
  isPlaying: boolean;
}

export const CustomerServiceSector: React.FC<CustomerServiceSectorProps> = ({ isPlaying }) => {
  const [hormoneLevel, setHormoneLevel] = useState(78);
  const [riskLevel, setRiskLevel] = useState(34);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setHormoneLevel(prev => Math.min(100, prev + Math.floor(Math.random() * 5) - 1));
        setRiskLevel(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">💉 GROWTH HORMONES SECTOR</h2>
        <p className="gaming-text">
          You can pump customers with targeted content to convert them more quickly. 
          This could have some risks to customer trust, but make no mistake: in love and war everything is allowed.
        </p>
      </div>
      
      {/* Isometric Section */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg" />
        
        {/* Hormone Injection System */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <Card className="bg-white/90 border-purple-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Syringe className="h-4 w-4 text-purple-600" />
                Hormone Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-purple-600">
                {hormoneLevel}%
              </div>
              <div className="text-xs text-gray-600">Growth acceleration</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-amber-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Risk Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-amber-600">
                {riskLevel}%
              </div>
              <div className="text-xs text-gray-600">Customer trust risk</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-600" />
                Conversion Boost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                +234%
              </div>
              <div className="text-xs text-gray-600">vs baseline</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Injections */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Active Hormone Injections:</div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className={`h-6 rounded-md flex items-center justify-center text-xs font-gaming ${
                  isPlaying ? 'bg-purple-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                H-{i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warning Message */}
      <Card className="border-red-500 bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-gaming font-bold">WARNING:</span>
          </div>
          <p className="text-sm text-red-600 mt-2">
            High hormone levels may cause customer trust degradation. 
            Monitor risk levels and adjust dosage accordingly. 
            In competitive markets, aggressive tactics may be necessary.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};