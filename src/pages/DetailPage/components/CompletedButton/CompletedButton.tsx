import { FC } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { ClearIcon, HelpIcon } from '../../../../assets';
import { useCompleted, useDetailData } from '../../container';
type CompletedButtonProps = {};

export const CompletedButton: FC<CompletedButtonProps> = ({}) => {
  const { isLoading, error, done, doneCount } = useDetailData();
  const { handleClickDoneButton, localDoneCount } = useCompleted(
    done,
    doneCount,
  );

  if (isLoading || error) {
    return <></>;
  }

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
