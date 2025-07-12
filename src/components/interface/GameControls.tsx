import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, FastForward, Settings, RotateCcw } from 'lucide-react';
import { SectorType } from '../AICommandCenter';

interface GameControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentSector: SectorType;
}

export const GameControls: React.FC<GameControlsProps> = ({ 
  isPlaying, 
  onPlayPause, 
  currentSector 
}) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', { 
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="control-panel">
      <div className="flex items-center gap-3">
        {/* Time Display */}
        <div className="font-gaming text-sm">
          {getCurrentTime()}
        </div>

        {/* Play/Pause Controls */}
        <Button
          onClick={onPlayPause}
          className="gaming-button p-2"
          variant="ghost"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button>

        {/* Speed Controls */}
        <Button
          className="gaming-button p-2"
          variant="ghost"
          disabled={!isPlaying}
        >
          <FastForward className="h-5 w-5" />
        </Button>

        {/* Settings */}
        <Button
          className="gaming-button p-2"
          variant="ghost"
        >
          <Settings className="h-5 w-5" />
        </Button>

        {/* Reset */}
        <Button
          className="gaming-button p-2"
          variant="ghost"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>

        {/* Current Sector Display */}
        <div className="ml-4 font-interface text-sm">
          <span className="text-white/80">Focus:</span>
          <span className="ml-2 font-bold">
            {currentSector.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};