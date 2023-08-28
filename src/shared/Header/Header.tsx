import React, { useEffect, useState } from 'react';
import * as s from './HeaderStyle';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { HomeIcon, ListIcon, WriteIcon } from '../../assets';
import { EModalType, useModal } from '../../providers';
import { getAccessToken, handleLogout } from '../TokenUtils/tokenUtils';
import { HeaderMenu } from '../../pages/MainPage/components';

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
    handleLogout();
    window.location.reload();
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
            <s.LogoIcon />
          </div>
          <div className="mobileIcon" onClick={onToggleMenu}>
            <ListIcon />
          </div>
          <div className="mainMenu" onClick={() => onClickMovePage('/main')}>
            민원 지도
          </div>
        </s.HeaderLeft>
        <s.HeaderRight>
          <s.PostUploadBtn onClick={onClickCreateHandler}>
            <div>게시물 작성</div>
            <WriteIcon />
          </s.PostUploadBtn>
          <div>
            {isLogin ? (
              <Button
                onClick={onClickLogoutHandler}
                size={'small'}
                label={'로그아웃'}
                $buttonTheme={'gray'}
                $bold={true}
              />
            ) : (
              <Button
                size={'small'}
                label={'로그인'}
                $buttonTheme={'gray'}
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
