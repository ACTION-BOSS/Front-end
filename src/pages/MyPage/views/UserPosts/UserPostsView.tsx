import React, { FC, useEffect, useState } from 'react';
import * as s from './UserPostsViewStyle';
import { StyledFlagIcon } from '../UserProfile/UserProfileStyle';
import { ToggleLeftIcon, ToggleRightIcon } from '../../../../assets';
import { UserPost } from '../../components';
import { useRecoilState } from 'recoil';
import { $page } from '../../state';

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
  const [postData, setPostData] = useState([]);

  const isChosen = (index: number) => {
    return index === page;
  };

  const fetchPreviousPage = () => {
    hasPreviousPage && setPage(page - 1);
  };

  const fetchNextPage = () => {
    hasNextPage && setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      setPostData(data.pages[0].data.content);
    }
  }, [data]);

  return (
    <s.UserPostsView>
      <s.UserPostsTitle>
        <h1>내가 쓴 글</h1>
        <StyledFlagIcon />
      </s.UserPostsTitle>
      <s.UserPosts>
        {postData &&
          postData.map((item: any) => (
            <UserPost
              title={item.title}
              isDone={item.isDone}
              unComNum={item.agreeCount}
              date={item.createdDay}
              time={item.createdTime}
              key={item.postId}
            />
          ))}
      </s.UserPosts>
      <s.PageNumberContainer>
        <div onClick={fetchPreviousPage}>
          <ToggleLeftIcon />
        </div>
        {data &&
          Array(data.pages[0].data.totalPages)
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
        <div onClick={fetchNextPage}>
          <ToggleRightIcon />
        </div>
      </s.PageNumberContainer>
    </s.UserPostsView>
  );
};
