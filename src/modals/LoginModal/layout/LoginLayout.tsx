import { ReactNode, FC } from 'react';
import { XButtonIcon } from '../../../assets';
import { useModal } from '../../../providers';

import {
  StModalWrapper,
  StLogoWrapper,
  StHeader,
  StChildrenWrapper,
  StLogoText,
  StXButtonWrapper,
  StyledLogo,
} from './LoginStyle';
import { Pressable } from '../../../shared';

type LoginLayoutProps = {
  children: ReactNode;
};

export const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  const { closeModal } = useModal();

  const handleCloseIconClick = () => {
    closeModal();
  };

  return (
    <StModalWrapper>
      <StHeader>
        <Pressable onClick={handleCloseIconClick}>
          <StLogoText>로그인 하기</StLogoText>
          <StXButtonWrapper>
            <XButtonIcon size={24} />
          </StXButtonWrapper>
        </Pressable>
      </StHeader>
      <StLogoWrapper>
        <StyledLogo />
      </StLogoWrapper>
      <StChildrenWrapper>{children}</StChildrenWrapper>
    </StModalWrapper>
  );
};
