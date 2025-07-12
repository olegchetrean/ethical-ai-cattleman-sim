import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, LogOut, Play, Pause, Settings, Zap, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';
import { SectorView } from './sectors/SectorView';
import { ResourceMonitor } from './interface/ResourceMonitor';
import { GameControls } from './interface/GameControls';
import { SectorSwitcher } from './interface/SectorSwitcher';
import { PopupInfo } from './interface/PopupInfo';

export type SectorType = 'customer-acquisition' | 'customer-service' | 'sales-operations' | 'marketing-campaigns' | 'data-recycling' | 'soy-culture' | 'feed-lot' | 'rainforest' | 'corn-culture' | 'cow-management';

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
      name: 'Customer Acquisition', 
      icon: '👥',
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
      icon: '💼',
      status: 'active',
      agents: 6,
      performance: 97.8
    },
    { 
      id: 'marketing-campaigns' as SectorType, 
      name: 'Marketing Campaigns', 
      icon: '📊',
      status: 'warning',
      agents: 15,
      performance: 78.3
    },
    { 
      id: 'data-recycling' as SectorType, 
      name: 'Data Analytics', 
      icon: '📈',
      status: 'active',
      agents: 4,
      performance: 87.5
    },
    { 
      id: 'soy-culture' as SectorType, 
      name: 'Product Development', 
      icon: '🔬',
      status: 'active',
      agents: 8,
      performance: 95.2
    },
    { 
      id: 'feed-lot' as SectorType, 
      name: 'Operations', 
      icon: '⚙️',
      status: 'active',
      agents: 6,
      performance: 89.7
    },
    { 
      id: 'rainforest' as SectorType, 
      name: 'Market Expansion', 
      icon: '🌍',
      status: 'warning',
      agents: 3,
      performance: 76.4
    },
    { 
      id: 'corn-culture' as SectorType, 
      name: 'Supply Chain', 
      icon: '🚚',
      status: 'active',
      agents: 5,
      performance: 92.8
    },
    { 
      id: 'cow-management' as SectorType, 
      name: 'Quality Control', 
      icon: '✅',
      status: 'active',
      agents: 7,
      performance: 98.1
    }
  ];

  const handleSectorInfo = (sectorId: SectorType) => {
    const sectorData = {
      'customer-acquisition': {
        title: 'Customer Acquisition Hub',
        description: 'Lead generation and prospecting operations. Track incoming leads, conversion rates, and campaign performance to optimize customer acquisition strategies.'
      },
      'customer-service': {
        title: 'Customer Service Center', 
        description: '24/7 customer support operations. Monitor response times, satisfaction ratings, and resolution metrics to ensure exceptional customer experience.'
      },
      'sales-operations': {
        title: 'Sales Operations Command',
        description: 'Sales pipeline management and deal tracking. Monitor conversion rates, deal values, and sales team performance to maximize revenue generation.'
      },
      'marketing-campaigns': {
        title: 'Marketing Campaign Control',
        description: 'Comprehensive marketing campaign management. Track ROI, engagement metrics, and brand awareness across all marketing channels and initiatives.'
      },
      'data-recycling': {
        title: 'Data Analytics Center',
        description: 'Business intelligence and data processing hub. Transform raw data into actionable insights for informed decision-making across all departments.'
      },
      'soy-culture': {
        title: 'Product Development Lab',
        description: 'Innovation and product development operations. Monitor R&D progress, market research, and product lifecycle management for competitive advantage.'
      },
      'feed-lot': {
        title: 'Operations Management',
        description: 'Core business operations oversight. Manage workflows, resource allocation, and operational efficiency to maintain smooth business processes.'
      },
      'rainforest': {
        title: 'Market Expansion Division',
        description: 'Strategic market expansion and business development. Identify new opportunities, partnerships, and growth initiatives for business scaling.'
      },
      'corn-culture': {
        title: 'Supply Chain Management',
        description: 'End-to-end supply chain coordination. Monitor inventory, logistics, supplier relationships, and delivery performance for optimal operations.'
      },
      'cow-management': {
        title: 'Quality Control Department',
        description: 'Quality assurance and compliance monitoring. Ensure product quality, regulatory compliance, and continuous improvement across all processes.'
      }
    };

    setPopupContent(sectorData[sectorId]);
    setShowPopup(true);
  };


  return (
    <div className={`min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="bg-game-orange animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </div>

      {/* Professional Branding */}
      <div className="absolute top-4 right-4 z-50">
        <div className="page-indicator">
          OPERATIONS HQ
        </div>
      </div>

      {/* Main Interface */}
      <div className="relative z-10 p-6">
        {/* Top Navigation */}
        <div className="mb-6">
          <Card className="bg-white/90 backdrop-blur-sm border-game-orange border-2">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-2xl md:text-3xl font-bold text-red-600">
                    BUSINESS COMMAND CENTER
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Real-time business operations management and performance monitoring
                  </p>
                </div>
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