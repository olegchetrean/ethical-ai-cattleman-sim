import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { SectorType } from '../AICommandCenter';
import { CustomerAcquisitionSector } from './CustomerAcquisitionSector';
import { CustomerServiceSector } from './CustomerServiceSector';
import { SalesOperationsSector } from './SalesOperationsSector';
import { MarketingCampaignsSector } from './MarketingCampaignsSector';
import { DataRecyclingSector } from './DataRecyclingSector';
import { SoyCultureSector } from './SoyCultureSector';
import { FeedLotSector } from './FeedLotSector';
import { RainforestSector } from './RainforestSector';
import { CornCultureSector } from './CornCultureSector';
import { CowManagementSector } from './CowManagementSector';

interface SectorViewProps {
  sector: SectorType;
  isPlaying: boolean;
}

export const SectorView: React.FC<SectorViewProps> = ({ sector, isPlaying }) => {
  const renderSector = () => {
    switch (sector) {
      case 'customer-acquisition':
        return <CustomerAcquisitionSector isPlaying={isPlaying} />;
      case 'customer-service':
        return <CustomerServiceSector isPlaying={isPlaying} />;
      case 'sales-operations':
        return <SalesOperationsSector isPlaying={isPlaying} />;
      case 'marketing-campaigns':
        return <MarketingCampaignsSector isPlaying={isPlaying} />;
      case 'data-recycling':
        return <DataRecyclingSector isPlaying={isPlaying} />;
      case 'soy-culture':
        return <SoyCultureSector isPlaying={isPlaying} />;
      case 'feed-lot':
        return <FeedLotSector isPlaying={isPlaying} />;
      case 'rainforest':
        return <RainforestSector isPlaying={isPlaying} />;
      case 'corn-culture':
        return <CornCultureSector isPlaying={isPlaying} />;
      case 'cow-management':
        return <CowManagementSector isPlaying={isPlaying} />;
      default:
        return <CustomerAcquisitionSector isPlaying={isPlaying} />;
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-game-orange border-2 h-full">
      <CardContent className="p-6 h-full">
        {renderSector()}
      </CardContent>
    </Card>
  );
};