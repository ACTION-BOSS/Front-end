import React from 'react';
import { MainPageLayout } from './layout';
import { MainMap, MainPosts } from './components';

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainMap />
      <MainPosts />
    </MainPageLayout>
  );
};

export default MainPage;
