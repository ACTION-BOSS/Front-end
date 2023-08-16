import { FC } from 'react';
import { PhotosView, ContentView, UnderButtonsView } from '../views';
import { useDetailData } from './hooks';
type DetailContainerProps = {};

export const DetailContainer: FC<DetailContainerProps> = ({}) => {
  const { data, isLoading, error } = useDetailData(19);

  if (isLoading || error) {
    return <></>;
  }

  console.log(data);
  const { imageUrlList, title, content, createdAt, address, nickname, owner } =
    data;

  return (
    <>
      <PhotosView imageUrlList={imageUrlList} />
      <ContentView
        title={title}
        content={content}
        createdAt={createdAt}
        nickname={nickname}
      />
      <UnderButtonsView address={address} owner={owner} />
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
