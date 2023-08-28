import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StFirstIllustSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 375px;
  height: 1010px;
  background-color: ${Theme.colors.white};

  ${media.tablet`
    height: 600px;
  `}

  ${media.mobile`
    height: 575px;
  `}
`;

export const StGradation = styled.div`
  width: 100vw;
  min-width: 375px;
  height: 20vh;
  background: linear-gradient(#afbff0, ${Theme.colors.white});

  ${media.mobile`
    height: 10vh;
  `}
`;

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 375px;
  height: 80vh;
  gap: 50px;

  ${media.tablet`
  gap: 20px;
  `}

  ${media.mobile`    
    flex-direction: column;
    height: 90vh;
  `}
`;

export const StTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StTitle = styled.div`
  font-family: 'GilbeotTG';
  font-size: 50px;
  font-weight: 400;
  color: ${Theme.colors.black};
  margin-bottom: 6vh;

  ${media.tablet`
  font-size: 40px;
  `}

  ${media.mobile`
  font-size: 30px;
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

export const StSwing = styled.img`
  width: 500px;
  height: 637px;
  object-fit: contain;

  ${media.tablet`
  width: 306px;
  height: 373px;
  `}

  ${media.mobile`
  width: 244px;
  height: 312px;
  `}
`;
