import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as s from './MainPostsStyle';
import {
  CheckIcon,
  CheckXIcon,
  Toggle2Icon,
  ToggleIcon,
} from '../../../../assets';
import { getSidebarPosts } from '../../../../api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Post } from '../../type';
import { MainPost } from '../MainPost/MainPost';
import { MainPostSkeleton } from '../MainPostSkeleton';

interface Props {
  currentOption: string;
  optionChangeHandler: (option: string) => void;
}

export const MainPosts = ({ currentOption, optionChangeHandler }: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const OPTIONS = ['최신순', '불편순', '해결순'];
  const observerElem = useRef<HTMLDivElement>(null);

  const onClickToggleHandler = () => {
    setIsToggle((prevToggle) => !prevToggle);
  };

  const onClickOptionHandler = (option: string) => {
    optionChangeHandler(option);
    onClickToggleHandler();
  };

  const {
    data,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteQuery(
    ['sideBarPosts', currentOption],
    ({ pageParam = 0 }) => getSidebarPosts(pageParam, currentOption),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.presentPage < lastPage.totalPage
          ? lastPage.presentPage + 1
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
    (isSuccess && data.pages.flatMap((page) => page.postList)) || [];

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
      <s.MainPosts>
        {(isFetching || isLoading) &&
          Array(5)
            .fill(0)
            .map((post, index) => <MainPostSkeleton key={index} />)}
        {/* isLoading 처음에 서버에 데이터 요청, isFetching 서버에 데이터를 다시 요청할때  */}
        {isError && <div>에러</div>}
        {allPosts.map((post: Post) => (
          <MainPost
            key={post.postId}
            post={post}
            currentOption={currentOption}
          />
        ))}
        <div ref={observerElem} />
      </s.MainPosts>
    </s.MainPostsConatiner>
  );
};
