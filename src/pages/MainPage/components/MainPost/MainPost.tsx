import React from 'react';
import * as s from './MainPostStyle';
import { ClearSumIcon, MyDirectIcon, UncomSmallIcon } from '../../../../assets';
import { Post } from '../../type';
import { useNavigate } from 'react-router-dom';

interface MainPostProps {
  post: Post;
  isDone: boolean;
}

export const MainPost = ({ post, isDone }: MainPostProps) => {
  const navigate = useNavigate();

  const onClickMovePage = (postId: number) => {
    navigate(`/detail/${postId}`);
  };
  return (
    <s.MainPostStyle onClick={() => onClickMovePage(post.postId)}>
      <s.MainPostImg isDone={isDone}>
        <div className="postImg">{isDone && <ClearSumIcon />}</div>
        <img src={post.thumbnail} />
        <s.UnLike>
          <UncomSmallIcon size={18} />
          <div>{post.agreeCount}</div>
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
