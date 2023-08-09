import React, { useEffect } from 'react';
import * as s from './MainMapStyle';

declare global {
  interface Window {
    kakao: any;
  }
}
export const MainMap: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = document.getElementById('map');

      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    }
  }, []);

  return (
    <s.MainMapContainer>
      <div id="map" style={{ width: '100%', height: '100%' }} />;
    </s.MainMapContainer>
  );
};
