import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface PopupInfoProps {
  title: string;
  description: string;
  onClose: () => void;
}

export const PopupInfo: React.FC<PopupInfoProps> = ({ 
  title, 
  description, 
  onClose 
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="popup-box max-w-md w-full animate-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between mb-4">
          <h3 className="gaming-subtitle text-lg font-bold">
            {title}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1 h-auto"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="gaming-text leading-relaxed">
          {description}
        </p>
        
        <div className="mt-6 flex justify-end">
          <Button 
            onClick={onClose}
            className="gaming-button px-6"
          >
            UNDERSTOOD
          </Button>
        </div>
      </div>
    </div>
  );
};