import React from 'react';

interface SalesOperationsSectorProps {
  isPlaying: boolean;
}

export const SalesOperationsSector: React.FC<SalesOperationsSectorProps> = ({ isPlaying }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="gaming-title text-2xl mb-2">📊 SALES OPERATIONS SECTOR</h2>
        <p className="gaming-text">AI agents manage the sales pipeline from lead to deal closure.</p>
      </div>
      <div className="isometric-section p-6 min-h-[200px]">
        <div className="text-center text-white font-gaming">
          Sales Operations Active
        </div>
      </div>
    </div>
  );
};