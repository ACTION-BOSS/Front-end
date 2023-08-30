import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toggleDoneData } from '../../../../api';
import { getAccessToken, useToast } from '../../../../shared';
import { EModalType, useModal } from '../../../../providers';
import { useRecoilState } from 'recoil';
import { $isDoneAlertedFamily } from '../../state';

export const useCompleted = (done: boolean, doneCount: number) => {
  const { postId } = useParams();
  const [localDone, setLocalDone] = useState<boolean | null>(null);
  const [localDoneCount, setLocalDoneCount] = useState<number | null>(null);
  const [isReallyDone, setIsReallyDone] = useState<boolean>(false);
  const [isDoneAlerted, setisDoneAlerted] = useRecoilState(
    $isDoneAlertedFamily(postId),
  );
  const { openModal, closeModal } = useModal();
  const { openToast } = useToast();

  const handleClickDoneButton = async () => {
    const accessToken = getAccessToken();
    const isLoggedIn = !!accessToken;

    if (isLoggedIn) {
      await toggleDoneData(postId);

      if (localDone) {
        setLocalDoneCount((prevCount) => (prevCount ? prevCount - 1 : 0));
        setLocalDone(false);
      } else {
        setLocalDoneCount((prevCount) => (prevCount ? prevCount + 1 : 1));
        setLocalDone(true);
      }
    } else {
      openToast('로그인 후 이용 가능합니다');
    }
  };

  useEffect(() => {
    setLocalDone(done);
    setLocalDoneCount(doneCount);
  }, [done, doneCount]);

  useEffect(() => {
    if (localDoneCount === 5 && !isDoneAlerted) {
      setIsReallyDone(true);
      setisDoneAlerted(true);
      openModal(EModalType.POP_UP, {
        title: '해결 완료 처리된 게시물입니다',
        cancelButton: false,
        functionButton: {
          label: '닫기',
          onClick: () => {
            closeModal();
            window.location.reload();
          },
          theme: 'emptyBlue',
        },
      });
    }
  }, [localDoneCount, isReallyDone]);

  return {
    handleClickDoneButton,
    localDone,
    localDoneCount,
    isReallyDone,
  };
};
