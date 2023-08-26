import React, { useState } from 'react';
import { MainMap, MainPosts } from '../views';

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
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
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
    </div>
  );
};
