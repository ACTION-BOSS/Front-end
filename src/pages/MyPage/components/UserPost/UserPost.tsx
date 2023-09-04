import React from 'react';
import * as s from './UserPostStyle';
import { ClearIcon, UncomBigIcon } from '../../../../assets';
import { Theme } from '../../../../styles';

export const UserPost = () => {
  const isDone = true;
  return (
    <s.UserPost>
      <s.PostTitle>게시물 제목</s.PostTitle>
      <s.PostContent>
        <s.DoneAndUncom>
          <s.isDone $isDone={isDone}>
            <ClearIcon
              color={isDone ? Theme.colors.blue : Theme.colors.gray3}
              size={18}
            />
            <div>{isDone ? '해결' : '미해결'}</div>
          </s.isDone>
          <s.Uncom>
            <UncomBigIcon size={18} />
            12
          </s.Uncom>
        </s.DoneAndUncom>
        <s.DateAndTime>
          <div>09.01</div>
          <div className="line"></div>
          <div>18:00</div>
        </s.DateAndTime>
      </s.PostContent>
    </s.UserPost>
  );
};
