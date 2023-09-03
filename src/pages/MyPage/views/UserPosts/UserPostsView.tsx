import React from 'react';
import { UserPost } from '../../components';
import * as s from './UserPostsViewStyle';
import { StyledFlagIcon } from '../UserProfile/UserProfileStyle';

export const UserPostsView = () => {
  return (
    <s.UserPostsView>
      <s.UserPostsTitle>
        <h1>내가 쓴 글</h1>
        <StyledFlagIcon />
      </s.UserPostsTitle>
      <s.UserPosts>
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </s.UserPosts>
    </s.UserPostsView>
  );
};
