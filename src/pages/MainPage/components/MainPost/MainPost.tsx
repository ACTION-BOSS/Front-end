import React, { FC } from 'react';
import * as s from './MainPostStyle';
import { ClearSumIcon, MyDirectIcon, UncomSmallIcon } from '../../../../assets';
import { Post } from '../../type';
import { useNavigate } from 'react-router-dom';

type MainPostProps = {
  post: Post;
  isDone: boolean;
};

export const MainPost: FC<MainPostProps> = ({ post, isDone }) => {
  const navigate = useNavigate();
  const onClickMovePage = (postId: number) => {
    navigate(`/detail/${postId}`);
  };

  const { postId, thumbnail, agreeCount, title, address, nickname } = post;
  let croppedAddress = address.split(' ').slice(0, 3).join(' ');

  return (
    <s.MainPostStyle onClick={() => onClickMovePage(postId)}>
      <s.MainPostImg $isDone={isDone}>
        <div className="postImg">{isDone && <ClearSumIcon />}</div>
        <img src={thumbnail} alt="게시물 사진" />
        <s.UnLike>
          <UncomSmallIcon size={18} />
          <div>{agreeCount}</div>
        </s.UnLike>
      </s.MainPostImg>
      <s.MainPostContent>
        <div className="title">
          {title.length > 12 ? title.slice(0, 15).padEnd(18, '...') : title}
        </div>
        <div className="content">
          <div className="address">
            <MyDirectIcon size={20} />
            <div>{croppedAddress}</div>
          </div>
          <div className="nickname">
            {nickname.length > 6
              ? nickname.slice(0, 6).padEnd(9, '...')
              : nickname}
          </div>
        </div>
      </s.MainPostContent>
    </s.MainPostStyle>
  );
};
