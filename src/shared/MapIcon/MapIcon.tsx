import React, { FC } from 'react';
import * as s from './MapIconStyle';
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
    if (zoomLevel < 13) {
      onZoomChange(zoomLevel + 1);
    }
  };

  const getCurrentLocation = useGetCurrentLocation(mapCenterChangeHandler);

  return (
    <s.IconContainer>
      <div className="gpsIcon" onClick={getCurrentLocation}>
        <s.GPS />
      </div>
      <div className="mapSizeIcon">
        <div className="plusIcon" onClick={zoomInHandler}>
          <s.Plus />
        </div>
        <div className="line"></div>
        <div className="minusIcon" onClick={zoomOutHandler}>
          <s.Minus />
        </div>
      </div>
    </s.IconContainer>
  );
};
