import { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles';
import { EModalType } from '../../providers';
import { Button } from '../../shared';
import { useDeleteData } from '../../pages/DetailPage/container/hooks';

type PopUpModalProps = {
  type: EModalType;
};

const getModalMessage = (type: EModalType) => {
  if (type === EModalType.DELETE) {
    return '작성한 게시물을 삭제할까요?';
  }
  if (type === EModalType.DONE) {
    return '해결 완료 처리된 게시물입니다';
  }
};

const getModalButton = (type: EModalType) => {
  const { handleDeleteData } = useDeleteData();

  if (type === EModalType.DELETE) {
    return (
      <>
        <Button label="취소" $buttonTheme="emptyBlue" size="large" />
        <Button
          label="삭제"
          $buttonTheme="pink"
          size="large"
          onClick={handleDeleteData}
        />
      </>
    );
  }
  if (type === EModalType.DONE) {
    return '해결 완료 처리된 게시물입니다';
  }
};

export const PopUpModal: FC<PopUpModalProps> = ({ type }) => {
  return (
    <StModalWrapper>
      <StText>{getModalMessage(type)}</StText>
      <StButtonWrapper>{getModalButton(type)}</StButtonWrapper>
    </StModalWrapper>
  );
};

export const StModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  height: 333px;

  padding: 0px 45px 0px 45px;

  border-radius: 24px;
  background-color: ${Theme.colors.white};
  box-shadow: 0px 2px 15px 0px rgba(41, 47, 61, 0.25);

  overflow: hidden;
`;

export const StText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  color: ${Theme.colors.black};
`;

export const StButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 30px;

  width: 100%;
  height: 68px;

  gap: 12px;
`;
