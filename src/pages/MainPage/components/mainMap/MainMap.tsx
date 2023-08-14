import React, { useState, useEffect } from 'react';
import * as s from './MainMapStyle';
import { MapIcon } from '../../../../shared/MapIcon';
import { MainModal } from '../MainModal';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  mapCenter: { lat: number; lng: number };
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void;
}
export const MainMap = ({ mapCenter, mapCenterChangeHandler }: Props) => {
  const [isModal, setIsModal] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(3);

  const onClickModalHandler = () => {
    setIsModal(!isModal);
  };

  const zoomChangeHandler = (newZoomLevel: number) => {
    setZoomLevel(newZoomLevel);
  };

  // 마커 추가 함수
  const addMarkerToMap = (position: { lat: number; lng: number }, map: any) => {
    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(position.lat, position.lng),
    });

    marker.setMap(map);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = document.getElementById('map');

      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
          level: zoomLevel,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 휠로 줌 막음
        map.setZoomable(false);

        // 초기 위치에 마커 추가
        addMarkerToMap(mapCenter, map);
      });
    }
  }, [zoomLevel, mapCenter]);

  return (
    <s.MainMapContainer>
      <div id="map" className="map" />
      <s.MainMapIcon>
        <MapIcon
          zoomLevel={zoomLevel}
          onZoomChange={zoomChangeHandler}
          mapCenterChangeHandler={mapCenterChangeHandler}
        />
      </s.MainMapIcon>
      {isModal && (
        <s.MainModalContainer>
          <MainModal onClick={onClickModalHandler} />
        </s.MainModalContainer>
      )}
    </s.MainMapContainer>
  );
};
