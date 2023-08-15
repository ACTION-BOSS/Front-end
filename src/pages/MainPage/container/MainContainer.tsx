import React, { useState } from 'react';
import { MainMap, MainPosts } from '../components';

export const MainContainer = () => {
  const [currentOption, setCurrentOption] = useState('최신순');

  const optionChangeHandler = (option: string) => {
    setCurrentOption(option);
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <MainMap
        currentOption={currentOption}
      />
      <MainPosts
        currentOption={currentOption}
        optionChangeHandler={optionChangeHandler}
      />
    </div>
  );
};
