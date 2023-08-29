import React, { useState, useRef, useEffect, FC } from 'react';
import * as s from './MainPostsStyle';
import { Coordinates, Post } from '../../type';
import {
  MainPost,
  MainPostSkeleton,
  NoPost,
  DoneButton,
  OptionButtons,
} from '../../components';
import { useMainPostsQuery, useObserver } from '../../hook';

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
  const [option, setOption] = useState<string>('최신순');
  const [isBottomContente, setIsBottomContente] = useState<boolean>(false);
  const observerElem = useRef<HTMLDivElement>(null);

  const { data, isSuccess, fetchNextPage, hasNextPage, isLoading, isError } =
    useMainPostsQuery(option, isDone, mapCoordinates);

  const handleObserver = useObserver(fetchNextPage, hasNextPage || false);

  const handleClickOptionButton = (option: string) => {
    setOption(option);
  };

  const handleToggleBottomContent = () => {
    setIsBottomContente(!isBottomContente);
  };

  useEffect(() => {
    const element = observerElem.current;
    if (element) {
      const observer = new IntersectionObserver(handleObserver, {
        threshold: 1,
      });
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [handleObserver]);

  const allPosts =
    (isSuccess && data.pages.flatMap((page) => page.data.postList)) || [];
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
            {isLoading &&
              Array(5)
                .fill(0)
                .map((_, index) => <MainPostSkeleton key={index} />)}
            {isError && <div>에러</div>}
            {allPosts.map((post: Post) => (
              <MainPost key={post.postId} post={post} isDone={isDone} />
            ))}
            <div ref={observerElem} />
          </s.MainPosts>
        )}
      </s.MainPostsContent>
    </s.MainPostsConatiner>
  );
};
