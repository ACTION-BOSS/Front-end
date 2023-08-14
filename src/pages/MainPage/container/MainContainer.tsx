import React, { useState } from 'react';
import { MainMap, MainPosts } from '../components';
import { getMainPingData, mainSidebarData } from './dummy';

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

  const data = mainSidebarData;
  const pingData = getMainPingData;

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <MainMap
        mapCenter={mapCenter}
        mapCenterChangeHandler={mapCenterChangeHandler}
        pingData={pingData}
      />
      <MainPosts
        currentOption={currentOption}
        optionChangeHandler={optionChangeHandler}
        data={data}
      />
    </div>
  );
};
