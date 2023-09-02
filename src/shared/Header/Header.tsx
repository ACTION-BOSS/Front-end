import React, { useEffect, useState } from 'react';
import * as s from './HeaderStyle';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { HomeIcon, ListIcon, WriteIcon } from '../../assets';
import { EModalType, useModal } from '../../providers';
import { getAccessToken, handleLogout } from '../TokenUtils/tokenUtils';
import { HeaderMenu } from './HeaderMenu';

export const Header = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const accessToken = getAccessToken();

  useEffect(() => {
    accessToken ? setIsLogin(true) : setIsLogin(false);
  }, []);

  const onClickMovePage = (name: string) => {
    navigate(`${name}`);
  };

  const onClickCreateHandler = () => {
    isLogin ? navigate('/create') : openModal(EModalType.LOGIN);
    setIsMenu(false);
  };

  const onClickLogoutHandler = () => {
    openModal(EModalType.POP_UP, {
      title: '로그아웃 하시겠습니까?',
      cancelButton: true,
      functionButton: {
        theme: 'pink',
        label: '로그아웃',
        onClick: handleLogout,
      },
    });
  };

  const onClickLoginButton = () => {
    openModal(EModalType.LOGIN);
    setIsMenu(false);
  };

  const onToggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      {isMenu && (
        <HeaderMenu
          isLogin={isLogin}
          onToggleMenu={onToggleMenu}
          onClickLogoutHandler={onClickLogoutHandler}
          onClickCreateHandler={onClickCreateHandler}
          onClickLoginButton={onClickLoginButton}
        />
      )}
      <s.Wrap>
        <s.HeaderLeft>
          <div className="mobileIcon" onClick={() => onClickMovePage('/main')}>
            <HomeIcon />
          </div>
          <div onClick={() => onClickMovePage('/')}>
            <s.Logo />
          </div>
          <div className="mobileIcon" onClick={onToggleMenu}>
            <ListIcon />
          </div>
          <div className="mainMenu" onClick={() => onClickMovePage('/main')}>
            동네 지도
          </div>
        </s.HeaderLeft>
        <s.HeaderRight>
          <s.Notification>
            <div>알림</div>
          </s.Notification>
          <s.PostUploadBtn onClick={onClickCreateHandler}>
            <div>게시물 작성</div>
            <WriteIcon />
          </s.PostUploadBtn>
          <div className="headerLine" />
          <div>
            {isLogin ? (
              <Button
                onClick={onClickLogoutHandler}
                size={'small'}
                label={'로그아웃'}
                $buttonTheme={'empty'}
                $bold={true}
              />
            ) : (
              <Button
                size={'small'}
                label={'로그인'}
                $buttonTheme={'empty'}
                $bold={true}
                onClick={onClickLoginButton}
              />
            )}
          </div>
        </s.HeaderRight>
      </s.Wrap>
      <Outlet />
    </>
  );
};
