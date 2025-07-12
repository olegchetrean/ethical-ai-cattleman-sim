import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomerServiceSectorProps {
  isPlaying: boolean;
}

export const CustomerServiceSector: React.FC<CustomerServiceSectorProps> = ({ isPlaying }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🎧 CUSTOMER SERVICE SECTOR</h2>
        <p className="gaming-text">AI agents handle customer support with 24/7 availability and instant responses.</p>
      </div>
      <div className="isometric-section p-6 min-h-[200px]">
        <div className="text-center text-white font-gaming">
          Customer Service Operations Active
        </div>
      </div>
    </div>
  );
};