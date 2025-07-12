import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, LogOut, Play, Pause, Settings, Zap, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';
import { SectorView } from './sectors/SectorView';
import { ResourceMonitor } from './interface/ResourceMonitor';
import { GameControls } from './interface/GameControls';
import { SectorSwitcher } from './interface/SectorSwitcher';
import { PopupInfo } from './interface/PopupInfo';

export type SectorType = 'customer-acquisition' | 'customer-service' | 'sales-operations' | 'marketing-campaigns';

interface AICommandCenterProps {
  className?: string;
}

export const AICommandCenter: React.FC<AICommandCenterProps> = ({ className }) => {
  const [currentSector, setCurrentSector] = useState<SectorType>('customer-acquisition');
  const [currentPage, setCurrentPage] = useState(1);
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
      name: 'Customer Acquisition', 
      icon: '🎪',
      status: 'active',
      agents: 12,
      performance: 94.2
    },
    { 
      id: 'customer-service' as SectorType, 
      name: 'Customer Service', 
      icon: '🎧',
      status: 'active',
      agents: 8,
      performance: 91.7
    },
    { 
      id: 'sales-operations' as SectorType, 
      name: 'Sales Operations', 
      icon: '📊',
      status: 'active',
      agents: 6,
      performance: 97.8
    },
    { 
      id: 'marketing-campaigns' as SectorType, 
      name: 'Marketing Campaigns', 
      icon: '📈',
      status: 'warning',
      agents: 15,
      performance: 78.3
    }
  ];

  const handleSectorInfo = (sectorId: SectorType) => {
    const sectorData = {
      'customer-acquisition': {
        title: 'Customer Acquisition Sector',
        description: 'AI agents work across social media platforms to identify and engage potential customers. Like skilled hunters, they track digital footprints and convert prospects into leads through intelligent conversations.'
      },
      'customer-service': {
        title: 'Customer Service Operations', 
        description: 'Dedicated AI agents handle customer support across all channels. They maintain high satisfaction rates through instant responses and escalate complex issues to human specialists when needed.'
      },
      'sales-operations': {
        title: 'Sales Operations Division',
        description: 'Sales AI agents manage the entire pipeline from lead qualification to deal closure. They optimize pricing, timing, and messaging for maximum conversion rates.'
      },
      'marketing-campaigns': {
        title: 'Marketing Campaign Engine',
        description: 'Creative AI "weirdos" generate and execute sophisticated marketing campaigns across platforms. High volume, targeted messaging drives customer engagement and brand awareness.'
      }
    };

    setPopupContent(sectorData[sectorId]);
    setShowPopup(true);
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, 30));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
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

      {/* Page Indicator */}
      <div className="absolute top-4 right-4 z-50">
        <div className="page-indicator">
          PAGE {currentPage} / 30
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
                  AI COMMAND CENTER
                </h1>
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              className="gaming-button px-6 py-3 text-lg"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">PREV</span>
            </Button>
            
            <Button 
              className="gaming-button px-8 py-3 text-lg"
              onClick={() => window.location.href = '/'}
            >
              <LogOut className="mr-2 h-5 w-5" />
              EXIT
            </Button>
            
            <Button 
              className="gaming-button px-6 py-3 text-lg"
              onClick={nextPage}
              disabled={currentPage === 30}
            >
              <span className="hidden sm:inline">NEXT</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

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