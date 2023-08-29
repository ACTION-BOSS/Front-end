import styled from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding-right: 4px;
`;

export const StInfoText = styled.p`
  color: ${Theme.colors.gray5};
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};
`;

export const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  ${media.mobile`
  width:100%;
  `}
`;

export const StButtonWrapper = styled.button`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 56px;
  padding: 0;
  border: none;
  cursor: pointer;
  align-items: stretch;
  background-color: transparent;

  ${media.mobile`
    justify-content: stretch;
  `}
`;

export const StBlueArea = styled.div<{ $localDone: boolean | null }>`
  display: flex;
  width: 180px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  gap: 10px;
  padding: 11px 0px;
  color: ${({ $localDone }) =>
    $localDone ? Theme.colors.white : Theme.colors.blue};
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};

  background-color: ${({ $localDone }) =>
    $localDone ? Theme.colors.blue : Theme.colors.white};

  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);

  ${media.mobile`
    flex:1;
  `}
`;

export const StWhiteArea = styled.div<{ $localDone: boolean | null }>`
  display: flex;
  width: 70px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0px 100px 100px 0px;
  padding: 11px 36px;

  background-color: ${({ $localDone }) =>
    $localDone ? Theme.colors.white : Theme.colors.blueGray};

  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);
`;

export const StButtonTextWrapper = styled.div<{ $isReallyDone: boolean }>`
  display: flex;
  color: ${({ $isReallyDone }) =>
    $isReallyDone ? Theme.colors.blue : Theme.colors.black};

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;
