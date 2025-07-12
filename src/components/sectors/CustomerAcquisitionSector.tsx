import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Target, TrendingUp, Bot } from 'lucide-react';

interface CustomerAcquisitionSectorProps {
  isPlaying: boolean;
}

export const CustomerAcquisitionSector: React.FC<CustomerAcquisitionSectorProps> = ({ isPlaying }) => {
  const [metrics, setMetrics] = useState({
    activeProspects: 1247,
    conversationsToday: 456,
    conversionRate: 23.4,
    responseTime: 0.8,
    leadsGenerated: 89,
    socialPlatforms: 4
  });

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setMetrics(prev => ({
          ...prev,
          activeProspects: prev.activeProspects + Math.floor(Math.random() * 10) - 3,
          conversationsToday: prev.conversationsToday + Math.floor(Math.random() * 5),
          responseTime: Math.max(0.1, prev.responseTime + (Math.random() - 0.5) * 0.1),
          leadsGenerated: prev.leadsGenerated + Math.floor(Math.random() * 3)
        }));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const platforms = [
    { name: 'Facebook', status: 'active', leads: 34, icon: '📘' },
    { name: 'Instagram', status: 'active', leads: 28, icon: '📷' },
    { name: 'LinkedIn', status: 'warning', leads: 19, icon: '💼' },
    { name: 'Twitter', status: 'active', leads: 8, icon: '🐦' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🏭 DATA CISTERN SECTOR</h2>
        <p className="gaming-text">
          Here we store the soy-based fodder - all customer data and interactions are collected and processed for optimal AI training.
        </p>
      </div>

      {/* Isometric View Section */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg" />
        
        {/* Virtual Platforms */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {platforms.map((platform, idx) => (
            <div 
              key={platform.name}
              className={`bg-white/90 rounded-lg p-4 border-2 transform transition-all duration-500 hover:scale-105 ${
                platform.status === 'active' ? 'border-green-400' : 'border-amber-400'
              }`}
              style={{
                transform: `translateY(${isPlaying ? Math.sin(Date.now() / 1000 + idx) * 5 : 0}px)`
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{platform.icon}</div>
                <div className="font-gaming text-sm font-bold">{platform.name}</div>
                <div className="text-xs text-gray-600">{platform.leads} leads today</div>
                <Badge 
                  variant={platform.status === 'active' ? 'default' : 'secondary'}
                  className="mt-2 text-xs"
                >
                  {platform.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* AI Agents Working */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ${
                isPlaying ? 'animate-bounce' : ''
              }`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <Bot className="h-4 w-4 text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-game-orange">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              Active Prospects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-gaming font-bold text-game-red">
              {metrics.activeProspects.toLocaleString()}
            </div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-game-orange">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <MessageSquare className="h-4 w-4" />
              Conversations Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-gaming font-bold text-game-red">
              {metrics.conversationsToday}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              Avg response: {metrics.responseTime.toFixed(1)}s
            </div>
          </CardContent>
        </Card>

        <Card className="border-game-orange">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Target className="h-4 w-4" />
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-gaming font-bold text-game-red">
              {metrics.conversionRate}%
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3" />
              +5.2% vs last week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Process Flow */}
      <Card className="border-game-orange">
        <CardHeader>
          <CardTitle className="gaming-subtitle">Acquisition Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-game-orange rounded-full flex items-center justify-center mb-2">
                <span className="font-bold">🔍</span>
              </div>
              <div>Prospect Identification</div>
            </div>
            <div className="flex-1 h-px bg-game-orange mx-2" />
            <div className="text-center">
              <div className="w-12 h-12 bg-game-orange rounded-full flex items-center justify-center mb-2">
                <span className="font-bold">💬</span>
              </div>
              <div>AI Engagement</div>
            </div>
            <div className="flex-1 h-px bg-game-orange mx-2" />
            <div className="text-center">
              <div className="w-12 h-12 bg-game-orange rounded-full flex items-center justify-center mb-2">
                <span className="font-bold">✅</span>
              </div>
              <div>Lead Qualification</div>
            </div>
            <div className="flex-1 h-px bg-game-orange mx-2" />
            <div className="text-center">
              <div className="w-12 h-12 bg-game-red rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-white">💰</span>
              </div>
              <div>Sales Handoff</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};