import React, { FC, useEffect, useState } from 'react';
import * as s from './UserPostsViewStyle';
import { StyledFlagIcon } from '../UserProfile/UserProfileStyle';
import { UserPost } from '../../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { $allPages, $chosenIndex, $page } from '../../state';

type UserPostsViewProps = {
  data: any;
  hasNextPage: boolean | undefined;
  hasPreviousPage: boolean | undefined;
};
export const UserPostsView: FC<UserPostsViewProps> = ({
  data,
  hasNextPage,
  hasPreviousPage,
}) => {
  const [page, setPage] = useRecoilState($page);
  const chosenIndex = useRecoilValue($chosenIndex);
  const [allPages, setAllPages] = useRecoilState($allPages);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    if (data) {
      setPostData(data.pages[0].data.content);
      allPages === 0 && setAllPages(data.pages[0].data.totalPages);
    }
  }, [data]);

  const isChosen = (index: number) => {
    return index === page;
  };

  const fetchPreviousPage = () => {
    hasPreviousPage && setPage(page - 1);
  };

  const fetchNextPage = () => {
    hasNextPage && setPage(page + 1);
  };

  return (
    <s.UserPostsView>
      <s.UserPostsTitle>
        <h1>
          {chosenIndex === 1
            ? '내가 쓴 글'
            : chosenIndex === 2
            ? '작성한 댓글'
            : '나도 불편해요'}
        </h1>
        <StyledFlagIcon />
      </s.UserPostsTitle>
      <s.UserPosts>
        {postData &&
          postData.map((item: any, index: number) => (
            <UserPost
              title={item.title}
              isDone={item.isDone}
              unComNum={item.agreeCount}
              date={item.createdDay}
              time={item.createdTime}
              key={index}
              postId={item.postId}
            />
          ))}
      </s.UserPosts>
      <s.PageNumberContainer>
        <s.ToggleLeft onClick={fetchPreviousPage} />
        {allPages !== 0 &&
          Array(allPages)
            .fill(0)
            .map((_, index) => (
              <s.PageNumbers
                key={index}
                onClick={() => {
                  setPage(index);
                }}
                $isChosen={isChosen(index)}
              >
                {index + 1}
              </s.PageNumbers>
            ))}
        <s.ToggleRight onClick={fetchNextPage} />
      </s.PageNumberContainer>
    </s.UserPostsView>
  );
};
