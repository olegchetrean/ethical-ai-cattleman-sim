import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Trash2, TrendingUp, AlertTriangle } from 'lucide-react';

interface DataRecyclingSectorProps {
  isPlaying: boolean;
}

export const DataRecyclingSector: React.FC<DataRecyclingSectorProps> = ({ isPlaying }) => {
  const [wasteProcessed, setWasteProcessed] = useState(89.3);
  const [organicMatter, setOrganicMatter] = useState(2.7);
  const [recyclingRate, setRecyclingRate] = useState(94.2);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setWasteProcessed(prev => Math.min(100, prev + Math.floor(Math.random() * 3) - 1));
        setOrganicMatter(prev => Math.max(0.1, prev + (Math.random() - 0.5) * 0.3));
        setRecyclingRate(prev => Math.min(100, prev + Math.floor(Math.random() * 2) - 0.5));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">♻️ SLAUGHTER-O-MATIC SECTOR</h2>
        <p className="gaming-text">
          For each customer interaction processed, there is a lot of organic data we can't use. 
          It's convenient to turn these leftovers into processed insights and mix it in the AI training fodder.
        </p>
      </div>
      
      {/* Isometric Recycling Plant */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brown-400/20 to-orange-500/20 rounded-lg" />
        
        {/* Recycling Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <Card className="bg-white/90 border-brown-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Trash2 className="h-4 w-4 text-brown-600" />
                Organic Matter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-brown-600">
                {organicMatter.toFixed(1)}TB
              </div>
              <div className="text-xs text-gray-600">Data waste collected</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Recycle className="h-4 w-4 text-green-600" />
                Recycling Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                {recyclingRate.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Successfully processed</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-orange-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-orange-600" />
                Processed Output
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-orange-600">
                {wasteProcessed.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Ready for reuse</div>
            </CardContent>
          </Card>
        </div>

        {/* Processing Units */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Slaughter-o-matic Units:</div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div 
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-gaming ${
                  isPlaying ? 'bg-brown-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                S-{i + 1}
              </div>
            ))}
          </div>
          <div className="text-xs text-white/60 mt-2">
            Converting organic data waste into reusable AI training material
          </div>
        </div>
      </div>

      {/* Process Description */}
      <Card className="border-brown-500 bg-brown-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-brown-700">
            <Recycle className="h-5 w-5" />
            Circular Data Economy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-brown-600 mb-4">
            Transform leftover customer data into valuable AI training material. 
            Nothing goes to waste in our efficient data processing pipeline.
          </p>
          
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">🗑️</span>
              </div>
              <div>Data Waste Collection</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">⚙️</span>
              </div>
              <div>Slaughter-o-matic Processing</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">🍽️</span>
              </div>
              <div>AI Training Fodder</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card className="border-amber-500 bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-amber-700">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-gaming font-bold">QUALITY CONTROL:</span>
          </div>
          <p className="text-sm text-amber-600 mt-2">
            If the data fodder is too contaminated, the risk of AI model degradation increases. 
            To avoid system poisoning, monitor data quality and destroy diseased datasets before processing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};