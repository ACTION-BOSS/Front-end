import { ReactNode, FC } from 'react';
import { LOGO_SERO } from '../../../assets';
import { useModal } from '../../../providers';

import {
  StModalWrapper,
  StChildrenWrapper,
  StViewWrapper,
  StFooter,
} from './LoginStyle';

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
