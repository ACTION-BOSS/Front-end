import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 462px;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  margin-top: 3vh;

  ${media.tablet`
  width: 88vw;
  height: 383px;
  `}

  ${media.mobile`
  width: 91vw;
  height: 200px;
  margin-top: 10px;
  `}
`;

export const StMapText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 58px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${Theme.colors.white};
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  color: ${Theme.colors.black};

  ${media.mobile`
  height: 36px;
  font-size: ${Theme.fontSizes.mH3};
  font-weight: ${Theme.fontWeights.mH3};
  `}
`;

export const StMapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  position: relative;

  ${media.tablet`
  height: 325px;
  `}

  ${media.mobile`
  height: 150px;
  `}
`;

export const StAddressContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  ${media.mobile`
  display:none;
  `}
`;
export const StIconText = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.3);
  border-radius: 100rem;
  padding: 10px 23px 10px 20px;
  gap: 5px;
  background-color: ${Theme.colors.white};
`;
export const StAddressText = styled.div``;
