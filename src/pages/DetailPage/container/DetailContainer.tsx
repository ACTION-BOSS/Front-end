import { FC } from 'react';
import { ContentView, PhotosView, TitleView } from '../views';
type DetailContainerProps = {};

export const DetailContainer: FC<DetailContainerProps> = ({}) => {
  return (
    <>
      <TitleView />
      <PhotosView />
      <ContentView />
    </>
  );
};
