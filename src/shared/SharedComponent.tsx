import { FC } from 'react';
type ISharedComponentProps = {
  prop1: string;
  prop2: number;
};

export const SharedComponent: FC<ISharedComponentProps> = ({
  prop1,
  prop2,
}) => {
  return <div></div>;
};
