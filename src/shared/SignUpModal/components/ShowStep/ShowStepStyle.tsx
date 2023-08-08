import styled from 'styled-components';
import { Theme } from '../../../../styles';

export const StWrapper = styled.div`
  display: flex;
`;

export const StColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-left: 2px;
  padding-right: 2px;
  gap: 5px;
`;

export const StRoundStep = styled.div<{
  $onProgress?: boolean;
}>`
  width: 12px;
  height: 12px;
  border-radius: 999px;

  background-color: ${(props) =>
    props.$onProgress ? Theme.colors.gray7 : Theme.colors.gray2};
`;

export const StLetterStep = styled.p<{
  $onProgress?: boolean;
}>`
  font-size: ${Theme.fontSizes.label2};
  font-weight: ${Theme.fontWeights.label2};
  color: ${(props) =>
    props.$onProgress ? Theme.colors.gray7 : Theme.colors.gray2};
`;

export const StLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StLine = styled.div<{
  $onProgress?: boolean;
}>`
  width: 20.43px;
  height: 0;
  border: 0.5px solid
    ${(props) => (props.$onProgress ? Theme.colors.gray7 : Theme.colors.gray2)};
  margin-top: 5px;
`;
