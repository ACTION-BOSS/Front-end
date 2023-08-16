import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StSecondIllustSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.colors.gray1};
`;

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  margin-top: 20vh;
  gap: 10vw;
`;

export const StTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const StTitle = styled.div`
  font-family: 'GilbeotTG';
  font-size: 42px;
  font-weight: 400;
  color: ${Theme.colors.black};
  margin-bottom: 6vh;
  white-space: pre-line;
`;

export const StContent = styled.div`
  font-size: 19px;
  font-weight: ${Theme.fontWeights.body1};
  color: ${Theme.colors.gray5};
  margin-bottom: 1vh;
`;

export const StManhole = styled.img`
  width: 26vw;
  height: 62vh;
  object-fit: contain;
`;
