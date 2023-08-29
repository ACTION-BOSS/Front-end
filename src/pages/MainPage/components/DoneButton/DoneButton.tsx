import React, { FC } from 'react';
import * as s from './DoneButtonStyle';
import { ClearIcon } from '../../../../assets';
import { Theme } from '../../../../styles';

type DoneButtonProps = {
  handleClickDoneButton: () => void;
  isDone: boolean;
};

export const DoneButton: FC<DoneButtonProps> = ({
  isDone,
  handleClickDoneButton,
}) => {
  return (
    <s.DoneButton $isDone={isDone} onClick={handleClickDoneButton}>
      <ClearIcon
        color={isDone ? Theme.colors.blueGray : Theme.colors.blue}
        size={16}
      />
      <div>해결 완료</div>
    </s.DoneButton>
  );
};
