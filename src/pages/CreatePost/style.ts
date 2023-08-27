import styled from 'styled-components';
import { SKYLINE } from '../../assets';
import { media } from '../../styles';

export const StCreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  min-width: 375px;
  height: 1510px;
  overflow-y: auto;
  margin-top: 100px;

  ${media.tablet`
  height: 1522px;
  `}

  ${media.mobile`
  height: 1100px;
  `}
`;

export const StBg = styled.div`
  z-index: -1;
  position: fixed;
  margin-top: 48.5vh;

  ${media.tablet`
  margin: 0;
  position: absolute;
  bottom: 0;
  `}

  ${media.mobile`

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
  height: 100px;
  `}
`;

export const StBtnContainer = styled.div`
  display: flex;
  width: 60%;
  /* min-width: 375px; */
  gap: 12px;
  margin-top: 24px;

  ${media.tablet`
  width: 88%;
  `}

  ${media.mobile`
  width: 91%;
  height: 68px;
  margin-top: 120px;
  `}

  button {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    min-width: 70px;
  }
`;

export const StBtnBox1 = styled.div`
  width: 104px;

  ${media.mobile`
  display: none;
  `}
`;

export const StBtnBox2 = styled.div`
  width: 154px;

  ${media.mobile`
  width: 100%;
  height: 68px;
  `}
`;
