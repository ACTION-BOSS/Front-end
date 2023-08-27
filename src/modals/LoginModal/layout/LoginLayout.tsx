import { ReactNode, FC } from 'react';
import { LOGO_SERO, XButtonIcon } from '../../../assets';
import { useModal } from '../../../providers';

import {
  StModalWrapper,
  StLogoWrapper,
  StHeader,
  StChildrenWrapper,
  StLogoImage,
  StLogoText,
  StXButtonWrapper,
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
        <StLogoImage src={LOGO_SERO} />
      </StLogoWrapper>
      <StChildrenWrapper>{children}</StChildrenWrapper>
    </StModalWrapper>
  );
};
