import styled, { keyframes } from 'styled-components';
import { Theme, media } from '../../styles';

export const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.colors.blue};

  ${media.tablet`
  height: 1180px;  
    `}

  ${media.mobile`
  height: 1033px; 
    `}
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

  ${media.tablet`
    flex-direction: column;    
    `}
`;

export const StNotfoundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StNotfoundImageWrapper = styled.div`
  display: flex;
  width: 310px;
  height: 400px;

  animation: ${move} 3s ease-in-out infinite;

  ${media.tablet`
  width: 396px;
  height: 500px;  
    `}

  ${media.mobile`
    width: 200px;
  height: 252px; 
    `}
`;

export const StText = styled.div`
  display: flex;
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray1};
  font-size: 53px;
  font-weight: 400;
  line-height: 55px;

  ${media.tablet`
  order: 2;
  font-size: 50px;
    `}

  ${media.mobile`
  line-height: 15px;
  font-size: 28px;
    `}
`;

export const StText2 = styled(StText)`
  margin-left: -44px;

  ${media.tablet`
  margin: 0;
    `}
`;
