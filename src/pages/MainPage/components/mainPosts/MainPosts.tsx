import React, { useState } from 'react';
import * as s from './MainPostsStyle';

import {
  CheckIcon,
  CheckXIcon,
  Toggle2Icon,
  ToggleIcon,
} from '../../../../assets';
import { Post } from '../../type';
import { MainPost } from '../MainPost';

interface Props {
  currentOption: string;
  optionChangeHandler: (option: string) => void;
  data: Post[];
}

export const MainPosts = ({
  currentOption,
  optionChangeHandler,
  data,
}: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const OPTIONS = ['최신순', '불편순', '해결순'];

  const onClickToggleHandler = () => {
    setIsToggle(!isToggle);
  };

  const onClickOptionHandler = (option: string) => {
    optionChangeHandler(option);
    onClickToggleHandler();
  };

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
        {data.map((post: Post) => (
          <MainPost
            key={post.postId}
            post={post}
            currentOption={currentOption}
          />
        ))}
      </s.MainPosts>
    </s.MainPostsConatiner>
  );
};
