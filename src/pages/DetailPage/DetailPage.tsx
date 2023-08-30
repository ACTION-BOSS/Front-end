import { FC, useEffect } from 'react';
import { DetailContainer, useDetailData } from './container';
import { DetailLayout } from './layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { useModal, EModalType } from '../../providers';
import { $isDoneAlertedFamily } from './state';
import { useParams } from 'react-router-dom';

type DetailPageProps = {};

export const DetailPage: FC<DetailPageProps> = ({}) => {
  const { postId } = useParams();
  const [isDoneAlerted, setisDoneAlerted] = useRecoilState(
    $isDoneAlertedFamily(postId),
  );
  const { openModal, closeModal } = useModal();
  const { postDone } = useDetailData();

  useEffect(() => {
    if (postDone && !isDoneAlerted) {
      setisDoneAlerted(true);
      openModal(EModalType.POP_UP, {
        title: '해결 완료 처리된 게시물입니다',
        cancelButton: false,
        functionButton: {
          label: '닫기',
          onClick: () => {
            closeModal();
          },
          theme: 'emptyBlue',
        },
      });
    }
  }, [postDone]);

  return (
    <DetailLayout>
      <ToastContainer />
      <DetailContainer />
    </DetailLayout>
  );
};
