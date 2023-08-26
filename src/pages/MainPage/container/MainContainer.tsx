import React, { useState } from 'react';
import { MainMap, MainPosts } from '../views';
import * as s from './MainContainerStyle';

export const MainContainer = () => {
  const [isDone, setIsDone] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState({
    northlat: 0,
    eastlon: 0,
    southlat: 0,
    westlon: 0,
  });

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

  const handleClickDoneButton = () => {
    setIsDone(!isDone);
  };
  return (
    <s.MainContainer>
      <MainMap
        mapCoordinates={mapCoordinates}
        mapCoordinatesChangeHandler={mapCoordinatesChangeHandler}
        isDone={isDone}
      />
      <MainPosts
        mapCoordinates={mapCoordinates}
        isDone={isDone}
        handleClickDoneButton={handleClickDoneButton}
      />
    </s.MainContainer>
  );
};
