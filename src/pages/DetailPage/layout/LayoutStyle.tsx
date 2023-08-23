import styled from 'styled-components';
import { SKYLINE } from '../../../assets';

export const StLayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
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
`;

export const StBg = styled.div`
  z-index: -1;
  position: fixed;
  margin-top: 65vh;
`;

export const StSkyline = styled.div`
  width: 100vw;
  height: 17vh;
  background-image: url(${SKYLINE});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StGrayBg = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #f0f1f5;
`;
