import { FC } from 'react';
import { Button } from '../../shared';
import { EModalType, useModal } from '../../providers';
import { useNavigate } from 'react-router-dom';

type TestPageProps = {};

export const TestPage: FC<TestPageProps> = ({}) => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: 'beige',
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100px' }}>
        <Button
          label="회원가입"
          $buttonTheme="emptyBlue"
          size="small"
          onClick={() => {
            openModal(EModalType.SIGN_UP);
          }}
        />
      </div>
      <div style={{ width: '100px' }}>
        <Button
          label="로그인"
          $buttonTheme="pink"
          size="small"
          onClick={() => {
            openModal(EModalType.LOGIN);
          }}
        />
      </div>
      <div style={{ width: '100px' }}>
        <Button
          label="회원가입성공"
          $buttonTheme="pink"
          size="small"
          onClick={() => {
            openModal(EModalType.SIGN_UP_SUCCESS);
          }}
        />
      </div>
      <div style={{ width: '100px' }}>
        <Button
          label="민원완료모달"
          $buttonTheme="blueGray"
          size="small"
          onClick={() => {
            openModal(EModalType.POP_UP, {
              title: '삭제할랭려?',
              cancelButton: false,
              functionButton: {
                label: '삭제???',
                onClick: () => {
                  alert('hi');
                },
                theme: 'emptyBlue',
              },
            });
          }}
        />
      </div>
      <div>
        <Button
          label="마이페이지"
          $buttonTheme="emptyGray"
          size="small"
          onClick={() => {
            navigate('/mypage');
          }}
        />
      </div>
    </div>
  );
};
