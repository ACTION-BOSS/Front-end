import { styled } from 'styled-components';
import { media } from '../../../../styles';

export const MainMapContainer = styled.div`
  flex: 1;
  position: relative;
  ${media.tablet`
    height: calc(100% - 84px);`}
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

export const MainLocationBox = styled.div`
  z-index: 999;
  position: absolute;
  right: 40%;
  bottom: 30px;
  ${media.tablet`
  bottom: 96px;
  right: 15px;`}
  ${media.mobile`
  display:none`}
`;

export const MainModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 30px;
  left: 30px;
  ${media.tablet`
  bottom: 96px;
  left:15px;`}
  ${media.mobile`
  left: 15px;
  right: 15px;
  `}
`;
