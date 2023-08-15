import { FC } from 'react';
import { DetailContainer } from './container';
import { DetailLayout } from './layout';

type DetailPageProps = {};

export const DetailPage: FC<DetailPageProps> = ({}) => {
  return (
    <DetailLayout>
      <DetailContainer />
    </DetailLayout>
  );
};
