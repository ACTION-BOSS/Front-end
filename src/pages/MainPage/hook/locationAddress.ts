import { useEffect, useState } from 'react';

export const useLocationAddress = (mapCenter: { lat: number; lng: number }) => {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2RegionCode(
        mapCenter.lng,
        mapCenter.lat,
        (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            if (result.length > 0) {
              const fullAddress = result[0].address_name; // 전체 주소
              setAddress(fullAddress);
            } else {
              setAddress('주소를 찾을 수 없습니다.');
            }
          } else {
            setAddress('주소 검색 오류 발생');
          }
        },
      );
    });
  }, [mapCenter]);

  return address;
};
