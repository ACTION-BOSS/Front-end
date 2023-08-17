import React, { useEffect, useState } from 'react';
import * as s from './HeaderStyle';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { WriteIcon } from '../../assets';
import { EModalType, useModal } from '../../providers';

export const Header = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    token ? setIsLogin(true) : setIsLogin(false);
  }, []);

  const onClickCreateHandler = () => {
    // 로그인해야 보이게 할것인지 아니면 alert으로 알릴것인지
  };
  const onClickMovePage = (name: string) => {
    navigate(`${name}`);
  };
  const onClickLogoutHandler = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const onClickLoginButton = () => {
    openModal(EModalType.LOGIN);
  };

  return (
    <>
      <s.Wrap>
        <s.HeaderLeft>
          <div className="logo" onClick={() => onClickMovePage('/')}></div>
          <div className="mainMenu" onClick={() => onClickMovePage('/main')}>
            민원 지도
          </div>
        </s.HeaderLeft>
        <s.HeaderRight>
          <s.PostUploadBtn onClick={onClickCreateHandler}>
            <div>게시물작성</div>
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
