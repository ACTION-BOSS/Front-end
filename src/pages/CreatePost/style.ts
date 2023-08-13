import styled from 'styled-components';
import { SKYLINE } from '../../assets';

export const StCreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 170vh;
  overflow-y: auto;
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

export const StBtnContainer = styled.div`
  display: flex;
  width: 60%;
  gap: 12px;
  margin-top: 24px;

  button {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    min-width: 70px;
  }
`;

export const StBtnBox1 = styled.div``;

export const StBtnBox2 = styled.div``;
