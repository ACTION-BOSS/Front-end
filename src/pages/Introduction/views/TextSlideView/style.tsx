import { styled, keyframes } from 'styled-components';
import { Theme } from '../../../../styles';

const textLoop = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-100%, 0, 0);
    }
`;

export const FlowText = styled.div`
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;
  font-size: 38px;
  padding: 20px 0 15px 0;
`;

export const FlowWrap = styled.div`
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray8};
  animation: ${textLoop} 10s linear infinite;
  display: flex;
  align-items: center;
  padding-right: 1.4881vw;
`;

export const LogoSymbol = styled.img`
  width: 55px;
  height: 40px;
  margin-left: 12px;
  margin-bottom: 10px;
`;
