import { FC } from 'react';
import {
  PhotosView,
  ContentView,
  UnderButtonsView,
  CommentsView,
} from '../views';
import { useComments, useDetailData, useMetoo } from './hooks';
import styled from 'styled-components';
import { media } from '../../../styles';

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

  return (
    <>
      <PhotosView imageUrlList={imageUrlList} postDone={postDone} />
      <MobileContainerWrapper>
        <MobileContentWrapper>
          <ContentView
            title={title}
            content={content}
            createdAt={createdAt}
            nickname={nickname}
            postId={postId}
            owner={owner}
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
            postDone={postDone}
          />
        </MobileContentWrapper>
      </MobileContainerWrapper>
    </>
  );
};

const MobileContentWrapper = styled.div`
  ${media.mobile`
  padding : 24px;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);
  border-radius : 12px;
  `}
`;

const MobileContainerWrapper = styled.div`
  ${media.mobile`
  padding-left:24px;
  padding-right:24px;
  `}
`;
