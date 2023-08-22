import { FC } from 'react';
import { PhotosView, ContentView, UnderButtonsView } from '../views';
import { useDetailData, useMetoo } from './hooks';
type DetailContainerProps = {};

export const DetailContainer: FC<DetailContainerProps> = ({}) => {
  const {
    isLoading,
    error,
    agree,
    agreeCount,
    imageUrlList,
    title,
    content,
    createdAt,
    address,
    nickname,
    owner,
  } = useDetailData();

  const { handleClickMetooButton, localMetooCount } = useMetoo(
    agree,
    agreeCount,
  );

  if (isLoading || error) {
    return <></>;
  }

  return (
    <>
      <PhotosView imageUrlList={imageUrlList} />
      <ContentView
        title={title}
        content={content}
        createdAt={createdAt}
        nickname={nickname}
      />
      <UnderButtonsView
        address={address}
        owner={owner}
        handleClickMetooButton={handleClickMetooButton}
        localMetooCount={localMetooCount}
      />
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
