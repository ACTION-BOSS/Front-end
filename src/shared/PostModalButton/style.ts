import styled, { css } from 'styled-components';
import { ButtonProps } from './type';

export const StButton = styled.button<ButtonProps>`
  cursor: pointer;
  width: 200px;
  height: 68px;
  border-radius: 8px;

  &:active {
    filter: brightness(85%);
  }

  ${(props) =>
    props.func === 'cancel' &&
    css`
      background-color: grey;
    `}

  ${(props) =>
    props.func === 'modify' &&
    css`
      background-color: blue;
    `}

    ${(props) =>
    props.func === 'verify' &&
    css`
      background-color: blue;
    `}

  ${(props) =>
    props.func === 'delete' &&
    css`
      background-color: red;
    `}
`;
