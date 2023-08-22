import { useEffect, useState } from 'react';
import { toggleMetooData } from '../../../../api';
import { useParams } from 'react-router-dom';
import { getToken } from '../../../../shared';

export const useMetoo = (agree: boolean, agreeCount: number) => {
  const [localMetoo, setLocalMetoo] = useState<boolean | null>(null);
  const [localMetooCount, setLocalMetooCount] = useState<number | null>(null);
  const { postId } = useParams();

  const handleClickMetooButton = async () => {
    await toggleMetooData(postId);

    const token = getToken();

    if (token) {
      if (localMetoo) {
        setLocalMetooCount((prevCount) => (prevCount ? prevCount - 1 : 0));
        setLocalMetoo(false);
      } else {
        setLocalMetooCount((prevCount) => (prevCount ? prevCount + 1 : 1));
        setLocalMetoo(true);
      }
    } else {
      alert('로그인 후 이용 가능합니다');
    }
  };

  useEffect(() => {
    setLocalMetoo(agree);
    setLocalMetooCount(agreeCount);
  }, [agree, agreeCount]);

  return {
    handleClickMetooButton,
    localMetooCount,
  };
};
