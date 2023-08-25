import { FC } from 'react';
import { Theme } from '../../../../styles';
import { ClearIcon, HelpIcon } from '../../../../assets';
import { useCompleted, useDetailData } from '../../container';
import {
  StWrapper,
  StButtonWrapper,
  StBlueArea,
  StWhiteArea,
  StButtonTextWrapper,
  StInfoWrapper,
  StInfoText,
} from './CompletedButtonStyle';
type CompletedButtonProps = {};

export const CompletedButton: FC<CompletedButtonProps> = ({}) => {
  const { isLoading, error, done, doneCount } = useDetailData();
  const { handleClickDoneButton, localDone, localDoneCount, isReallyDone } =
    useCompleted(done, doneCount);

  if (isLoading || error) {
    return <></>;
  }

  return (
    <StWrapper>
      <StButtonWrapper onClick={handleClickDoneButton}>
        <StBlueArea $localDone={localDone}>
          <div>해결된 민원이에요</div>
          <ClearIcon
            color={localDone ? Theme.colors.blueGray : Theme.colors.blue}
            size={32}
          />
        </StBlueArea>
        <StWhiteArea $localDone={localDone}>
          <StButtonTextWrapper $isReallyDone={isReallyDone}>
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
