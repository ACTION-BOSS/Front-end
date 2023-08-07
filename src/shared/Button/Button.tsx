import { FC } from 'react';
import { ButtonStyle, ButtonWrapper } from './ButtonStyle';

type IButtonProps = {
  label: string;
  $buttonTheme: 'filled' | 'empty' | 'gray';
  size: string;
  $bold?: boolean;
  onClick?: () => void;
};

/***
 * @param {string} label - 버튼 이름
 * @param {string} $buttonTheme - filled / empty / gray
 * @param {string} size - small / large
 * @param {string} $bold - [선택] 넣을 경우 굵은 글씨
 */
export const Button: FC<IButtonProps> = ({
  label = 'label',
  $buttonTheme = 'filled',
  size = 'small',
  $bold = false,
  onClick,
}) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ButtonStyle $buttonTheme={$buttonTheme} size={size} $bold>
        <div>{label}</div>
      </ButtonStyle>
    </ButtonWrapper>
  );
};
