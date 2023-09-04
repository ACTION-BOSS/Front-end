import React, { FC } from 'react';
import * as s from './UserPostStyle';
import { ClearIcon, UncomBigIcon } from '../../../../assets';
import { Theme } from '../../../../styles';

type UserPost = {
  title: string;
  isDone: boolean;
  unComNum: number;
  date: string;
  time: string;
};
export const UserPost: FC<UserPost> = ({
  title,
  isDone,
  unComNum,
  date,
  time,
}) => {
  return (
    <s.UserPost>
      <s.PostTitle>{title}</s.PostTitle>
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
            {unComNum}
          </s.Uncom>
        </s.DoneAndUncom>
        <s.DateAndTime>
          <div>{date}</div>
          <div className="line"></div>
          <div>{time}</div>
        </s.DateAndTime>
      </s.PostContent>
    </s.UserPost>
  );
};
