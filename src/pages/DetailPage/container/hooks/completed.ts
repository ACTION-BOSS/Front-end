import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toggleDoneData } from '../../../../api';
import { getToken } from '../../../../shared';

export const useCompleted = (done: boolean, doneCount: number) => {
  const [localDone, setLocalDone] = useState<boolean | null>(null);
  const [localDoneCount, setLocalDoneCount] = useState<number | null>(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleClickDoneButton = async () => {
    if (localDoneCount === 5 && !localDone) {
      alert('이미 해결된 민원글입니다.');
      navigate('/main');
      return;
    }

    const token = getToken();

    if (token) {
      await toggleDoneData(postId);

      if (localDone) {
        setLocalDoneCount((prevCount) => (prevCount ? prevCount - 1 : 0));
        setLocalDone(false);
      } else {
        setLocalDoneCount((prevCount) => (prevCount ? prevCount + 1 : 1));
        setLocalDone(true);
      }
    } else {
      alert('로그인 후 이용 가능합니다');
    }
  };

  useEffect(() => {
    setLocalDone(done);
    setLocalDoneCount(doneCount);
  }, [done, doneCount]);

  return {
    handleClickDoneButton,
    localDoneCount,
  };
};
