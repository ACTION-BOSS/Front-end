import { FC } from 'react';
import { ButtonStyle, ButtonWrapper } from './ButtonStyle';
import { SizeType, ThemeType } from './type';

type ButtonProps = {
  label: string;
  $buttonTheme: ThemeType;
  size: SizeType;
  fontSize?: string;
  fontWeight?: string;
  $bold?: boolean;
  onClick?: () => void;
};

/***
 * @param {string} label - 버튼 이름
 * @param {string} $buttonTheme - pink / emptyBlue / gray(=disabled) / blue / emptyGray / emptyPink
 * @param {string} size - xsmall/ small / large / medium
 * @param {string} fontSize - Theme.fontSizes...
 * @param {string} fontWeight - Theme.fontWeights...
 * @param {boolean} $bold - [선택] 넣을 경우 굵은 글씨
 * @param {function} onClick
 */
export const Button: FC<ButtonProps> = ({
  label = 'label',
  $buttonTheme = 'pink',
  size = 'small',
  fontSize = '16px',
  fontWeight = '700',
  $bold = false,
  onClick,
}) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ButtonStyle
        $buttonTheme={$buttonTheme}
        size={size}
        fontSize={fontSize}
        fontWeight={fontWeight}
        $bold
      >
        <div>{label}</div>
      </ButtonStyle>
    </ButtonWrapper>
  );
};
