import React, { FC } from 'react';
import * as s from './MainMapStyle';
import { Coordinates } from '../../type';
import { MapIcon } from '../../../../shared/MapIcon';
import { LocationBox, MainModal, SearchBox } from '../../components';
import { useMainMapLogic } from './MainMapLogic';

type MainMapProps = {
  isDone: boolean;
  mapCoordinates: Coordinates;
  mapCoordinatesChangeHandler: (
    north: number,
    east: number,
    south: number,
    west: number,
  ) => void;
};

export const MainMap: FC<MainMapProps> = ({
  isDone,
  mapCoordinates,
  mapCoordinatesChangeHandler,
}) => {
  const {
    mapRef,
    zoomLevel,
    isModal,
    mapCenter,
    modalData,
    zoomChangeHandler,
    mapCenterChangeHandler,
    toggleModal,
  } = useMainMapLogic(isDone, mapCoordinates, mapCoordinatesChangeHandler);

  return (
    <s.MainMapContainer>
      <div className="map" ref={mapRef} />
      <s.SearchBox>
        <SearchBox mapCenterChangeHandler={mapCenterChangeHandler} />
      </s.SearchBox>
      <s.MainMapIcon>
        <MapIcon
          zoomLevel={zoomLevel}
          onZoomChange={zoomChangeHandler}
          mapCenterChangeHandler={mapCenterChangeHandler}
        />
      </s.MainMapIcon>
      <s.MainLocationBox>
        <LocationBox mapCenter={mapCenter} />
      </s.MainLocationBox>
      {isModal && (
        <s.MainModalContainer>
          <MainModal onClick={toggleModal} post={modalData} />
        </s.MainModalContainer>
      )}
    </s.MainMapContainer>
  );
};
