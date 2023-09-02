import React, { FC } from 'react';
import * as s from './MainPostsStyle';
import { Coordinates, Post } from '../../type';
import {
  MainPost,
  MainPostSkeleton,
  NoPost,
  DoneButton,
  OptionButtons,
} from '../../components';
import { useMainPostsLogic } from './MainPostsLogic';

type MainPostsProps = {
  mapCoordinates: Coordinates;
  isDone: boolean;
  handleClickDoneButton: () => void;
};

export const MainPosts: FC<MainPostsProps> = ({
  mapCoordinates,
  isDone,
  handleClickDoneButton,
}) => {
  const {
    option,
    isBottomContente,
    isLoading,
    allPosts,
    isError,
    observerElem,
    handleClickOptionButton,
    handleToggleBottomContent,
  } = useMainPostsLogic(mapCoordinates, isDone, handleClickDoneButton);

  return (
    <s.MainPostsConatiner $isBottomContente={isBottomContente}>
      <s.MainPostsShortLine onClick={handleToggleBottomContent}>
        <div />
      </s.MainPostsShortLine>
      <s.MainPostHeader>
        <div>우리동네 게시물</div>
        <DoneButton
          isDone={isDone}
          handleClickDoneButton={handleClickDoneButton}
        />
      </s.MainPostHeader>
      <s.MainPostsContent $isBottomContente={isBottomContente}>
        {!isLoading && allPosts.length === 0 ? (
          <s.NoPosts>
            <NoPost />
          </s.NoPosts>
        ) : (
          <OptionButtons
            option={option}
            handleClickOptionButton={handleClickOptionButton}
          />
        )}
        {allPosts.length !== 0 && (
          <s.MainPosts>
            {isLoading
              ? Array(5)
                  .fill(0)
                  .map((_, index) => <MainPostSkeleton key={index} />)
              : allPosts.map((post: Post) => (
                  <MainPost key={post.postId} post={post} isDone={isDone} />
                ))}
            {isError && <div>에러</div>}
            <div ref={observerElem} className="observerElem" />
          </s.MainPosts>
        )}
      </s.MainPostsContent>
    </s.MainPostsConatiner>
  );
};
