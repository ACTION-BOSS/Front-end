import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StLandingView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 85vh;
  background-color: ${Theme.colors.blue};
  overflow: hidden;
`;

export const StLogoFlag = styled.img`
  margin-top: 6vh;
  width: 62px;
  height: 83px;
`;

export const StBIName = styled.div`
  font-family: 'GilbeotTG';
  font-size: 50px;
  font-weight: 400;
  color: ${Theme.colors.white};
  margin-bottom: 10px;
`;

export const StSlogan = styled.div`
  font-family: 'GilbeotTG';
  font-size: 40px;
  font-weight: 400;
  color: ${Theme.colors.white};
  margin-bottom: 20px;
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
  margin-top: 6vh;
  cursor: pointer;
`;

export const StMapBox = styled.div`
  display: flex;
  width: 50vw;
  height: 55vh;
  min-width: 500px;
  background-color: white;
  border-radius: 12px;
  box-shadow:
    0 0 2px #93b0ff,
    0 0 15px #94aef7;

  position: absolute;
  bottom: -15.5vh;
  z-index: 1;
`;
