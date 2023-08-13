import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postState } from '../../../../providers';
import { StContainer, StMapContainer, StMapText } from './style';
// import { MyDirectIcon } from '../../../../assets';

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<any>(null); // map 인스턴스를 state로 관리
  const [post, setPost] = useRecoilState(postState);

  useEffect(() => {
    if (window.kakao && window.kakao.maps && mapContainerRef.current) {
      const { Map, services, event, Marker, InfoWindow } = window.kakao.maps;

      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };

      const mapInstance = new Map(mapContainerRef.current, options);
      setMap(mapInstance);

      const geocoder = new services.Geocoder();
      const marker = new Marker();
      const infowindow = new InfoWindow({ zindex: 1 });

      // 확대/축소 컨트롤
      const zoomControl = new window.kakao.maps.ZoomControl();
      mapInstance.addControl(
        zoomControl,
        window.kakao.maps.ControlPosition.RIGHT,
      );

      // 지도 클릭 이벤트
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

              infowindow.setContent(address);
              infowindow.open(mapInstance, marker);
            }
          },
        );
      });
    }
  }, []); //종속 배열 어떻게 해야할지

  const searchDetailAddrFromCoords = (
    geocoder: any,
    coords: any,
    callback: any,
  ) => {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  };

  return (
    <>
      <StContainer>
        {/* <MyDirectIcon /> */}
        <StMapText>민원 위치 설정하기</StMapText>

        <StMapContainer ref={mapContainerRef}></StMapContainer>
      </StContainer>
    </>
  );
};
