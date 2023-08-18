import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StLandingView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 110vh;
  background-color: ${Theme.colors.blue};
  overflow: hidden;
  margin-top: 6vh;
`;

export const StLogoFlag = styled.img`
  margin-top: 10vh;
  margin-left: 4vw;
  width: 62px;
  height: 83px;
`;

export const StBIName = styled.div`
  font-family: 'GilbeotTG';
  font-size: 50px;
  font-weight: 400;
  color: ${Theme.colors.white};
`;

export const StSlogan = styled.div`
  font-family: 'GilbeotTG';
  font-size: 40px;
  font-weight: 400;
  color: ${Theme.colors.white};
  margin-bottom: 10px;
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
`;

export const StNavButton = styled.button`
  background-color: ${Theme.colors.white};
  border: none;
  border-radius: 100rem;
  width: 15vw;
  height: 8vh;
  min-width: 160px;
  font-size: 20px;
  font-weight: ${Theme.fontWeights.h1};
  color: ${Theme.colors.black};
  margin-top: 4vh;
  cursor: pointer;
`;

export const StMapBox = styled.img.attrs({
  src: 'https://res.cloudinary.com/dsxqz8qce/image/upload/v1692261954/%E1%84%8F%E1%85%A2%E1%86%B8%E1%84%8E%E1%85%A5_1_p2clht.png',
  alt: 'MapBoxImage',
})`
  width: 48vw;
  min-width: 400px;
  border-radius: 12px;
  box-shadow:
    0 0 2px #93b0ff,
    0 0 15px #94aef7;
  position: absolute;
  bottom: -20vh;
  z-index: 1;
`;
