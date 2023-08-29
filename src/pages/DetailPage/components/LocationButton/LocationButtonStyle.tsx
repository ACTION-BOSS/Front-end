import styled from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StLocationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;

  ${media.mobile`
  `}

  ${media.tablet`
  `}
`;

export const StLocationButtonLabel = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  color: black;

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};

  ${media.mobile`
    gap:0px;
    margin-left : -6px;
  `}
`;

export const StTextWrapper = styled.div`
  display: flex;
  gap: 6px;

  font-size: ${Theme.fontSizes.body1};
  font-weight: ${Theme.fontWeights.body1};
  color: ${Theme.colors.black};

  ${media.mobile`
  font-size: ${Theme.fontSizes.mBody1};
  font-weight: ${Theme.fontWeights.mBody1};
  `}
`;

export const StLocationText = styled.p`
  ${media.mobile`
  display: none;
  `}
`;

export const StLocationDetailText = styled.p`
  ${media.mobile`
    font-size: ${Theme.fontSizes.mBody1};
    font-weight: ${Theme.fontWeights.mBody1};
  `}
`;
