import React, { FC } from 'react';
import { ModalProps } from './type';
import { StModal, StButtonContainer, StModalBg } from './PostModalStyle';
import { Button } from '../Button/Button';
import { BUTTON_CONFIGS } from '../../pages/CreatePost/const';

export const PostModal: FC<ModalProps> = ({ attribute, onClick }) => {
  const buttonConfig = BUTTON_CONFIGS[attribute];

  return (
    <>
      <StModalBg onClick={onClick}></StModalBg>
      <StModal>
        <div>{attribute}</div>
        <StButtonContainer>
          <Button
            onClick={onClick}
            label="취소"
            $buttonTheme="gray"
            size="large"
          />
          {buttonConfig && (
            <Button
              label={buttonConfig.label}
              $buttonTheme="pink"
              size="large"
            />
          )}
        </StButtonContainer>
      </StModal>
    </>
  );
};
