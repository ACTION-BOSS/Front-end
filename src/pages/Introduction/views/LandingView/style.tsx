import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StLandingView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 375px;
  height: 1000px;
  background-color: ${Theme.colors.blue};
  margin-top: 30px;
  position: relative;

  ${media.tablet`
    height: 845px;
  `}

  ${media.mobile`
    height: 770px;
  `}
`;

export const StLogoFlag = styled.img`
  margin-top: 12vh;
  margin-bottom: 2px;
  width: 140px;

  ${media.tablet`
  margin-top: 10vh;
    width: 90px; 
  `}

  ${media.mobile`
    width: 75px;    
  `}
`;

export const StBIName = styled.div`
  font-family: 'GilbeotTG';
  font-size: 70px;
  font-weight: 400;
  color: ${Theme.colors.white};

  ${media.tablet`
  font-size: 50px;
  `}

  ${media.mobile`
  font-size: 40px;
  `}
`;

export const StSlogan = styled.div`
  font-family: 'GilbeotTG';
  font-size: 40px;
  font-weight: 400;
  color: ${Theme.colors.white};
  margin-bottom: 20px;

  ${media.tablet`
  font-size: 25px;
  `}

  ${media.mobile`
  font-size: 20px;
  `}
`;

export const StText = styled.div`
  font-size: 20px;
  font-weight: ${Theme.fontWeights.body4};
  color: ${Theme.colors.gray1};
  margin-bottom: 6px;
  letter-spacing: -1.2px;

  &.wide {
    letter-spacing: 0;
  }

  ${media.tablet`
  font-size: 15px;
  `}

  ${media.mobile`
  font-size: 12px;
  `}
`;

export const StMobileImg = styled.img.attrs({
  src: 'https://res.cloudinary.com/dsxqz8qce/image/upload/v1693321743/app_rkgxzl.png',
  alt: 'MobileImage',
})`
  width: 166px;
  height: 357px;
  z-index: 1;
  display: none;
  margin-top: 25px;

  ${media.tablet`

  `}

  ${media.mobile`
    display: block;
  `}
`;

export const StNavButton = styled.button`
  background-color: ${Theme.colors.white};
  border: none;
  border-radius: 100rem;
  width: 240px;
  height: 80px;
  font-size: 20px;
  font-weight: ${Theme.fontWeights.h1};
  color: ${Theme.colors.black};
  margin-top: 4vh;
  cursor: pointer;

  ${media.tablet`
  width: 180px;
  height: 60px;
  font-size: ${Theme.fontSizes.h2}
  `}

  ${media.mobile`
  width: 280px;
  height: 62px;
  font-size: 18px;

  margin: 20px 0 20px 0;
  `}
`;

export const StMapBox = styled.img.attrs({
  src: 'https://res.cloudinary.com/dsxqz8qce/image/upload/v1693321745/web_d9jw5w.png',
  alt: 'MapBoxImage',
})`
  width: 780px;
  filter: drop-shadow(0 0 2px #5782fa5c) drop-shadow(0 0 15px #5782fa5c);
  z-index: 1;
  position: absolute;
  top: 600px;

  ${media.tablet`
  width: 432px;
  height: 349px;
  top: 500px;
  `}

  ${media.mobile`
  display: none;
  `}
`;
