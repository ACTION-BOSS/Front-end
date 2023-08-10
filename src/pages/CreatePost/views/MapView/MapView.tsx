import { useEffect, useRef, useState } from 'react';
import { StMapBg, StMapContainer } from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<any>(null); // map 인스턴스를 state로 관리

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

      // 지도 클릭 이벤트
      event.addListener(mapInstance, 'click', (mouseEvent: any) => {
        searchDetailAddrFromCoords(
          geocoder,
          mouseEvent.latLng,
          (result: any, status: any) => {
            if (status === services.Status.OK) {
              const detailAddr = !!result[0].road_address
                ? '<div>도로명주소 : ' +
                  result[0].road_address.address_name +
                  '</div>'
                : '';
              const content =
                '<div class="bAddr">' +
                '<span class="title">법정동 주소정보</span>' +
                detailAddr +
                '<div>지번 주소 : ' +
                result[0].address.address_name +
                '</div>' +
                '</div>';

              marker.setPosition(mouseEvent.latLng);
              marker.setMap(mapInstance);

              infowindow.setContent(content);
              infowindow.open(mapInstance, marker);
            }
          },
        );
      });

      // 지도 중심 변경 이벤트
      event.addListener(mapInstance, 'idle', () => {
        searchAddrFromCoords(
          geocoder,
          mapInstance.getCenter(),
          displayCenterInfo,
        );
      });
    }
  }, []);

  const searchAddrFromCoords = (geocoder: any, coords: any, callback: any) => {
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

  const searchDetailAddrFromCoords = (
    geocoder: any,
    coords: any,
    callback: any,
  ) => {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  };

  const displayCenterInfo = (result: any, status: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].region_type === 'H') {
          console.log(result[i].address_name); // 현재는 콘솔에 출력하도록 했습니다.
          break;
        }
      }
    }
  };

  return (
    <>
      <StMapBg>
        <StMapContainer ref={mapContainerRef}></StMapContainer>
      </StMapBg>
    </>
  );
};
