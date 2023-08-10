import React, { FC } from 'react';
import { ModalProps } from './type';
import {
  StModalContainer,
  StModal,
  StButtonContainer,
  StModalBg,
} from './PostModalStyle';
import { Button } from '../Button/Button';
import { BUTTON_CONFIGS } from '../../pages/CreatePost/const';

export const PostModal: FC<ModalProps> = ({ attribute, onClick }) => {
  const buttonConfig = BUTTON_CONFIGS[attribute];

  return (
    <StModalContainer>
      <StModalBg onClick={onClick}></StModalBg>
      <StModal>
        <div>{attribute}</div>
        <StButtonContainer>
          <Button
            onClick={onClick}
            label="취소"
            $buttonTheme="emptyBlue"
            size="large"
          />
          {buttonConfig && (
            <Button
              label={buttonConfig.label}
              $buttonTheme={buttonConfig.theme as 'blue' | 'pink'}
              size="large"
            />
          )}
        </StButtonContainer>
      </StModal>
    </StModalContainer>
  );
};
