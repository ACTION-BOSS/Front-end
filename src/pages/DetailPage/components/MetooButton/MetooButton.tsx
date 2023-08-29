import { FC } from 'react';
import { Theme } from '../../../../styles';
import { StButton, StButtonLabel } from './MetooButtonStyle';
import { useWindowSize } from 'rooks';
import { UncomBigIcon } from '../../../../assets';
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
  const { innerWidth } = useWindowSize();
  const isMobileView = innerWidth! < 576;

  return (
    <StButton
      $localMetoo={localMetoo}
      $isDisable={postDone}
      onClick={postDone ? undefined : handleClickMetooButton}
    >
      <StButtonLabel $localMetoo={localMetoo} $isDisable={postDone}>
        {!isMobileView && <div>나도 불편해요</div>}
        <UncomBigIcon
          color={
            isMobileView
              ? postDone
                ? Theme.colors.gray6
                : localMetoo
                ? Theme.colors.white
                : Theme.colors.pink
              : postDone
              ? Theme.colors.gray6
              : localMetoo
              ? Theme.colors.white
              : Theme.colors.pink
          }
          size={isMobileView ? 18 : 32}
        />
        <div
          style={{
            color: isMobileView
              ? postDone
                ? Theme.colors.gray6
                : localMetoo
                ? Theme.colors.white
                : Theme.colors.pink
              : postDone
              ? Theme.colors.gray6
              : localMetoo
              ? Theme.colors.white
              : Theme.colors.pink,
          }}
        >
          {localMetooCount}
        </div>
      </StButtonLabel>
    </StButton>
  );
};
