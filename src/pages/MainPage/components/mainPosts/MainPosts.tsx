import React, { useState } from 'react';
import * as s from './MainPostsStyle';
import { MainPost } from '../MainPost/MainPost';
import {
  CheckIcon,
  CheckXIcon,
  Toggle2Icon,
  ToggleIcon,
} from '../../../../assets';

export const MainPosts = () => {
  const [currentOption, setCurrentOption] = useState('최신순');
  const [isToggle, setIsToggle] = useState(false);
  const OPTIONS = ['최신순', '불편순', '해결순'];

  const onClickToggleHandler = () => {
    setIsToggle(!isToggle);
  };

  const onClickOptionHandler = (option: string) => {
    setCurrentOption(option);
    setIsToggle(!isToggle);
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
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <MainPost key={index} currentOption={currentOption} />
          ))}
      </s.MainPosts>
    </s.MainPostsConatiner>
  );
};
