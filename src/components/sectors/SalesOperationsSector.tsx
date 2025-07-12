import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, DollarSign, Users, AlertCircle } from 'lucide-react';

interface SalesOperationsSectorProps {
  isPlaying: boolean;
}

export const SalesOperationsSector: React.FC<SalesOperationsSectorProps> = ({ isPlaying }) => {
  const [cashiers, setCashiers] = useState(6);
  const [dailySales, setDailySales] = useState(47320);
  const [customersServed, setCustomersServed] = useState(1247);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setDailySales(prev => prev + Math.floor(Math.random() * 200) - 50);
        setCustomersServed(prev => prev + Math.floor(Math.random() * 10) - 2);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">🍔 FAST FOOD CHAIN SECTOR</h2>
        <p className="gaming-text">
          Critical sales points where customers complete transactions. 
          If there are no active cashiers, customers won't enter the restaurant.
        </p>
      </div>
      
      {/* Isometric Restaurant View */}
      <div className="isometric-section p-6 min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-yellow-500/20 rounded-lg" />
        
        {/* Restaurant Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          <Card className="bg-white/90 border-red-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-red-600" />
                Active Cashiers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-red-600">
                {cashiers}/8
              </div>
              <div className="text-xs text-gray-600">Registers operational</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-green-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-green-600" />
                Daily Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-green-600">
                ${dailySales.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">Revenue today</div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-blue-400">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <ShoppingCart className="h-4 w-4 text-blue-600" />
                Customers Served
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-gaming font-bold text-blue-600">
                {customersServed}
              </div>
              <div className="text-xs text-gray-600">Today</div>
            </CardContent>
          </Card>
        </div>

        {/* Cashier Stations */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-gaming mb-2">Cashier Stations:</div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-gaming ${
                  i < cashiers && isPlaying ? 'bg-green-500 pulse-gaming' : 'bg-gray-400'
                }`}
              >
                {i < cashiers ? '👨‍💼' : '❌'}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Critical Warning */}
      <Card className="border-red-500 bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-red-700">
            <AlertCircle className="h-5 w-5" />
            <span className="font-gaming font-bold">CRITICAL:</span>
          </div>
          <p className="text-sm text-red-600 mt-2">
            Without active cashiers, customers cannot complete purchases and will leave. 
            Each inactive register represents lost revenue potential.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};