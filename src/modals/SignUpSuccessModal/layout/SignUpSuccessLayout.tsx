import { FC, ReactNode } from 'react';
import {
  StModalWrapper,
  StChildrenWrapper,
  StViewWrapper,
  StFooter,
  StButtonWrapper,
} from './LayoutStyle';
import { LOGO_SERO, XButtonIcon } from '../../../assets';

import { EModalType, useModal } from '../../../providers';
import { Button, Pressable } from '../../../shared';
import styled from 'styled-components';

type SignUpSuccessLayoutProps = {
  children: ReactNode;
};

export const SignUpSuccessLayout: FC<SignUpSuccessLayoutProps> = ({
  children,
}) => {
  const { openModal, closeModal } = useModal();

  const handleCloseIconClick = () => {
    closeModal();
  };

  const handleClickCompleteButton = () => {
    closeModal();
    openModal(EModalType.LOGIN);
  };

  return (
    <StModalWrapper>
      <StHeader>
        <Pressable onClick={handleCloseIconClick}>
          <XButtonIcon size={24} />
        </Pressable>
      </StHeader>
      <StChildrenWrapper>
        <img src={LOGO_SERO} />
      </StChildrenWrapper>
      <StViewWrapper>{children}</StViewWrapper>
      <StFooter>
        <StButtonWrapper>
          <Button
            label={'우리 동네로 출동하기'}
            $buttonTheme="pink"
            size="large"
            $bold
            onClick={handleClickCompleteButton}
          />
        </StButtonWrapper>
      </StFooter>
    </StModalWrapper>
  );
};

const StHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 14px;
  padding-right: 14px;
  align-self: flex-end;
`;