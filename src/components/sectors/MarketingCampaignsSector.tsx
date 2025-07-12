import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, TrendingUp, Eye, Shield } from 'lucide-react';

interface MarketingCampaignsSectorProps {
  isPlaying: boolean;
}

export const MarketingCampaignsSector: React.FC<MarketingCampaignsSectorProps> = ({ isPlaying }) => {
  const [weirdos, setWeirdos] = useState(15);
  const [campaigns, setCampaigns] = useState(47);
  const [reach, setReach] = useState(2.3);
  const [detractors, setDetractors] = useState(['Environmentalists', 'Consumer Groups', 'Labor Unions']);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCampaigns(prev => prev + Math.floor(Math.random() * 3));
        setReach(prev => Math.max(0.1, prev + (Math.random() - 0.4) * 0.2));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🎨 MARKETING WEIRDOS SECTOR</h2>
        <p className="gaming-text">
          These weirdos are the best creatives on the market. They will set up the most 
          sophisticated and pervasive advertising campaigns. More ads means more customers.
        </p>
      </div>
      
      {/* Isometric Creative Office */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-blue-500/20 rounded-lg" />
        
        {/* Creative Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          <Card className="bg-white/90 border-pink-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Palette className="h-4 w-4 text-pink-600" />
                Creative Weirdos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-pink-600">
                {weirdos}
              </div>
              <div className="text-xs text-gray-600">Active artists</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-purple-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                Active Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-purple-600">
                {campaigns}
              </div>
              <div className="text-xs text-gray-600">Running now</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-blue-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Eye className="h-4 w-4 text-blue-600" />
                Reach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-blue-600">
                {reach.toFixed(1)}M
              </div>
              <div className="text-xs text-gray-600">People reached</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-red-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-red-600" />
                PR Defense
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-red-600">
                87%
              </div>
              <div className="text-xs text-gray-600">Threat neutralized</div>
            </CardContent>
          </Card>
        </div>

        {/* Detractor Monitor */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Active Detractors Being Countered:</div>
          <div className="flex flex-wrap gap-2">
            {detractors.map((detractor, i) => (
              <div 
                key={i}
                className={`px-3 py-1 rounded-full text-xs font-gaming ${
                  isPlaying ? 'bg-red-500 text-white pulse-gaming' : 'bg-gray-400'
                }`}
              >
                {detractor}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PR Strategy */}
      <Card className="border-amber-500 bg-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <Shield className="h-5 w-5" />
            PR Office: Counter-Measures Active
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-600">
            The public relations office develops countermeasures against our detractors 
            (environmentalists, consumer associations and other bands of radicals).
            Current threat level: MANAGED
          </p>
        </CardContent>
      </Card>
    </div>
  );
};