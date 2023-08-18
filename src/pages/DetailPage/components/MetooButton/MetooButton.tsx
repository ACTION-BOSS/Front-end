import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { UncomBigIcon } from '../../../../assets';
import { useDetailData } from '../../container';
import { debounce } from 'lodash';
import { toggleMetooData } from '../../../../api';
type MetooButtonProps = {
  agreeCount: number;
  onClick: () => void;
  agree: boolean;
  postId: string;
};

export const MetooButton: FC<MetooButtonProps> = ({
  agreeCount = 0,
  onClick,
  agree = false,
  postId,
}) => {
  const { isLoading, error } = useDetailData();
  const [localMetoo, setLocalMetoo] = useState<boolean | null>(null);
  const [localMetooCount, setLocalMetooCount] = useState<number | null>(null);

  if (isLoading) {
    return <></>;
  }

  const handleClickMetooButton = debounce(async () => {
    await toggleMetooData(postId);

    // TODO
    const token = localStorage.getItem('token');

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
  }, 500);

  useEffect(() => {
    setLocalMetoo(agree);
    setLocalMetooCount(agreeCount);
  }, [agree, agreeCount]);

  return (
    <StButton onClick={handleClickMetooButton}>
      <StButtonLabel>
        <div>나도 불편해요</div>
        <UncomBigIcon color="white" size={32} />
        <div>{localMetooCount}</div>
      </StButtonLabel>
    </StButton>
  );
};

export const StButton = styled.button`
  display: flex;
  cursor: pointer;

  padding: 6px 16px;

  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;

  background-color: ${Theme.colors.pink};
`;

export const StButtonLabel = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  color: white;

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;
