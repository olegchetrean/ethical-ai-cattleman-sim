import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Scale, TrendingUp, AlertCircle } from 'lucide-react';

interface CowManagementSectorProps {
  isPlaying: boolean;
}

export const CowManagementSector: React.FC<CowManagementSectorProps> = ({ isPlaying }) => {
  const [fatLevel, setFatLevel] = useState(87.3);
  const [processingRate, setProcessingRate] = useState(98.1);
  const [automationLevel, setAutomationLevel] = useState(94.7);
  const [readyForProcessing, setReadyForProcessing] = useState(23);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setFatLevel(prev => Math.min(100, prev + Math.floor(Math.random() * 4) - 1));
        setProcessingRate(prev => Math.min(100, prev + Math.floor(Math.random() * 2) - 0.5));
        setAutomationLevel(prev => Math.min(100, prev + Math.floor(Math.random() * 2) - 0.5));
        setReadyForProcessing(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🏭 AUTOMATED PROCESSING</h2>
        <p className="gaming-text">
          When customers are optimized enough, they will be automatically processed for maximum value extraction.
        </p>
      </div>
      
      {/* Isometric Processing Plant */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-red-500/20 rounded-lg" />
        
        {/* Processing Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          <Card className="bg-white/90 border-orange-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Scale className="h-4 w-4 text-orange-600" />
                Optimization Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-orange-600">
                {fatLevel.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Customer readiness</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-red-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Factory className="h-4 w-4 text-red-600" />
                Processing Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-red-600">
                {processingRate.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Extraction efficiency</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-blue-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                Automation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-blue-600">
                {automationLevel.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">System automation</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4 text-green-600" />
                Ready Queue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                {readyForProcessing}
              </div>
              <div className="text-xs text-gray-600">Awaiting processing</div>
            </CardContent>
          </Card>
        </div>

        {/* Processing Lines */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Automated Processing Lines:</div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-gaming ${
                  isPlaying ? 'bg-red-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                L-{i + 1}
              </div>
            ))}
          </div>
          <div className="text-xs text-white/60 mt-2">
            When fat enough, customers are automatically processed
          </div>
        </div>
      </div>

      {/* Automation Process */}
      <Card className="border-red-500 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <Factory className="h-5 w-5" />
            Automated Value Extraction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-600 mb-4">
            Advanced AI algorithms monitor customer optimization levels and automatically trigger processing 
            when maximum value potential is achieved.
          </p>
          
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">📊</span>
              </div>
              <div>Readiness Assessment</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">⚙️</span>
              </div>
              <div>Automated Processing</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">💰</span>
              </div>
              <div>Value Extraction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical System Alert */}
      <Card className="border-amber-500 bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-amber-700">
            <AlertCircle className="h-5 w-5" />
            <span className="font-gaming font-bold">PROCESSING PROTOCOL:</span>
          </div>
          <p className="text-sm text-amber-600 mt-2">
            Automated processing is triggered when customers reach optimal value. 
            System operates autonomously with minimal human intervention required.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};