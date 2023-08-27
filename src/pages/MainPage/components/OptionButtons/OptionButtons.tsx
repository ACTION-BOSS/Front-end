import React, { FC } from 'react';
import * as s from './OptionButtonsStyle';

type DoneButtonProps = {
  option: string;
  handleClickOptionButton: (option: string) => void;
};

export const OptionButtons: FC<DoneButtonProps> = ({
  option,
  handleClickOptionButton,
}) => {
  return (
    <s.OptionButtons>
      <s.NewlestButton
        $option={option}
        onClick={() => handleClickOptionButton('최신순')}
      >
        <p>최신순</p>
      </s.NewlestButton>
      <s.AgreeButton
        $option={option}
        onClick={() => handleClickOptionButton('불편순')}
      >
        <p>불편순</p>
      </s.AgreeButton>
    </s.OptionButtons>
  );
};
