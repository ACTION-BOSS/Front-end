import React from 'react';
import { MainPageLayout } from './layout';
import { MainMap, MainPosts } from './components';

export const MainPage = () => {
  return (
    <MainPageLayout>
      <MainMap />
      <MainPosts />
    </MainPageLayout>
  );
};
