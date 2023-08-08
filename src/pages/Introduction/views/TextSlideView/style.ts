import { styled, keyframes } from 'styled-components';

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
  font-size: 2.5rem;
  font-weight: bold;
  color: #9d9993;
  &:hover {
    color: #000;
  }
`;

export const FlowWrap = styled.div`
  animation: ${textLoop} 10s linear infinite;
  padding-right: 1.4881vw;
`;
