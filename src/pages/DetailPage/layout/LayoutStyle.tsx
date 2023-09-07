import styled from 'styled-components';
import { SKYLINE } from '../../../assets';
import { media } from '../../../styles';

export const StLayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  ${media.tablet`
  min-height: 1700px;
`}

  ${media.tablet`
 min-height: 1000px;
`}
`;

export const StChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  top: 140px;
  width: 100%;
  max-width: 1200px;
  padding: 40px 50px;
  border-radius: 20px;

  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);

  ${media.mobile`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 104px;

  padding: 0;
  border-radius: 0px;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
`}
`;

export const StBg = styled.div`
  z-index: -1;
  position: fixed;
  margin-top: 48.5vh;

  ${media.tablet`
  
  bottom: 0;
  `}

  ${media.mobile`
  bottom: 0;
  `}
`;

export const StSkyline = styled.div`
  width: 100vw;
  /* min-width: 375px; */
  height: 17vh;
  background-image: url(${SKYLINE});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${media.tablet`
  height: 72px;
  `}

  ${media.mobile`
  height: 34px;
  `}
`;

export const StGrayBg = styled.div`
  width: 100vw;
  /* min-width: 375px; */
  height: 50vh;
  background-color: #f0f1f5;

  ${media.tablet`
  height: 72px;
  `}

  ${media.mobile`
  height: 40px;
  `}
`;
