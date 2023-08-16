import { FC } from 'react';
import { PhotosView, ContentView, UnderButtonsView } from '../views';
type DetailContainerProps = {};

export const DetailContainer: FC<DetailContainerProps> = ({}) => {
  return (
    <>
      <PhotosView />
      <ContentView />
      <UnderButtonsView />
    </>
  );
};

// <div
//   style={{
//     display: 'flex',
//     overflowY: 'auto',
//     wordBreak: 'break-word',
//   }}
// >
// </div>
