import { useEffect } from 'react';

export const useGetCurrentLocation = (
  onLocationReceived: (userLocation: { lat: number; lng: number }) => void,
) => {
  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        onLocationReceived(userLocation);
      });
    }
  };

  useEffect(() => {
    const saveMapCenter = sessionStorage.getItem('mapCenter');
    if (!saveMapCenter) getCurrentLocation();
  }, []);

  return getCurrentLocation;
};
