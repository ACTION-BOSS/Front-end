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
  font-weight: bold;
  color: ${Theme.colors.gray8};
  padding: 20px 0 20px 0;
`;

export const FlowWrap = styled.div`
  animation: ${textLoop} 10s linear infinite;
  display: flex;
  align-items: center;
  padding-right: 1.4881vw;
`;

export const LogoSymbol = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 15px;
`;
