import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as s from './MainPostsStyle';
import {
  CheckIcon,
  CheckXIcon,
  ClearIcon,
  Toggle2Icon,
  ToggleIcon,
} from '../../../../assets';
import { getSidebarPosts } from '../../../../api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Coordinates, Post } from '../../type';
import { MainPost } from '../MainPost/MainPost';
import { MainPostSkeleton } from '../MainPostSkeleton';

interface Props {
  mapCoordinates: Coordinates;
  isDone: boolean;
  isDoneChangeHandler: () => void;
}

export const MainPosts = ({
  mapCoordinates,
  isDone,
  isDoneChangeHandler,
}: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const [currentOption, setCurrentOption] = useState('최신순');
  const OPTIONS = ['최신순', '불편순'];
  const observerElem = useRef<HTMLDivElement>(null);

  const onClickToggleHandler = () => {
    setIsToggle((prevToggle) => !prevToggle);
  };

  const onClickOptionHandler = (option: string) => {
    setCurrentOption(option);
    onClickToggleHandler();
  };
  //isLoading과 isFetching을 나누어 생각해봐야할듯
  const {
    data,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteQuery(
    ['sideBarPosts', currentOption, isDone, mapCoordinates],
    ({ pageParam = 0 }) =>
      getSidebarPosts(pageParam, currentOption, isDone, mapCoordinates),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.presentPage < lastPage.data.totalPage
          ? lastPage.data.presentPage + 1
          : null;
      },
    },
  );
  const handleObserver = useCallback(
    ([target]: IntersectionObserverEntry[]) => {
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

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
    <s.MainPostsConatiner>
      <s.MainPostHeader>
        <div>우리동네 민원들</div>
        <div>
          <div>
            <s.OptionButton
              onClick={onClickToggleHandler}
              active={isToggle.toString()}
            >
              <div>{currentOption}</div>
              {isToggle ? <Toggle2Icon size={16} /> : <ToggleIcon size={16} />}
            </s.OptionButton>
            <s.OptionList active={isToggle.toString()}>
              {OPTIONS.map((item, index) => (
                <li key={index} onClick={() => onClickOptionHandler(item)}>
                  {item}
                  {currentOption === item ? <CheckIcon /> : <CheckXIcon />}
                </li>
              ))}
            </s.OptionList>
          </div>
        </div>
      </s.MainPostHeader>
      <s.IsDoneButton isDone={isDone} onClick={isDoneChangeHandler}>
        {isDone ? <ClearIcon color="white" /> : <ClearIcon color="#5782FA" />}
        <div>해결된 민원 모아보기</div>
      </s.IsDoneButton>
      <s.MainPosts>
        {isLoading &&
          Array(5)
            .fill(0)
            .map((post, index) => <MainPostSkeleton key={index} />)}
        {/* isLoading 처음에 서버에 데이터 요청, isFetching 서버에 데이터를 다시 요청할때  */}
        {isError && <div>에러</div>}
        {allPosts.map((post: Post) => (
          <MainPost key={post.postId} post={post} isDone={isDone} />
        ))}
        <div ref={observerElem} />
      </s.MainPosts>
    </s.MainPostsConatiner>
  );
};
