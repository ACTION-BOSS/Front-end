import { useState, useEffect, useRef } from 'react';
import { Coordinates, Ping, Post } from '../../type';
import {
  createClusterer,
  DefaultMarkerImage,
  EnlargedMarkerImage,
} from '../../../../assets';
import { useMapDataQuery } from '../../hook';
import { getSelectPost } from '../../../../api';

export const useMainMapLogic = (
  isDone: boolean,
  mapCoordinates: Coordinates,
  mapCoordinatesChangeHandler: (
    north: number,
    east: number,
    south: number,
    west: number,
  ) => void,
) => {
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

  const { data } = useMapDataQuery(isDone, mapCoordinates);

  const updateMapBounds = () => {
    if (map) {
      const { pa, oa, qa, ha } = map.getBounds();
      mapCoordinatesChangeHandler(pa, oa, qa, ha);
    }
  };

  const renderPingMarkers = (pingData: Ping[], map: any) => {
    if (clustererRef.current) {
      clustererRef.current.clear();
    }
    const clusterer = createClusterer(map, isDone);

    const markers: any[] = [];

    pingData.forEach((ping: Ping) => {
      const marker = new window.kakao.maps.Marker({
        map,
        image: DefaultMarkerImage(isDone),
        position: new window.kakao.maps.LatLng(ping.latitude, ping.longitude),
        id: ping.postId,
      });

      markers.push(marker);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        markers.forEach((m: any) => {
          m.setImage(DefaultMarkerImage(isDone));
        });

        onClickPingHandler(ping.postId);
        marker.setImage(EnlargedMarkerImage(isDone));
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
      const saveMapCenter = sessionStorage.getItem('mapCenter');
      const saveMapLevel = sessionStorage.getItem('mapLevel');

      saveMapCenter && setMapCenter(JSON.parse(saveMapCenter));
      saveMapLevel && setZoomLevel(JSON.parse(saveMapLevel));

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
        if (currentZoomLevel > 13) {
          map.setLevel(13);
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
      currentClickedMarker.setImage(DefaultMarkerImage(isDone));
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
      saveMapZoom(zoomLevel);
    }
  }, [zoomLevel]);

  useEffect(() => {
    if (map) {
      const newCenter = new window.kakao.maps.LatLng(
        mapCenter.lat,
        mapCenter.lng,
      );
      map.setCenter(newCenter);
      saveMapCenter(mapCenter);
      updateMapBounds();
    }
  }, [mapCenter]);

  const saveMapZoom = (zoomLevel: number) => {
    sessionStorage.setItem('mapLevel', JSON.stringify(zoomLevel));
  };

  const saveMapCenter = (mapCenter: { lat: number; lng: number }) => {
    sessionStorage.setItem('mapCenter', JSON.stringify(mapCenter));
  };

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

  return {
    mapRef,
    map,
    zoomLevel,
    isModal,
    mapCenter,
    modalData,
    mapCoordinatesChangeHandler,
    zoomChangeHandler,
    mapCenterChangeHandler,
    toggleModal,
  };
};
