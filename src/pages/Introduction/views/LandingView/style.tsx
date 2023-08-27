import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StLandingView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 375px;
  height: 900px;
  background-color: ${Theme.colors.blue};
  margin-top: 30px;
  position: relative;

  ${media.tablet`
    height: 640px;
  `}

  ${media.mobile`
    height: 670px;
  `}
`;

export const StLogoFlag = styled.img`
  margin-top: 10vh;
  margin-left: 30px;
  width: 62px;
  height: 83px;

  ${media.tablet`
    width: 34px;
    height: 45px;
  `}

  ${media.mobile`
    width: 30px;
    height: 40px;
    
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
  margin-bottom: 10px;

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
  src: 'https://res.cloudinary.com/dsxqz8qce/image/upload/v1693063756/app%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8_bwnzbp.png',
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
  font-size: 18px;
  `}

  ${media.mobile`
  width: 280px;
  height: 62px;
  font-size: 18px;

  margin: 20px 0 20px 0;
  `}
`;

export const StMapBox = styled.img.attrs({
  src: 'https://res.cloudinary.com/dsxqz8qce/image/upload/v1692261954/%E1%84%8F%E1%85%A2%E1%86%B8%E1%84%8E%E1%85%A5_1_p2clht.png',
  alt: 'MapBoxImage',
})`
  width: 780px;
  border-radius: 12px;
  box-shadow:
    0 0 2px #93b0ff,
    0 0 15px #94aef7;
  z-index: 1;
  position: absolute;
  top: 500px;

  ${media.tablet`
  width: 432px;
  height: 349px;
  top: 450px;
  `}

  ${media.mobile`
  display: none;
  `}
`;
