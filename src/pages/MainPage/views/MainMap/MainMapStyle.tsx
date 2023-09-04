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

export const SearchBox = styled.div`
  z-index: 999;
  position: absolute;
  top: 12px;
  left: 12px;
  ${media.mobile`
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  `}
`;

export const MainMapIcon = styled.div`
  z-index: 999;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const MainLocationBox = styled.div`
  z-index: 999;
  position: absolute;
  right: 12px;
  bottom: 12px;
  ${media.tablet`
  bottom: 96px;
  right: 12px;`}
  ${media.bigMobile`
  display:none`}
`;

export const MainModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 12px;
  left: 12px;
  ${media.tablet`
  bottom: 96px;
  left:15px;`}
  ${media.mobile`
  left: 15px;
  right: 15px;
  `}
`;
