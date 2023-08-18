import React, { useState, useEffect } from 'react';
import * as s from './MainMapStyle';
import { MapIcon } from '../../../../shared/MapIcon';
import { MainModal } from '../MainModal';
import { Coordinates, Ping, Post } from '../../type';
import { useQuery } from '@tanstack/react-query';
import { getMapPing, getSelectPost } from '../../../../api';
import { BigPingIcon, PingIcon } from '../../../../assets';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  currentOption: string;
  mapCoordinates: Coordinates;
  mapCoordinatesChangeHandler: (
    north: number,
    east: number,
    south: number,
    west: number,
  ) => void;
}

export const MainMap = ({
  currentOption,
  mapCoordinates,
  mapCoordinatesChangeHandler,
}: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(3);
  const [mapCenter, setMapCenter] = useState({
    lat: 37.565869791860365,
    lng: 126.98258019375905,
  });
  const [modalData, setModalData] = useState<Post>({
    address: '',
    agreeCount: 0,
    nickname: '',
    postId: 0,
    thumbnail: '',
    title: '',
  });
  const [previousData, setPreviousData] = useState<Ping[]>([]);

  const { data, isLoading, isError } = useQuery(
    ['mapPing', currentOption, mapCoordinates],
    () => getMapPing(currentOption, mapCoordinates),
  );

  useEffect(() => {
    if (data) {
      setPreviousData(data.data);
    }
  }, [data]);

  const renderPingMarkers = (pingData: Ping[], map: any, clusterer: any) => {
    pingData.forEach((ping: Ping) => {
      const marker = new window.kakao.maps.Marker({
        map,
        image: new window.kakao.maps.MarkerImage(
          PingIcon(currentOption),
          new window.kakao.maps.Size(51, 71),
        ),
        position: new window.kakao.maps.LatLng(ping.latitude, ping.longitude),
        id: ping.postId,
      });
      window.kakao.maps.event.addListener(marker, 'click', () => {
        onClickPingHandler(ping.postId);
      });
      clusterer.addMarker(marker);
    });
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

        map.setZoomable(false);

        const mapBounds = map.getBounds();
        mapCoordinatesChangeHandler(
          mapBounds.pa,
          mapBounds.oa,
          mapBounds.qa,
          mapBounds.ha,
        );

        window.kakao.maps.event.addListener(map, 'idle', () => {
          const newCenter = map.getCenter();
          setMapCenter({
            lat: newCenter.getLat(),
            lng: newCenter.getLng(),
          });

          const mapBounds = map.getBounds();
          mapCoordinatesChangeHandler(
            mapBounds.pa,
            mapBounds.oa,
            mapBounds.qa,
            mapBounds.ha,
          );
        });

        const clusterer = new window.kakao.maps.MarkerClusterer({
          map,
          averageCenter: true,
          minLevel: 3,
          gridSize: 50,
          styles: [
            {
              width: '130px',
              height: '95px',
              background: `url(${BigPingIcon(currentOption)})`,
              backgroundRepeat: 'no-repeat',
              color: '#fff',
              backgroundPosition: '15px 1px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '25px',
            },
          ],
        });

        if (isLoading && previousData.length > 0) {
          renderPingMarkers(previousData, map, clusterer);
        }

        data && renderPingMarkers(data.data, map, clusterer);
      });
    }
  }, [data, zoomLevel, mapCenter]);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const zoomChangeHandler = (newZoomLevel: number) => {
    setZoomLevel(newZoomLevel);
  };

  const onClickPingHandler = async (pingNum: number) => {
    try {
      const postData = await getSelectPost(pingNum);
      setModalData(postData.data);
      setIsModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const mapCenterChangeHandler = (currentMapCenter: {
    lat: number;
    lng: number;
  }) => {
    setMapCenter(currentMapCenter);
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
          <MainModal onClick={toggleModal} post={modalData} />
        </s.MainModalContainer>
      )}
    </s.MainMapContainer>
  );
};
