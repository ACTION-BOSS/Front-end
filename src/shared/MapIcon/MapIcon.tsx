import React from 'react';
import * as s from './MapIconStyle';
import { GPSIcon, MinusIcon, PlusIcon } from '../../assets';
import { useGetCurrentLocation } from '../../pages/MainPage/hook';

interface Props {
  zoomLevel: number;
  onZoomChange: (newZoomLevel: number) => void;
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void; // Remove the ": void" part
}

export const MapIcon = ({
  zoomLevel,
  onZoomChange,
  mapCenterChangeHandler,
}: Props) => {
  const zoomInHandler = () => {
    if (zoomLevel < 9) {
      onZoomChange(zoomLevel + 1);
    }
  };

  const zoomOutHandler = () => {
    if (zoomLevel > 1) {
      onZoomChange(zoomLevel - 1);
    }
  };

  const getCurrentLocation = useGetCurrentLocation(mapCenterChangeHandler);

  return (
    <s.IconContainer>
      <div className="gpsIcon" onClick={getCurrentLocation}>
        <GPSIcon size={24} />
      </div>
      <div className="mapSizeIcon">
        <div className="plusIcon" onClick={zoomInHandler}>
          <PlusIcon size={24} />
        </div>
        <div className="line"></div>
        <div className="minusIcon" onClick={zoomOutHandler}>
          <MinusIcon size={24} />
        </div>
      </div>
    </s.IconContainer>
  );
};
