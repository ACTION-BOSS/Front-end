import React, { useEffect, useState } from 'react';
import * as s from './HeaderStyle';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import {
  HomeIcon,
  ListIcon,
  NewNotiIcon,
  NotiIcon,
  WriteIcon,
} from '../../assets';
import { EModalType, useModal } from '../../providers';
import { getAccessToken, handleLogout } from '../TokenUtils/tokenUtils';
import { HeaderMenu } from '../../pages/MainPage/components';
import {
  connectSseWithFetch,
  getNotification,
} from '../../api/notificationApi';
import {
  NotificationModal,
  NotificationType,
} from '../../modals/NotificationModal/NotificationModal';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const Header = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [openNotificationModal, setOpenNotificationModal] = useState(false);
  const [reader, setReader] =
    useState<ReadableStreamDefaultReader<Uint8Array> | null>(null);
  const [showNewNotiIcon, setShowNewNotiIcon] = useState(false);
  const [hasUnreadNotification, setHasUnreadNotification] = useState(false);
  const queryClient = useQueryClient();
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

  const onClickHandleNotificationModal = () => {
    setOpenNotificationModal(!openNotificationModal);
  };

  useEffect(() => {
    if (isLogin) {
      connectSseWithFetch(setReader, setShowNewNotiIcon);
    }

    return () => {
      if (reader) {
        reader.cancel();
      }
    };
  }, [isLogin]);

  const { data } = useQuery(['getNotification'], () => getNotification(), {
    enabled: isLogin,
  });
  console.log('notification data', data?.data.data);

  useEffect(() => {
    const hasUnread =
      data?.data.data?.length > 0 &&
      data?.data.data.some(
        (notification: NotificationType) => notification.readStatus === false,
      );
    setHasUnreadNotification(hasUnread);
  }, [data]);

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
          {isLogin && (
            <s.Notification onClick={onClickHandleNotificationModal}>
              <div>알림</div>
              {showNewNotiIcon || hasUnreadNotification ? (
                <NewNotiIcon />
              ) : (
                <NotiIcon />
              )}
            </s.Notification>
          )}
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

      {openNotificationModal && (
        <NotificationModal
          data={data?.data.data}
          onClickHandleNotificationModal={onClickHandleNotificationModal}
          queryClient={queryClient}
        />
      )}
    </>
  );
};
