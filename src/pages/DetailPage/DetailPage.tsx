import { FC } from 'react';
import { DetailContainer } from './container';
import { DetailLayout } from './layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DetailPageProps = {};

export const DetailPage: FC<DetailPageProps> = ({}) => {
  return (
    <DetailLayout>
      <ToastContainer />
      <DetailContainer />
    </DetailLayout>
  );
};
