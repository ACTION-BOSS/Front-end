import { ReactNode, FC } from 'react';
import { LOGO_SERO, XButtonIcon } from '../../../assets';
import { EModalType, useModal } from '../../../providers';

import {
  StModalWrapper,
  StLogoWrapper,
  StFooter,
  StHeader,
  StTextWrapper,
  StTextL1,
  StTextL3,
  StChildrenWrapper,
} from './LoginStyle';
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
      <StLogoWrapper>
        <img src={LOGO_SERO} />
      </StLogoWrapper>
      <StChildrenWrapper>{children}</StChildrenWrapper>
      <StFooter>
        <StTextWrapper>
          <StTextL1>아직 행동대장의 회원이 아니신가요?</StTextL1>
          <StTextL3 onClick={handleClickSignup}>회원가입</StTextL3>
        </StTextWrapper>
      </StFooter>
    </StModalWrapper>
  );
};
