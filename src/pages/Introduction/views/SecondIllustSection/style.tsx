import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StSecondIllustSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 375px;
  height: 1010px;
  background-color: ${Theme.colors.gray1};

  ${media.tablet`
    height: 600px;
  `}

  ${media.mobile`
  height: 575px;
  `}
`;

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 375px;
  height: 100%;

  gap: 50px;

  ${media.tablet`
  gap: 20px;
  `}

  ${media.mobile`
  flex-direction: column-reverse;
  `}
`;

export const StTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const StTitle = styled.div`
  font-family: 'GilbeotTG';
  font-size: 50px;
  font-weight: 400;
  color: ${Theme.colors.black};
  margin-bottom: 4vh;
  white-space: pre-line;

  ${media.tablet`
  margin-bottom: 2vh;
  font-size: 40px;
  `}

  ${media.mobile`
  font-size: 30px;
  text-align: center;
  `}
`;

export const StContent = styled.div`
  font-size: 22px;
  font-weight: ${Theme.fontWeights.body1};
  color: ${Theme.colors.gray5};
  margin-bottom: 1vh;

  ${media.tablet`
  font-size: 18px;
  `}

  ${media.mobile`
  font-size: 12px;
  text-align: center;
  `}
`;

export const StManhole = styled.img`
  width: 500px;
  object-fit: contain;

  ${media.tablet`
  width: 306px;
  `}

  ${media.mobile`
  width: 244px;
  `}
`;
