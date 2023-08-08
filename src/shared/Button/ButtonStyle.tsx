import { styled, css } from 'styled-components';
import { ButtonStyleProps } from './type';
import { $buttonTheme } from './buttonTheme';

const sizeToPadding = {
  large: '22px',
  medium: '16px',
  small: '12px',
};

export const ButtonStyle = styled.button<ButtonStyleProps>`
  display: flex;
  flex: 1;
  text-decoration: none;
  justify-content: center;
  transition:
    color 0.1s,
    background-color 0.1s,
    border-color 0.1s;
  cursor: pointer;
  align-items: center;
  padding-top: ${(props: ButtonStyleProps) =>
    sizeToPadding[props.size] || sizeToPadding.small};
  padding-bottom: ${(props: ButtonStyleProps) =>
    props.size === 'large' ? '16px' : '12px'};
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  font: inherit;
  border-radius: 11px;
  background-color: ${(props) =>
    $buttonTheme[props.$buttonTheme].backgroundColor};
  color: ${(props) => $buttonTheme[props.$buttonTheme].color};
  font-size: ${(props) => (props.size === 'small' ? '14px' : '18px')};
  font-weight: ${(props) => (props.$bold ? '700' : '400')};
  border: ${(props) => $buttonTheme[props.$buttonTheme].border};
  ${(props) => css`
    &:hover,
    &:active {
      background-color: ${$buttonTheme[props.$buttonTheme].hover
        .backgroundColor};
    }
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
`;
