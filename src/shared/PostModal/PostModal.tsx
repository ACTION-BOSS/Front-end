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

export const PostModal: FC<ModalProps> = ({
  attribute,
  onClickHandleModal,
  sendPostRequest,
  modalType,
}) => {
  const buttonConfig = BUTTON_CONFIGS[attribute];

  return (
    <StModalContainer>
      <StModalBg onClick={onClickHandleModal}></StModalBg>
      <StModal>
        {modalType === 'warning' ? (
          <>
            <div>제목, 내용, 사진, 위치를 모두 입력해주세요</div>
            <StButtonContainer>
              {buttonConfig && (
                <Button
                  onClick={onClickHandleModal}
                  label={buttonConfig.label}
                  $buttonTheme="emptyBlue"
                  size="large"
                />
              )}
            </StButtonContainer>
          </>
        ) : (
          <>
            <div>{attribute}</div>
            <StButtonContainer>
              <Button
                onClick={onClickHandleModal}
                label="취소"
                $buttonTheme="emptyBlue"
                size="large"
              />
              {buttonConfig && (
                <Button
                  onClick={sendPostRequest}
                  label={buttonConfig.label}
                  $buttonTheme={buttonConfig.theme as 'blue' | 'pink'}
                  size="large"
                />
              )}
            </StButtonContainer>
          </>
        )}
      </StModal>
    </StModalContainer>
  );
};
