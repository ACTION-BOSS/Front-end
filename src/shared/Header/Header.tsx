import React from 'react';
import * as s from './HeaderStyle';
import { Outlet } from 'react-router-dom';
import { Button } from '../Button/Button';
import { WriteIcon } from '../../assets';
import { EModalType, useModal } from '../../providers';

export const Header = () => {
  const { openModal } = useModal();
  const onClickLogin = () => {
    openModal(EModalType.LOGIN);
  };

  return (
    <>
      <s.Wrap>
        <s.HeaderLeft></s.HeaderLeft>
        <s.HeaderRight>
          <s.PostUploadBtn>
            <div>게시물작성</div>
            <WriteIcon />
          </s.PostUploadBtn>
          <div>
            <Button
              onClick={onClickLogin}
              size={'small'}
              label={'로그인'}
              $buttonTheme={'blueGray'}
              $bold={true}
            />
          </div>
        </s.HeaderRight>
      </s.Wrap>
      <Outlet />
    </>
  );
};
