import React, { useState, useEffect } from 'react';
import * as s from './MainMapStyle';
import { MapIcon } from '../../../../shared/MapIcon';
import { MainModal } from '../MainModal';
import { Ping, Post } from '../../type';
import { useQuery } from '@tanstack/react-query';
import { getMapPing, getSelectPost } from '../../../../api';
import { PingIcon } from '../../../../assets';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  currentOption: string;
}

export const MainMap = ({ currentOption }: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(3);
  const [mapCenter, setMapCenter] = useState({
    lat: 37.565869791860365,
    lng: 126.98258019375905,
  });
  const [modalData, setModalData] = useState<Post>({
    address: '',
    likeCount: 0,
    nickname: '',
    postId: 0,
    thumbnail: '',
    title: '',
  });

  const { data } = useQuery(['mapPing', currentOption], () =>
    getMapPing(currentOption),
  );

  const onClickPingHandler = async (pingNum: number) => {
    try {
      const postData = await getSelectPost(pingNum);
      setModalData(postData);
      setIsModal(true); // 모달을 열어주는 부분 추가
    } catch (e) {
      console.log(e);
    }
  };

  const mapCenterChangeHandler = (newMapCenter: {
    lat: number;
    lng: number;
  }) => {
    setMapCenter(newMapCenter);
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

        map.setZoomable(false); // 휠 줌 막음

        window.kakao.maps.event.addListener(map, 'dragend', function () {
          const newCenter = map.getCenter();
          setMapCenter({
            lat: newCenter.getLat(),
            lng: newCenter.getLng(),
          });
        });

        // 초기 위치에 마커 추가
        data?.forEach((ping: Ping) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            image: new window.kakao.maps.MarkerImage(
              PingIcon(currentOption),
              new window.kakao.maps.Size(51, 71),
            ),
            position: new window.kakao.maps.LatLng(
              ping.latitude,
              ping.longitude,
            ),
            id: ping.postId,
          });
          window.kakao.maps.event.addListener(marker, 'click', () => {
            onClickPingHandler(ping.postId);
          });
        });
      });
    }
  }, [data, zoomLevel, mapCenter]);

  const onClickModalHandler = () => {
    setIsModal(!isModal);
  };

  const zoomChangeHandler = (newZoomLevel: number) => {
    setZoomLevel(newZoomLevel);
  };

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
