import { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles';
import { IParamsForPopUpModal, useModal } from '../../providers';
import { Button } from '../../shared';
import { useNavigate } from 'react-router-dom';

type PopUpModalProps = {
  params: IParamsForPopUpModal;
};

const getModalButton = (params: IParamsForPopUpModal) => {
  const { title, functionButton, cancelButton } = params;

  const { closeModal } = useModal();
  const navigate = useNavigate();

  const {
    label: functionLabel,
    onClick: functionOnclick,
    theme: functionTheme,
  } = functionButton;

  if (!cancelButton && functionButton) {
    return (
      <Button
        label={functionLabel}
        $buttonTheme={functionTheme}
        size="large"
        onClick={() => {
          functionOnclick();
        }}
      />
    );
  } else {
    return (
      <>
        <Button
          label="취소"
          $buttonTheme="emptyBlue"
          size="large"
          onClick={() => {
            closeModal();
          }}
        />
        <Button
          label={functionLabel}
          $buttonTheme={functionTheme}
          size="large"
          onClick={() => {
            functionOnclick();
          }}
        />
      </>
    );
  }
};

export const PopUpModal: FC<PopUpModalProps> = ({ ...props }) => {
  const title = props.params?.title;

  return (
    <StModalWrapper>
      <StText>{title}</StText>
      <StButtonWrapper>{getModalButton(props.params)}</StButtonWrapper>
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
