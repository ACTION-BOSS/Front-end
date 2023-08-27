import React, { FC } from 'react';
import * as s from './HeaderMenuStyle';
import { HumanIcon, ListIcon, WriteIcon } from '../../../../assets';
import { Theme } from '../../../../styles';

type HeaderMenuProps = {
  onToggleMenu: () => void;
  onClickLogoutHandler: () => void;
  onClickCreateHandler: () => void;
  onClickLoginButton: () => void;
};

export const HeaderMenu: FC<HeaderMenuProps> = ({
  onToggleMenu,
  onClickLogoutHandler,
  onClickLoginButton,
  onClickCreateHandler,
}) => {
  return (
    <s.HeaderMenu>
      <s.MenuText>
        <div>로그인</div>
        <div>게시물 작성</div>
      </s.MenuText>
      <s.MenuIcon>
        <div className="HeaderMenuIcon" onClick={onToggleMenu}>
          <ListIcon color={Theme.colors.blue} />
        </div>
        <div onClick={onClickLoginButton}>
          <HumanIcon />
        </div>
        <div onClick={onClickCreateHandler}>
          <WriteIcon />
        </div>
      </s.MenuIcon>
    </s.HeaderMenu>
  );
};

export default HeaderMenu;
