import { FC } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { UncomBigIcon } from '../../../../assets';
type MetooButtonProps = {
  handleClickMetooButton: () => void;
  localMetooCount: number | null;
  localMetoo: boolean | null;
};

export const MetooButton: FC<MetooButtonProps> = ({
  handleClickMetooButton,
  localMetooCount,
  localMetoo,
}) => {
  let isDisable = false;

  return (
    <StButton
      localMetoo={localMetoo}
      isDisable={isDisable}
      onClick={isDisable ? undefined : handleClickMetooButton}
    >
      <StButtonLabel localMetoo={localMetoo} isDisable={isDisable}>
        <div>나도 불편해요</div>
        <UncomBigIcon
          color={
            isDisable
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

export const StButton = styled.button<{
  localMetoo: boolean | null;
  isDisable: boolean;
}>`
  display: flex;
  cursor: ${({ isDisable }) => (isDisable ? 'default' : 'pointer')};

  padding: 6px 16px;

  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(41, 47, 61, 0.25);

  background-color: ${({ localMetoo, isDisable }) => {
    if (isDisable) return Theme.colors.gray2;
    return localMetoo ? Theme.colors.pink : Theme.colors.white;
  }};
`;

export const StButtonLabel = styled.div<{
  localMetoo: boolean | null;
  isDisable: boolean;
}>`
  display: flex;
  gap: 6px;
  align-items: center;

  color: ${({ localMetoo, isDisable }) => {
    if (isDisable) return Theme.colors.gray6;
    return localMetoo ? Theme.colors.white : Theme.colors.pink;
  }};

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;
