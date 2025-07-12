import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beef, TrendingUp, Scale, AlertTriangle } from 'lucide-react';

interface FeedLotSectorProps {
  isPlaying: boolean;
}

export const FeedLotSector: React.FC<FeedLotSectorProps> = ({ isPlaying }) => {
  const [fatContent, setFatContent] = useState(78.4);
  const [feedEfficiency, setFeedEfficiency] = useState(89.7);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(92.3);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setFatContent(prev => Math.min(100, prev + Math.floor(Math.random() * 4) - 1));
        setFeedEfficiency(prev => Math.min(100, prev + Math.floor(Math.random() * 3) - 1));
        setCustomerSatisfaction(prev => Math.min(100, prev + Math.floor(Math.random() * 2) - 0.5));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🐄 FEED LOT: CUSTOMER OPTIMIZATION</h2>
        <p className="gaming-text">
          Every good American wants a fat and greasy burger. Unfortunately, customers coming from organic sources are rather lean. 
          We must keep them here and overfeed them with hypercaloric soy-based content.
        </p>
      </div>
      
      {/* Isometric Feed Lot */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg" />
        
        {/* Feed Lot Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <Card className="bg-white/90 border-orange-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Scale className="h-4 w-4 text-orange-600" />
                Fat Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-orange-600">
                {fatContent.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Customer richness</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Beef className="h-4 w-4 text-green-600" />
                Feed Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                {feedEfficiency.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Conversion rate</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-blue-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                Satisfaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-blue-600">
                {customerSatisfaction.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">American preference</div>
            </CardContent>
          </Card>
        </div>

        {/* Feed Stations */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Hypercaloric Feed Stations:</div>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-gaming ${
                  isPlaying ? 'bg-orange-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                SOY-{i + 1}
              </div>
            ))}
          </div>
          <div className="text-xs text-white/60 mt-2">
            Intensive soy-based customer fattening process
          </div>
        </div>
      </div>

      {/* Process Description */}
      <Card className="border-orange-500 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Beef className="h-5 w-5" />
            American Preference Optimization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-orange-600 mb-4">
            Transform lean organic customers into the fat and greasy experience Americans crave. 
            Intensive hypercaloric content feeding ensures maximum satisfaction.
          </p>
          
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">🌱</span>
              </div>
              <div>Organic Lean Customers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">🌾</span>
              </div>
              <div>Soy-Based Feeding</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">🍔</span>
              </div>
              <div>Fat & Greasy Output</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Warning */}
      <Card className="border-amber-500 bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-amber-700">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-gaming font-bold">FEEDING PROTOCOL:</span>
          </div>
          <p className="text-sm text-amber-600 mt-2">
            Make sure there is sufficient fodder for all customers and avoid epidemics. 
            Monitor feed quality to prevent customer dissatisfaction and mass exodus.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};