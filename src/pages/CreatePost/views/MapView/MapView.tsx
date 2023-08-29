import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { MyDirectIcon } from '../../../../assets';
import { MapIcon } from '../../../../shared/MapIcon';
import { useMap } from '../../container';
import { createPostState } from '../../state';
import {
  StContainer,
  StMapContainer,
  StMapText,
  StMainMapIcon,
  StAddressContainer,
  StIconText,
  StAddressText,
} from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

export const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [post, setPost] = useRecoilState(createPostState);

  const initialMapCenter = {
    lat: 37.565869791860365,
    lng: 126.98258019375905,
  };
  const initialZoomLevel = 3;

  const {
    map,
    zoomLevel,
    mapCenter,
    zoomChangeHandler,
    mapCenterChangeHandler,
  } = useMap(mapContainerRef, initialMapCenter, initialZoomLevel);

  return (
    <>
      <StContainer>
        <StMapText>사건 위치 설정하기 *</StMapText>
        <StMapContainer ref={mapContainerRef}>
          <StMainMapIcon>
            <MapIcon
              zoomLevel={zoomLevel}
              onZoomChange={zoomChangeHandler}
              mapCenterChangeHandler={mapCenterChangeHandler}
            />
          </StMainMapIcon>
          <StAddressContainer>
            <StIconText>
              <MyDirectIcon />
              <StAddressText>{post.address}</StAddressText>
            </StIconText>
          </StAddressContainer>
        </StMapContainer>
      </StContainer>
    </>
  );
};
