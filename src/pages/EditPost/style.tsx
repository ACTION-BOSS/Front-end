import styled from 'styled-components';
import { SKYLINE } from '../../assets';

export const StEditPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  margin-top: 85px;
`;

export const StBg = styled.div`
  z-index: -1;
  position: fixed;
  margin-top: 48.5vh;
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

export const StBtnBox1 = styled.div`
  width: 104px;
`;

export const StBtnBox2 = styled.div`
  width: 139px;
`;

export const StAddressContainer = styled.div`
  width: 60vw;
  display: flex;
`;
export const StIconText = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: 100rem;
  padding: 10px 23px 10px 20px;
  gap: 5px;
  background-color: white;
`;
export const StAddressText = styled.div``;
