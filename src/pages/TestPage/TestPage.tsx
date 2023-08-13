import { FC } from 'react';
import { Button } from '../../shared';
import { EModalType, useModal } from '../../providers';

type TestPageProps = {};

export const TestPage: FC<TestPageProps> = ({}) => {
  const { openModal } = useModal();

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
    </div>
  );
};
