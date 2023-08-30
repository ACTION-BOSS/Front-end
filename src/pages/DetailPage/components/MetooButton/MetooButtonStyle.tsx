import styled from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StButton = styled.button<{
  $localMetoo: boolean | null;
  $isDisable: boolean;
}>`
  display: flex;
  cursor: ${({ $isDisable }) => ($isDisable ? 'default' : 'pointer')};

  padding: 6px 16px;

  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(41, 47, 61, 0.25);

  background-color: ${({ $localMetoo, $isDisable }) => {
    if ($isDisable) return Theme.colors.gray2;
    return $localMetoo ? Theme.colors.pink : Theme.colors.white;
  }};

  ${({ $localMetoo, $isDisable }) => {
    if ($isDisable) {
      return media.mobile`
        background-color : ${Theme.colors.gray2}; 
          padding: 4px 8px;
      `;
    }

    if ($localMetoo) {
      return media.mobile`
        background-color : ${Theme.colors.pink}; 
          padding: 4px 8px;
      `;
    } else {
      return media.mobile`
      background-color : ${Theme.colors.white}; 
        padding: 4px 8px;
    `;
    }
  }}
`;

export const StButtonLabel = styled.div<{
  $localMetoo: boolean | null;
  $isDisable: boolean;
}>`
  display: flex;
  gap: 6px;
  align-items: center;

  color: ${({ $localMetoo, $isDisable }) => {
    if ($isDisable) return Theme.colors.gray6;
    return $localMetoo ? Theme.colors.white : Theme.colors.pink;
  }};

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};

  ${media.mobile`
    font-size: ${Theme.fontSizes.mH3};
    font-weight: ${Theme.fontWeights.mH3};
    gap : 2px;
  `}
`;
