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
  disabled?: boolean;
};

/***
 * @param {string} label - 버튼 이름
 * @param {string} $buttonTheme - pink / emptyBlue / gray(=disabled) / blue / emptyGray / emptyPink
 * @param {string} size - xsmall/ small / large / medium
 * @param {string} fontSize - Theme.fontSizes...
 * @param {string} fontWeight - Theme.fontWeights...
 * @param {boolean} $bold - [선택] 넣을 경우 굵은 글씨
 * @param {function} onClick - [선택] 버튼 클릭 시 실행될 함수
 * @param {boolean} disabled - [선택] true값 전달 시 버튼이 disabled됨 (클릭 x, gray색의 버튼으로)
 */
export const Button: FC<ButtonProps> = ({
  label = 'label',
  $buttonTheme = 'pink',
  size = 'small',
  fontSize = '16px',
  fontWeight = '700',
  $bold = false,
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <ButtonWrapper
      onClick={() => {
        !disabled && onClick();
      }}
    >
      <ButtonStyle
        $buttonTheme={disabled ? 'gray' : $buttonTheme}
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
