import { useState, useEffect } from 'react';
import { PingIcon } from '../../../assets';
import { useRecoilState } from 'recoil';
import { createPostState } from '../state';

export const useMap = (
  mapContainerRef: React.RefObject<HTMLDivElement>,
  initialMapCenter: { lat: number; lng: number },
  initialZoomLevel: number,
) => {
  const [map, setMap] = useState<any>(null);
  const [post, setPost] = useRecoilState(createPostState);
  const [zoomLevel, setZoomLevel] = useState<number>(initialZoomLevel);
  const [mapCenter, setMapCenter] = useState(initialMapCenter);

  useEffect(() => {
    if (!map && window.kakao && window.kakao.maps && mapContainerRef.current) {
      const { Map, services, event, Marker, InfoWindow, MarkerImage } =
        window.kakao.maps;
      const options = {
        center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
        level: zoomLevel,
      };

      const mapInstance = new Map(mapContainerRef.current, options);
      setMap(mapInstance);

      const geocoder = new services.Geocoder();
      const pingIconSrc = PingIcon(false);
      const imageSize = new window.kakao.maps.Size(40, 40);
      const imageOption = { offset: new window.kakao.maps.Point(20, 20) };
      const markerImage = new MarkerImage(pingIconSrc, imageSize, imageOption);
      const marker = new Marker({ image: markerImage });

      event.addListener(mapInstance, 'click', (mouseEvent: any) => {
        searchDetailAddrFromCoords(
          geocoder,
          mouseEvent.latLng,
          (result: any, status: any) => {
            if (status === services.Status.OK) {
              const address = result[0].address.address_name;
              const latitude = mouseEvent.latLng.getLat();
              const longitude = mouseEvent.latLng.getLng();
              setPost((prevPost) => ({
                ...prevPost,
                address,
                latitude,
                longitude,
              }));

              marker.setPosition(mouseEvent.latLng);
              marker.setMap(mapInstance);
            }
          },
        );
      });
    }
  }, []);

  useEffect(() => {
    if (map) {
      map.setLevel(zoomLevel);
    }
  }, [zoomLevel, map]);

  useEffect(() => {
    if (map) {
      const newCenter = new window.kakao.maps.LatLng(
        mapCenter.lat,
        mapCenter.lng,
      );
      map.setCenter(newCenter);
    }
  }, [mapCenter, map]);

  const searchDetailAddrFromCoords = (
    geocoder: any,
    coords: any,
    callback: any,
  ) => {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  };

  const zoomChangeHandler = (newZoomLevel: number) => {
    setZoomLevel(newZoomLevel);
  };

  const mapCenterChangeHandler = (newMapCenter: {
    lat: number;
    lng: number;
  }) => {
    setMapCenter(newMapCenter);
  };

  return {
    map,
    zoomLevel,
    mapCenter,
    zoomChangeHandler,
    mapCenterChangeHandler,
  };
};
