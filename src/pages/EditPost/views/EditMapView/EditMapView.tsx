import { useEffect, useRef, useState } from 'react';
import { MyDirectIcon, PingIcon } from '../../../../assets';
import { EditMapViewProps } from '../../type';
import {
  StContainer,
  StMapContainer,
  StMapText,
  StAddressContainer,
  StIconText,
  StAddressText,
} from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

export const EditMapView: React.FC<EditMapViewProps> = ({ data }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (!map && window.kakao && window.kakao.maps && mapContainerRef.current) {
      const { Map, Marker, MarkerImage } = window.kakao.maps;

      // 지도의 초기 위치 및 줌 레벨 설정
      const options = {
        center: new window.kakao.maps.LatLng(data.latitude, data.longitude),
        scrollwheel: true,
        draggable: false,
      };

      const mapInstance = new Map(mapContainerRef.current, options);
      setMap(mapInstance);

      // 마커 설정
      const pingIconSrc = PingIcon('최신순');
      const imageSize = new window.kakao.maps.Size(40, 40);
      const imageOption = { offset: new window.kakao.maps.Point(20, 20) };
      const markerImage = new MarkerImage(pingIconSrc, imageSize, imageOption);
      const marker = new Marker({
        position: new window.kakao.maps.LatLng(data.latitude, data.longitude),
        image: markerImage,
      });

      // 마커를 지도에 추가
      marker.setMap(mapInstance);
    }
  }, [data.latitude, data.longitude]);

  return (
    <>
      <StContainer>
        <StMapText>민원 위치</StMapText>
        <StMapContainer ref={mapContainerRef}>
          <StAddressContainer>
            <StIconText>
              <MyDirectIcon />
              <StAddressText>{data.address}</StAddressText>
            </StIconText>
          </StAddressContainer>
        </StMapContainer>
      </StContainer>
    </>
  );
};
