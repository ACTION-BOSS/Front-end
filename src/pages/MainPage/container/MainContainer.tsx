import React, { useState } from 'react';
import { MainMap, MainPosts } from '../views';
import * as s from './MainContainerStyle';

export const MainContainer = () => {
  const [isDone, setIsDone] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState({
    eastlon: 126.99508722680098,
    northlat: 37.57143011778435,
    southlat: 37.56027203893137,
    westlon: 126.96984867355701,
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
