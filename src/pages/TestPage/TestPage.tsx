import { FC } from 'react';
import { SignUpModal } from '../../shared';

type TestPageProps = {};

export const TestPage: FC<TestPageProps> = ({}) => {
  return (
    <div
      style={{
        backgroundColor: 'beige',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SignUpModal />
      {/* <div style={{ width: '100px' }}>
        <Button label="회원가입" $buttonTheme="emptyBlue" size="small" />
      </div> */}
    </div>
  );
};
