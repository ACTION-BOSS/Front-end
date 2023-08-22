import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { ClearIcon, HelpIcon } from '../../../../assets';
import { useDetailData } from '../../container';
import { useNavigate } from 'react-router-dom';
import { toggleDoneData } from '../../../../api';
type CompletedButtonProps = {};

export const CompletedButton: FC<CompletedButtonProps> = ({}) => {
  const { data, isLoading, error } = useDetailData();
  const [localDone, setLocalDone] = useState<boolean | null>(null);
  const [localDoneCount, setLocalDoneCount] = useState<number | null>(null);
  const navigate = useNavigate();

  if (isLoading) {
    return <></>;
  }

  const { done, doneCount, postId } = data;

  const handleClickDoneButton = async () => {
    if (localDoneCount === 5 && !localDone) {
      alert('이미 해결된 민원글입니다.');
      navigate('/main');
      return;
    }

    // console.log('loginstate', isLoggedInState);
    // TODO
    const token = localStorage.getItem('token');

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

  return (
    <StWrapper>
      <StButtonWrapper onClick={handleClickDoneButton}>
        <StBlueArea>
          <div>해결된 민원이에요</div>
          <ClearIcon color="white" size={32} />
        </StBlueArea>
        <StWhiteArea>
          <StButtonTextWrapper>
            <p>{localDoneCount}</p>
            <p>/</p>
            <p>5</p>
          </StButtonTextWrapper>
        </StWhiteArea>
      </StButtonWrapper>

      <StInfoWrapper>
        <HelpIcon size={24} />
        <StInfoText>다섯 개가 채워지면 민원이 완료처리됩니다</StInfoText>
      </StInfoWrapper>
    </StWrapper>
  );
};

export const StInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding-right: 4px;
`;

export const StInfoText = styled.p`
  color: ${Theme.colors.gray5};
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};
`;

export const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StButtonWrapper = styled.button`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 56px;
  padding: 0;
  border: none;
  cursor: pointer;
  align-items: stretch;
`;

export const StBlueArea = styled.div`
  display: flex;
  width: 210px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  gap: 10px;
  padding: 11px 0px;
  color: ${Theme.colors.white};
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};

  background-color: ${Theme.colors.blue};
`;

export const StWhiteArea = styled.div`
  display: flex;
  width: 70px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0px 100px 100px 0px;
  padding: 11px 36px;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);

  background-color: ${Theme.colors.white};
`;

export const StButtonTextWrapper = styled.div`
  display: flex;

  color: ${Theme.colors.black};
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;

{
  /* <div
  style={{
    width: 280,
    height: 51,
    paddingTop: 0.25,
    paddingBottom: 0.75,
    boxShadow: '0px 0px 5px rgba(41, 47, 61, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex',
  }}
>
  <div style={{ width: 280, position: 'relative' }}>
    <div
      style={{
        width: 202,
        height: 50,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        left: 0,
        top: 0,
        position: 'absolute',
        background: '#5782FA',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
      }}
    >
      <div style={{ width: 178, height: 32, position: 'relative' }}>
        <div
          style={{
            width: 144,
            height: 32,
            padding: 6,
            left: 0,
            top: 0,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              flex: '1 1 0',
              alignSelf: 'stretch',
              textAlign: 'center',
              color: '#FEFEFE',
              fontSize: 18,
              fontFamily: 'Pretendard',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          >
            해결된 민원이에요
          </div>
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            left: 146,
            top: 0,
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex',
          }}
        >
          <img
            style={{ width: 28, height: 28 }}
            src="https://via.placeholder.com/28x28"
          />
        </div>
      </div>
    </div>
    <div
      style={{
        width: 78,
        height: 50,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        left: 202,
        top: 0,
        position: 'absolute',
        opacity: 0.6,
        background: '#FEFEFE',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
      }}
    >
      <div
        style={{
          flex: '1 1 0',
          textAlign: 'center',
          color: '#14171F',
          fontSize: 18,
          fontFamily: 'Pretendard',
          fontWeight: '700',
          wordWrap: 'break-word',
        }}
      >
        2/5
      </div>
    </div>
  </div>
</div>; */
}
