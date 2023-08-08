import { FC } from 'react';
import { SignUpLayout } from './layout';

type SignUpModalProps = {};

export const SignUpModal: FC<SignUpModalProps> = ({}) => {
  return (
    <SignUpLayout>
      <div>View들이 들어갈 곳</div>
    </SignUpLayout>
  );
};
