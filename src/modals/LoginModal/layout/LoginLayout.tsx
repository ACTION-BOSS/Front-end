import { ReactNode, FC } from 'react';
import { LOGO_SERO, XButtonIcon } from '../../../assets';
import { useModal } from '../../../providers';

import {
  StModalWrapper,
  StChildrenWrapper,
  StViewWrapper,
  StFooter,
  StButtonWrapper,
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
      <StButtonWrapper>
        <Pressable>
          <XButtonIcon size={24} />
        </Pressable>
      </StButtonWrapper>
      <StChildrenWrapper>
        <img src={LOGO_SERO} />
      </StChildrenWrapper>
      <StViewWrapper>{children}</StViewWrapper>
      <StFooter>
        <div>ㅇㄹ</div>
        <div>sdfsdf</div>
      </StFooter>
    </StModalWrapper>
  );
};
