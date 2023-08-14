import React, { useState } from 'react';
import { MainMap, MainPosts } from '../components';

export const MainContainer = () => {
  const [mapCenter, setMapCenter] = useState({
    lat: 37.565869791860365,
    lng: 126.98258019375905,
  });
  const [currentOption, setCurrentOption] = useState('최신순');

  const mapCenterChangeHandler = (newMapCenter: {
    lat: number;
    lng: number;
  }) => {
    setMapCenter(newMapCenter);
  };

  const optionChangeHandler = (option: string) => {
    setCurrentOption(option);
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <MainMap
        mapCenter={mapCenter}
        mapCenterChangeHandler={mapCenterChangeHandler}
      />
      <MainPosts
        currentOption={currentOption}
        optionChangeHandler={optionChangeHandler}
      />
    </div>
  );
};
