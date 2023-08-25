import React, { useState, useRef, useEffect } from 'react';
import * as s from './MainMapStyle';
import { Coordinates, Ping, Post } from '../../type';
import { MapIcon } from '../../../../shared/MapIcon';
import { useQuery } from '@tanstack/react-query';
import { getMapPing, getSelectPost } from '../../../../api';
import { BigPingIcon, PingIcon } from '../../../../assets';
import { MainModal } from '../MainModal';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  isDone: boolean;
  mapCoordinates: Coordinates;
  mapCoordinatesChangeHandler: (
    north: number,
    east: number,
    south: number,
    west: number,
  ) => void;
}

export const MainMap = ({
  isDone,
  mapCoordinates,
  mapCoordinatesChangeHandler,
}: Props) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const clustererRef = useRef<any>(null);
  const [currentClickedMarker, setCurrentClickedMarker] = useState<any | null>(
    null,
  );

  const [map, setMap] = useState<any>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(3);
  const [isModal, setIsModal] = useState<boolean>(false);
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

  const { data } = useQuery(['mapPing', isDone, mapCoordinates], () =>
    getMapPing(isDone, mapCoordinates),
  );

  const updateMapBounds = () => {
    if (map) {
      const { pa, oa, qa, ha } = map.getBounds();
      mapCoordinatesChangeHandler(pa, oa, qa, ha);
    }
  };

  const defaultMarkerImage = new window.kakao.maps.MarkerImage(
    PingIcon(isDone),
    new window.kakao.maps.Size(51, 71),
  );

  const enlargedMarkerImage = new window.kakao.maps.MarkerImage(
    PingIcon(isDone), // 확대된 마커용 다른 아이콘이 필요할 수 있습니다.
    new window.kakao.maps.Size(61, 81), // 필요에 따라 크기 조정
  );

  const renderPingMarkers = (pingData: Ping[], map: any) => {
    if (clustererRef.current) {
      clustererRef.current.clear();
    }
    const clusterer = new window.kakao.maps.MarkerClusterer({
      map,
      averageCenter: true,
      minLevel: 5,
      gridSize: 70,
      styles: [
        {
          width: '130px',
          height: '95px',
          background: `url(${BigPingIcon(isDone)})`,
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

    const markers: any[] = [];

    pingData.forEach((ping: Ping) => {
      const marker = new window.kakao.maps.Marker({
        map,
        image: defaultMarkerImage,
        position: new window.kakao.maps.LatLng(ping.latitude, ping.longitude),
        id: ping.postId,
      });

      markers.push(marker);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        markers.forEach((m: any) => {
          m.setImage(defaultMarkerImage);
        });

        onClickPingHandler(ping.postId);
        marker.setImage(enlargedMarkerImage);
        setCurrentClickedMarker(marker);
      });

      clusterer.addMarker(marker);
    });

    window.kakao.maps.event.addListener(clusterer, 'clusterclick', () => {
      setZoomLevel(map.getLevel());
    });

    clustererRef.current = clusterer;
  };

  useEffect(() => {
    if (!map) {
      const options = {
        center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
        level: zoomLevel,
      };
      setMap(new window.kakao.maps.Map(mapRef.current, options));
    }
  }, []);

  useEffect(() => {
    if (map) {
      const handleZoomChanged = () => {
        const currentZoomLevel = map.getLevel();
        if (currentZoomLevel > 9) {
          map.setLevel(9);
        }
        setZoomLevel(map.getLevel());
      };

      const handleDragEnd = () => {
        const lat = map.getCenter().getLat();
        const lng = map.getCenter().getLng();
        setMapCenter({ lat, lng });
      };

      window.kakao.maps.event.addListener(
        map,
        'zoom_changed',
        handleZoomChanged,
      );
      window.kakao.maps.event.addListener(map, 'dragend', handleDragEnd);

      return () => {
        window.kakao.maps.event.removeListener(
          map,
          'zoom_changed',
          handleZoomChanged,
        );
        window.kakao.maps.event.removeListener(map, 'dragend', handleDragEnd);
      };
    }
  }, [map]);

  useEffect(() => {
    if (!isModal && currentClickedMarker) {
      currentClickedMarker.setImage(defaultMarkerImage);
      setCurrentClickedMarker(null);
    }
  }, [isModal]);

  useEffect(() => {
    if (map && data) {
      renderPingMarkers(data.data, map);
      setIsModal(false);
    }
  }, [map, data]);

  useEffect(() => {
    if (map) {
      map.setLevel(zoomLevel);
      updateMapBounds();
    }
  }, [zoomLevel]);

  useEffect(() => {
    if (map) {
      const newCenter = new window.kakao.maps.LatLng(
        mapCenter.lat,
        mapCenter.lng,
      );
      map.setCenter(newCenter);
      updateMapBounds();
    }
  }, [mapCenter]);

  const zoomChangeHandler = (newZoomLevel: number) => {
    setZoomLevel(newZoomLevel);
  };

  const mapCenterChangeHandler = (currentMapCenter: {
    lat: number;
    lng: number;
  }) => {
    setMapCenter(currentMapCenter);
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

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <s.MainMapContainer>
      <div className="map" ref={mapRef} />
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
