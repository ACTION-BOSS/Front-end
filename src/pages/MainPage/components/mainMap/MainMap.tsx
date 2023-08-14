import React, { useState, useEffect } from 'react';
import * as s from './MainMapStyle';
import { MapIcon } from '../../../../shared/MapIcon';
import { MainModal } from '../MainModal';
import { mainSidebarData } from '../../container/dummy';
import { Ping, Post } from '../../type';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  mapCenter: { lat: number; lng: number };
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void;
  pingData: Ping[];
}

export const MainMap = ({
  mapCenter,
  mapCenterChangeHandler,
  pingData,
}: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(3);
  const [modalData, setModalData] = useState<Post>({
    address: '',
    likeCount: 0,
    nickname: '',
    postId: 0,
    thumbnail: '',
    title: '',
  });

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
        pingData.forEach((ping: any) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              ping.latitude,
              ping.longitude,
            ),
            id: ping.id,
          });
          window.kakao.maps.event.addListener(marker, 'click', () => {
            console.log('ping', ping.postId);
            const selectData = mainSidebarData.filter(
              (post) => post.postId === ping.postId,
            );
            setModalData(selectData[0]);
            setIsModal(true);
          });
        });
      });
    }
  }, [zoomLevel, mapCenter]);

  console.log(zoomLevel);

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
          <MainModal onClick={onClickModalHandler} post={modalData} />
        </s.MainModalContainer>
      )}
    </s.MainMapContainer>
  );
};
