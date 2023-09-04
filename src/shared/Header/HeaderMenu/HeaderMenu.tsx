import React, { FC } from 'react';
import * as s from './HeaderMenuStyle';
import {
  HumanIcon,
  ListIcon,
  LoginIcon,
  LogoutIcon,
  NotiIcon,
  WriteIcon,
} from '../../../assets';
import { Theme } from '../../../styles';

type HeaderMenuProps = {
  isLogin: boolean;
  onToggleMenu: () => void;
  onClickLogoutHandler: () => void;
  onClickCreateHandler: () => void;
  onClickLoginButton: () => void;
  onClickMovePage: (pageAddress: string) => void;
  onClickHandleNotificationModal: () => void;
};

export const HeaderMenu: FC<HeaderMenuProps> = ({
  isLogin,
  onToggleMenu,
  onClickLogoutHandler,
  onClickLoginButton,
  onClickCreateHandler,
  onClickMovePage,
  onClickHandleNotificationModal,
}) => {
  return (
    <s.HeaderMenu onClick={onToggleMenu}>
      <s.MenuText>
        {isLogin ? (
          <>
            <div>로그아웃</div>
            <div>마이페이지</div>
            <div>알림</div>
          </>
        ) : (
          <div>로그인</div>
        )}
        <div>게시물 작성</div>
      </s.MenuText>
      <s.MenuIcon>
        <div className="HeaderMenuIcon" onClick={onToggleMenu}>
          <ListIcon color={Theme.colors.blue} />
        </div>
        {isLogin ? (
          <>
            <div onClick={onClickLogoutHandler}>
              <LogoutIcon />
            </div>
            <div onClick={() => onClickMovePage('/mypage')}>
              <HumanIcon />
            </div>
            <div onClick={onClickHandleNotificationModal}>
              <NotiIcon />
            </div>
          </>
        ) : (
          <div onClick={onClickLoginButton}>
            <LoginIcon />
          </div>
        )}
        <div onClick={onClickCreateHandler}>
          <WriteIcon />
        </div>
      </s.MenuIcon>
    </s.HeaderMenu>
  );
};

export default HeaderMenu;
