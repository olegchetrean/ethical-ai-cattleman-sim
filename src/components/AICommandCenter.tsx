import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, LogOut, Play, Pause, Settings, Zap, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';
import { SectorView } from './sectors/SectorView';
import { ResourceMonitor } from './interface/ResourceMonitor';
import { GameControls } from './interface/GameControls';
import { SectorSwitcher } from './interface/SectorSwitcher';
import { PopupInfo } from './interface/PopupInfo';

export type SectorType = 'customer-acquisition' | 'customer-service' | 'sales-operations' | 'marketing-campaigns' | 'data-recycling';

interface AICommandCenterProps {
  className?: string;
}

export const AICommandCenter: React.FC<AICommandCenterProps> = ({ className }) => {
  const [currentSector, setCurrentSector] = useState<SectorType>('customer-acquisition');
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<{title: string, description: string} | null>(null);

  // Simulate real-time data updates
  const [cashFlow, setCashFlow] = useState(47320);
  const [totalCost, setTotalCost] = useState(89400);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCashFlow(prev => prev + Math.floor(Math.random() * 100) - 30);
        setTotalCost(prev => prev + Math.floor(Math.random() * 50) - 10);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const sectors = [
    { 
      id: 'customer-acquisition' as SectorType, 
      name: 'Data Cistern', 
      icon: '🏭',
      status: 'active',
      agents: 12,
      performance: 94.2
    },
    { 
      id: 'customer-service' as SectorType, 
      name: 'Growth Hormones', 
      icon: '💉',
      status: 'active',
      agents: 8,
      performance: 91.7
    },
    { 
      id: 'sales-operations' as SectorType, 
      name: 'Fast Food Chain', 
      icon: '🍔',
      status: 'active',
      agents: 6,
      performance: 97.8
    },
    { 
      id: 'marketing-campaigns' as SectorType, 
      name: 'Marketing Weirdos', 
      icon: '🎨',
      status: 'warning',
      agents: 15,
      performance: 78.3
    },
    { 
      id: 'data-recycling' as SectorType, 
      name: 'Slaughter-o-matic', 
      icon: '♻️',
      status: 'active',
      agents: 4,
      performance: 87.5
    }
  ];

  const handleSectorInfo = (sectorId: SectorType) => {
    const sectorData = {
      'customer-acquisition': {
        title: 'Cistern: Data Storage Center',
        description: 'Here we store the soy-based fodder - all customer data and interactions are collected and processed for optimal AI training. Every conversation feeds the system.'
      },
      'customer-service': {
        title: 'Hormones: Growth Accelerators', 
        description: 'You can pump customers with targeted content to convert them more quickly. This could have some risks to customer trust, but make no mistake: in love and war everything is allowed.'
      },
      'sales-operations': {
        title: 'Cashier: Critical Sales Points',
        description: 'This crew member sells the services. If there are no active sales agents, customers won\'t enter the funnel. Critical for revenue generation.'
      },
      'marketing-campaigns': {
        title: 'Marketing: Creative Weirdos',
        description: 'These weirdos are the best creatives on the market. They will set up the most sophisticated and pervasive advertising campaigns. More ads means more customers.'
      },
      'data-recycling': {
        title: 'Slaughter-o-matic: Data Recycling',
        description: 'For each customer interaction processed, there is a lot of organic data we can\'t use. It\'s convenient to turn these leftovers into processed insights and mix it in the AI training fodder.'
      }
    };

    setPopupContent(sectorData[sectorId]);
    setShowPopup(true);
  };


  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="bg-game-orange animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </div>

      {/* McDonald's Style Branding */}
      <div className="absolute top-4 right-4 z-50">
        <div className="page-indicator">
          HEADQUARTERS
        </div>
      </div>

      {/* Main Interface */}
      <div className="relative z-10 p-6">
        {/* Top Navigation */}
        <div className="mb-6">
          <Card className="bg-white/90 backdrop-blur-sm border-game-orange border-2">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h1 className="gaming-title text-2xl md:text-3xl">
                  🍟 McDONALD'S AI EMPIRE
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Not just a fast food chain but a brand, a lifestyle, a symbol of Western culture's superiority
                </p>
                <div className="flex items-center gap-4">
                  <ResourceMonitor 
                    cash={cashFlow}
                    cost={totalCost}
                    activeAgents={sectors.reduce((sum, s) => sum + s.agents, 0)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Sector Switcher */}
          <div className="lg:col-span-1">
            <SectorSwitcher 
              sectors={sectors}
              currentSector={currentSector}
              onSectorChange={setCurrentSector}
              onSectorInfo={handleSectorInfo}
            />
          </div>

          {/* Main Sector View */}
          <div className="lg:col-span-3">
            <SectorView 
              sector={currentSector}
              isPlaying={isPlaying}
            />
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-center">
          <GameControls 
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            currentSector={currentSector}
          />
        </div>
      </div>

      {/* Popup Information */}
      {showPopup && popupContent && (
        <PopupInfo 
          title={popupContent.title}
          description={popupContent.description}
          onClose={() => setShowPopup(false)}
        />
      )}

      {/* Floating Status Indicators */}
      <div className="absolute bottom-20 right-6 space-y-2 z-40">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/90 text-white font-gaming text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>SYSTEM ONLINE</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/90 text-white font-gaming text-sm float-gaming">
          <Zap className="h-4 w-4" />
          <span>AUTO-OPTIMIZING</span>
        </div>
      </div>
    </div>
  );
};