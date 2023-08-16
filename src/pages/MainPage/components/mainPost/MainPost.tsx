import React from 'react';
import * as s from './MainPostStyle';
import { ClearSumIcon, MyDirectIcon, UncomSmallIcon } from '../../../../assets';
import { Post } from '../../type';

interface MainPostProps {
  currentOption: string;
  post: Post;
}

export const MainPost = ({ post, currentOption }: MainPostProps) => {
  return (
    <s.MainPostStyle>
      <s.MainPostImg currentoption={currentOption}>
        <div className="postImg">
          {currentOption === '해결순' && <ClearSumIcon />}
        </div>
        <img src={post.thumbnail} />
        <s.UnLike>
          <UncomSmallIcon size={18} />
          <div>{post.likeCount}</div>
        </s.UnLike>
      </s.MainPostImg>
      <s.MainPostContent>
        <div className="title">{post.title}</div>
        <div className="content">
          <div className="address">
            <MyDirectIcon size={20} />
            <div>{post.address}</div>
          </div>
          <div className="nickname">{post.nickname}</div>
        </div>
      </s.MainPostContent>
    </s.MainPostStyle>
  );
};
