import React from 'react';
import * as s from './MainPostsStyle';
import { MainPost } from '../mainPost/MainPost';

export const MainPosts = () => {
  const OPTIONS = [
    { value: 'latest', name: '최신순' },
    { value: 'like', name: '좋아요순' },
    { value: 'done', name: '완료순' },
  ];
  return (
    <s.MainPostsConatiner>
      <s.MainPostHeader>
        <div>우리동네 민원들</div>
        <div>
          <select>
            {OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </s.MainPostHeader>
      <s.MainPosts>
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <MainPost key={index} />
          ))}
      </s.MainPosts>
    </s.MainPostsConatiner>
  );
};
