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
        console.log(position.coords.latitude, position.coords.longitude);
        onLocationReceived(userLocation);
      });
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return getCurrentLocation;
};
