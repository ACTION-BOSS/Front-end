import { ReactNode, FC } from 'react';
import { LOGO_SERO, XButtonIcon } from '../../../assets';
import { EModalType, useModal } from '../../../providers';

import {
  StModalWrapper,
  StChildrenWrapper,
  StViewWrapper,
  StFooter,
} from './LoginStyle';
import styled from 'styled-components';
import { Theme } from '../../../styles';
import { Pressable } from '../../../shared';

type LoginLayoutProps = {
  children: ReactNode;
};

export const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  const { closeModal, openModal } = useModal();

  const handleCloseIconClick = () => {
    closeModal();
  };
  const handleClickSignup = () => {
    closeModal();
    openModal(EModalType.SIGN_UP);
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
        <StTextWrapper>
          <StTextL1>아직 행동대장의 회원이 아니신가요?</StTextL1>
          <StTextL3 onClick={handleClickSignup}>회원가입</StTextL3>
        </StTextWrapper>
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

const StTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const StTextL1 = styled.div`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${Theme.colors.gray4};
`;

export const StTextL3 = styled.div`
  color: ${Theme.colors.gray7};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`;
