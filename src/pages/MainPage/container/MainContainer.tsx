import React, { useState } from 'react';
import { MainMap, MainPosts } from '../components';

export const MainContainer = () => {
  const [currentOption, setCurrentOption] = useState('최신순');
  const [mapCoordinates, setMapCoordinates] = useState({
    northlat: 0,
    eastlon: 0,
    southlat: 0,
    westlon: 0,
  });

  const optionChangeHandler = (option: string) => {
    setCurrentOption(option);
  };

  const mapCoordinatesChangeHandler = (
    nort: number,
    east: number,
    south: number,
    west: number,
  ) => {
    setMapCoordinates({
      northlat: nort,
      eastlon: east,
      southlat: south,
      westlon: west,
    });
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <MainMap
        currentOption={currentOption}
        mapCoordinates={mapCoordinates}
        mapCoordinatesChangeHandler={mapCoordinatesChangeHandler}
      />
      <MainPosts
        currentOption={currentOption}
        optionChangeHandler={optionChangeHandler}
        mapCoordinates={mapCoordinates}
      />
    </div>
  );
};
