import { FC } from 'react';
import { ButtonStyle, ButtonWrapper } from './ButtonStyle';

type ButtonProps = {
  label: string;
  $buttonTheme:
    | 'pink'
    | 'emptyBlue'
    | 'gray'
    | 'blue'
    | 'emptyGray'
    | 'emptyPink';
  size: string;
  $bold?: boolean;
  onClick?: () => void;
};

/***
 * @param {string} label - 버튼 이름
 * @param {string} $buttonTheme - pink / emptyBlue / gray / blue / emptyGray / emptyPink
 * @param {string} size - small / large
 * @param {boolean} $bold - [선택] 넣을 경우 굵은 글씨
 * @param {function} onClick
 */
export const Button: FC<ButtonProps> = ({
  label = 'label',
  $buttonTheme = 'pink',
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
