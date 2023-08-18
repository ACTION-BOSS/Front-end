import styled, { keyframes } from 'styled-components';
import { Theme } from '../../styles';

export const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.colors.blue};
`;

export const move = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

export const StContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  margin-top: 20px;
`;

export const StNotfoundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StNotfoundImageWrapper = styled.div`
  display: flex;
  width: 18vw;
  height: 42vh;
  aspect-ratio: 18/42;

  animation: ${move} 3s ease-in-out infinite;
`;

export const StText = styled.div`
  display: flex;
  font-family: 'GilbeotTG';
  color: ${Theme.colors.white};
  font-size: 70px;
  font-weight: 400;
  line-height: 55px;
`;

export const StText2 = styled(StText)`
  margin-left: -44px;
`;
