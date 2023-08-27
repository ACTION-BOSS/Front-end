import { FC } from 'react';
import {
  PhotosView,
  ContentView,
  UnderButtonsView,
  CommentsView,
} from '../views';
import { useComments, useDetailData, useMetoo } from './hooks';

type DetailContainerProps = {};

export const DetailContainer: FC<DetailContainerProps> = ({}) => {
  const {
    data,
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
    comments,
    postId,
    postDone,
  } = useDetailData();

  const { handleClickMetooButton, localMetoo, localMetooCount } = useMetoo(
    agree,
    agreeCount,
  );

  const { onChangeComment, handleCreateComment, handleDeleteComment, body } =
    useComments();

  if (isLoading || error) {
    return <></>;
  }

  console.log('detail', data);

  return (
    <>
      <PhotosView imageUrlList={imageUrlList} postDone={postDone} />
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
        localMetoo={localMetoo}
        localMetooCount={localMetooCount}
        postDone={postDone}
      />
      <CommentsView
        comments={comments}
        postId={postId}
        nickname={nickname}
        onChangeComment={onChangeComment}
        handleCreateComment={handleCreateComment}
        handleDeleteComment={handleDeleteComment}
        body={body}
      />
    </>
  );
};
