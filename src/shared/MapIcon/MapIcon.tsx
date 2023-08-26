import React, { FC } from 'react';
import * as s from './MapIconStyle';
import { GPSIcon, MinusIcon, PlusIcon } from '../../assets';
import { useGetCurrentLocation } from '../../pages/MainPage/hook';

type MapIconProps = {
  zoomLevel: number;
  onZoomChange: (newZoomLevel: number) => void;
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void;
};

export const MapIcon: FC<MapIconProps> = ({
  zoomLevel,
  onZoomChange,
  mapCenterChangeHandler,
}) => {
  const zoomInHandler = () => {
    if (zoomLevel > 1) {
      onZoomChange(zoomLevel - 1);
    }
  };

  const zoomOutHandler = () => {
    if (zoomLevel < 9) {
      onZoomChange(zoomLevel + 1);
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
