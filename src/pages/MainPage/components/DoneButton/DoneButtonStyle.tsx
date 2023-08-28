import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const DoneButton = styled.button<{ $isDone: boolean }>`
  width: 99px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 2px 0px rgba(41, 47, 61, 0.25);
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};
  cursor: pointer;

  background-color: ${({ $isDone }) =>
    $isDone ? Theme.colors.blue : Theme.colors.white};
  color: ${({ $isDone }) =>
    $isDone ? Theme.colors.white : Theme.colors.black};
`;
