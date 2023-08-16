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
import { useNavigate } from 'react-router-dom';

export const PostModal: FC<ModalProps> = ({
  attribute,
  onClickHandleModal,
  sendPostRequest,
  sendEditRequest,
  modalType,
}) => {
  const buttonConfig = BUTTON_CONFIGS[attribute];

  const navigate = useNavigate();

  const onClickBackWard = () => {
    navigate(-1);
  };

  const onClickToMain = () => {
    navigate('/main');
  };

  return (
    <StModalContainer>
      <StModalBg onClick={onClickHandleModal}></StModalBg>
      <StModal>
        {modalType === 'warning' && (
          <>
            <div>양식을 모두 입력해주세요</div>
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
        )}
        {modalType === 'default' && (
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
        {modalType === 'edit' && (
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
                  onClick={sendEditRequest}
                  label={buttonConfig.label}
                  $buttonTheme={buttonConfig.theme as 'blue' | 'pink'}
                  size="large"
                />
              )}
            </StButtonContainer>
          </>
        )}
        {modalType === 'cancle' && (
          <>
            <div>작업을 중단하고 나가시겠습니까?</div>
            <StButtonContainer>
              <Button
                onClick={onClickHandleModal} // 모달을 닫는 기능
                label="취소"
                $buttonTheme="emptyBlue"
                size="large"
              />
              {buttonConfig && (
                <Button
                  onClick={onClickBackWard}
                  label="나가기"
                  $buttonTheme="pink"
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
