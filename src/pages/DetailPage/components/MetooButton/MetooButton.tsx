import { FC } from 'react';
import { Theme } from '../../../../styles';
import { UncomBigIcon } from '../../../../assets';
import { StButton, StButtonLabel } from './MetooButtonStyle';
type MetooButtonProps = {
  handleClickMetooButton: () => void;
  localMetooCount: number | null;
  localMetoo: boolean | null;
  postDone: boolean;
};

export const MetooButton: FC<MetooButtonProps> = ({
  handleClickMetooButton,
  localMetooCount,
  localMetoo,
  postDone,
}) => {
  return (
    <StButton
      $localMetoo={localMetoo}
      $isDisable={postDone}
      onClick={postDone ? undefined : handleClickMetooButton}
    >
      <StButtonLabel $localMetoo={localMetoo} $isDisable={postDone}>
        <div>나도 불편해요</div>
        <UncomBigIcon
          color={
            postDone
              ? Theme.colors.gray6
              : localMetoo
              ? Theme.colors.white
              : Theme.colors.pink
          }
          size={32}
        />
        <div>{localMetooCount}</div>
      </StButtonLabel>
    </StButton>
  );
};
