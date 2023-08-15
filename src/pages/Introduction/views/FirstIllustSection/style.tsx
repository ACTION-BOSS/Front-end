import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StFirstIllustSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.colors.white};
`;

export const StGradation = styled.div`
  width: 100vw;
  height: 20vh;
  background: linear-gradient(#afbff0, ${Theme.colors.white});
`;

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  gap: 10vw;
`;

export const StTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StTitle = styled.div`
  font-family: 'GilbeotTG';
  font-size: 42px;
  font-weight: 400;
  color: ${Theme.colors.black};
  margin-bottom: 6vh;
`;

export const StContent = styled.div`
  font-size: 19px;
  font-weight: ${Theme.fontWeights.body1};
  color: ${Theme.colors.gray5};
  margin-bottom: 1vh;
`;

export const StSwing = styled.img`
  width: 26vw;
  height: 62vh;
  object-fit: contain;
`;
