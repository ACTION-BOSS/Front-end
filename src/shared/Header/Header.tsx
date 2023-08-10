import React from 'react';
import * as s from './HeaderStyle';
import { Outlet } from 'react-router-dom';
import { Button } from '../Button/Button';
import { WriteIcon } from '../../assets';

export const Header = () => {
  const onClickLogin = () => {};
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
              $buttonTheme={'gray'}
              $bold={true}
            />
          </div>
        </s.HeaderRight>
      </s.Wrap>
      <Outlet />
    </>
  );
};
