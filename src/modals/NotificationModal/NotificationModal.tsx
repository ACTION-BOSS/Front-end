import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import {
  NewNotificationToggle,
  NotificationToggle,
  NO_NOTIFICATION,
  RedDot,
} from '../../assets';
import { Theme, media } from '../../styles';
import { useMutation } from '@tanstack/react-query';
import { readNotification } from '../../api/notificationApi';

export type NotificationType = {
  notificationId: number;
  postId: number;
  title: string;
  actor: string;
  recipient: string;
  type: string;
  readStatus: boolean;
  createdAt: string;
};

type NotificationModalProps = {
  onClickHandleNotificationModal: () => void;
  setOpenNotificationModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: NotificationType[];
  queryClient: any;
};

const truncateString = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};

const getTimeDifference = (createdAt: string) => {
  const current = new Date();
  const created = new Date(createdAt);
  const diffInMilliseconds = current.getTime() - created.getTime();

  const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes === 0) {
    return '방금 전';
  } else if (diffInMinutes > 0 && diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  } else {
    return createdAt;
  }
};

export const NotificationModal: React.FC<NotificationModalProps> = ({
  onClickHandleNotificationModal,
  setOpenNotificationModal,
  data,
  queryClient,
}) => {
  const navigate = useNavigate();
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenNotificationModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, onClickHandleNotificationModal]);

  const onClickOnlyNewNotificationToggle = () => {
    setShowOnlyUnread(!showOnlyUnread);
  };

  const mutation = useMutation(readNotification, {
    onSuccess: () => {
      queryClient.invalidateQueries('getNotification');
    },
  });

  const onClickReadNotification = async (
    postId: number,
    notificationId: number,
  ) => {
    try {
      await mutation.mutateAsync(notificationId);
      onClickHandleNotificationModal();
      navigate(`/detail/${postId}`);
    } catch (error) {
      console.error('Failed to read notification:', error);
    }
  };

  const filteredData = showOnlyUnread
    ? data.filter((notification) => !notification.readStatus)
    : data;

  return (
    <>
      <StModal ref={modalRef}>
        <StToggle onClick={onClickOnlyNewNotificationToggle}>
          <StToggleText>읽지 않은 알림만 표시</StToggleText>
          {!showOnlyUnread && <NotificationToggle />}
          {showOnlyUnread && <NewNotificationToggle />}
        </StToggle>
        {filteredData?.length !== 0 ? (
          <>
            {filteredData?.map((notification) => (
              <StNotificationBox
                key={notification.notificationId}
                type={notification.type}
                onClick={() =>
                  onClickReadNotification(
                    notification.postId,
                    notification.notificationId,
                  )
                }
              >
                <StMessageBox>
                  <StText>
                    {notification.type === 'agree' &&
                      `${truncateString(
                        notification.actor,
                        3,
                      )}님이 게시물에 '나도 불편해요'를 눌렀습니다`}
                    {notification.type === 'done' &&
                      `${truncateString(
                        notification.actor,
                        3,
                      )}님이 게시물에 '해결됐어요'를 눌렀습니다`}
                    {notification.type === 'comment' &&
                      `${truncateString(
                        notification.actor,
                        3,
                      )}님이 게시물에 댓글을 달았습니다`}
                    {notification.type === 'postDone' &&
                      `${truncateString(
                        notification.recipient,
                        3,
                      )}님의 게시물이 해결 처리되었습니다`}
                  </StText>
                  <StPostTitle>
                    {truncateString(notification.title, 12)}
                  </StPostTitle>
                </StMessageBox>
                <StTimeBox>
                  <StTime>{getTimeDifference(notification.createdAt)}</StTime>
                  {!notification.readStatus && <RedDot />}
                </StTimeBox>
              </StNotificationBox>
            ))}
            <StNoMoreContainer>
              <StNoMoreImg />
              <StNoMoreText>
                지난 30일 동안의 알림이 더 이상 없습니다
              </StNoMoreText>
            </StNoMoreContainer>
          </>
        ) : (
          <StNoNotification>
            <StNoImg />
            <StNoText>새로운 알림이 없습니다</StNoText>
          </StNoNotification>
        )}
      </StModal>
    </>
  );
};

export const StModal = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 396px;
  height: 370px;
  background-color: ${Theme.colors.blueGray};
  border-radius: 12px 0 0 12px;
  box-shadow: 0px 2px 5px rgba(41, 47, 61, 0.3);
  overflow: auto;
  overflow-y: scroll;
  position: fixed;
  top: 68px;
  right: 440px;
  z-index: 10000;

  ${media.tablet`
 right: 365px;
  `}

  ${media.bigMobile`  
 right: 220px;
 `}

  ${media.mobile`  
 top: 200px;
 right: 20px;
 width: 358px;
 height: 340px;
 `}
`;

export const StToggle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  gap: 4px;
`;

export const StToggleText = styled.div`
  font-size: ${Theme.fontSizes.label2};
  font-weight: ${Theme.fontWeights.label2};
  color: ${Theme.colors.gray6};

  ${media.mobile`
  font-size: ${Theme.fontSizes.mL1};
  font-weight: ${Theme.fontWeights.mL1};
 `}
`;

export const StNotificationBox = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 355px;
  height: 30px;
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 25px;
  cursor: pointer;
  border-left: 2px solid
    ${(props) => {
      switch (props.type) {
        case 'agree':
          return '#FF005E';
        case 'done':
          return `${Theme.colors.blue}`;
        case 'comment':
          return `${Theme.colors.gray2}`;
        case 'postDone':
          return `${Theme.colors.gray6}`;
        default:
          return `${Theme.colors.gray6}`;
      }
    }};

  ${media.mobile`
  width: 334px;
 `}
`;

export const StMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StText = styled.div`
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};
  color: ${Theme.colors.gray8};

  ${media.mobile`
  font-size: ${Theme.fontSizes.mBody1};
  font-weight: ${Theme.fontWeights.mBody1};
 `}
`;

export const StPostTitle = styled.div`
  font-size: ${Theme.fontSizes.label2};
  font-weight: ${Theme.fontWeights.label2};
  color: ${Theme.colors.gray5};

  ${media.mobile`
  font-size: ${Theme.fontSizes.mBody3};
  font-weight: ${Theme.fontWeights.mBody3};
 `}
`;

export const StTimeBox = styled.div`
  display: flex;
  gap: 2px;
`;

export const StTime = styled.div`
  font-size: ${Theme.fontSizes.label2};
  font-weight: ${Theme.fontWeights.label2};
  color: ${Theme.colors.gray6};
`;

export const StNoMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const StNoMoreImg = styled.div`
  width: 50px;
  height: 66px;
  background-image: url(${NO_NOTIFICATION});
  background-size: cover;
  background-position: center;
`;

export const StNoMoreText = styled.div`
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
  color: ${Theme.colors.gray7};
  margin-bottom: 22px;

  ${media.mobile`
  font-size: ${Theme.fontSizes.mL1};
  font-weight: ${Theme.fontWeights.mL1};
 `}
`;

export const StNoNotification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StNoImg = styled.div`
  width: 138px;
  height: 182px;
  background-image: url(${NO_NOTIFICATION});
  background-size: cover;
  background-position: center;

  ${media.mobile`
  width: 120.7px;
  height: 171.8px;
 `}
`;

export const StNoText = styled.div`
  font-size: ${Theme.fontSizes.body2};
  font-weight: ${Theme.fontWeights.body2};
  color: ${Theme.colors.gray7};

  ${media.mobile`
  font-size: ${Theme.fontSizes.mH2};
  font-weight: ${Theme.fontWeights.mH2};
 `}
`;
