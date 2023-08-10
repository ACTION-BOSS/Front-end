import { styled, css } from 'styled-components';
import { ButtonStyleProps } from './type';
import { $buttonTheme } from './buttonTheme';

const sizeToVerticalPadding = {
  large: '22px',
  medium: '16px',
  small: '12px',
  xsmall: '4px',
};

const sizeToHorizontalPadding = {
  large: '16px',
  medium: '16px',
  small: '16px',
  xsmall: '6px',
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
  cursor: ${(props) => (props.$buttonTheme === 'gray' ? 'normal' : 'pointer')};
  align-items: center;
  padding-top: ${(props: ButtonStyleProps) =>
    sizeToVerticalPadding[props.size] || sizeToVerticalPadding.small};
  padding-bottom: ${(props: ButtonStyleProps) =>
    sizeToVerticalPadding[props.size] || sizeToVerticalPadding.small};
  padding-left: ${(props: ButtonStyleProps) =>
    sizeToHorizontalPadding[props.size] || sizeToHorizontalPadding.small};
  padding-right: ${(props: ButtonStyleProps) =>
    sizeToHorizontalPadding[props.size] || sizeToHorizontalPadding.small};
  box-sizing: border-box;
  font: inherit;
  border-radius: ${(props) =>
    props.$buttonTheme === 'emptyGray' || props.size === 'xsmall'
      ? ' 4px'
      : '11px'};
  background-color: ${(props) =>
    $buttonTheme[props.$buttonTheme].backgroundColor};
  color: ${(props) => $buttonTheme[props.$buttonTheme].color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => $buttonTheme[props.$buttonTheme].border};
  ${(props) => css`
    &:hover,
    &:active {
      background-color: ${$buttonTheme[props.$buttonTheme].hover
        .backgroundColor};
    }
  `}
  box-shadow: ${(props) =>
    props.$buttonTheme === 'emptyGray'
      ? ' 0px 0px 2px 0px rgba(41, 47, 61, 0.25)'
      : 'none'}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
`;
