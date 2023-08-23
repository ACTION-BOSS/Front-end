import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { PingIcon } from '../../../../assets';
import { postState } from '../../../../providers';
import { MapIcon } from '../../../../shared/MapIcon';
import { StContainer, StMapContainer, StMapText, StMainMapIcon } from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<any>(null);
  const [post, setPost] = useRecoilState(postState);
  const [zoomLevel, setZoomLevel] = useState<number>(3);
  const [mapCenter, setMapCenter] = useState({
    lat: 37.565869791860365,
    lng: 126.98258019375905,
  });

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

    if (map) {
      const currentCenter = map.getCenter();
      const newMapCenter = {
        lat: currentCenter.getLat(),
        lng: currentCenter.getLng(),
      };
      mapCenterChangeHandler(newMapCenter);
    }
  };

  const mapCenterChangeHandler = (newMapCenter: {
    lat: number;
    lng: number;
  }) => {
    setMapCenter(newMapCenter);
  };

  return (
    <>
      <StContainer>
        <StMapText>민원 위치 설정하기 *</StMapText>
        <StMapContainer ref={mapContainerRef}>
          <StMainMapIcon>
            <MapIcon
              zoomLevel={zoomLevel}
              onZoomChange={zoomChangeHandler}
              mapCenterChangeHandler={mapCenterChangeHandler}
            />
          </StMainMapIcon>
        </StMapContainer>
      </StContainer>
    </>
  );
};
