import { styled } from 'styled-components';

export const MainMapContainer = styled.div`
  flex: 1;
  position: relative;
  .map {
    width: 100%;
    height: 100%;
  }
`;

export const MainMapIcon = styled.div`
  z-index: 999;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const MainModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 30px;
  left: 30px;
`;
