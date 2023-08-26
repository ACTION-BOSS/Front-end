import styled from 'styled-components';

export const StModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const StModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  inset: 0px;
  position: absolute;
  opacity: 0.3;
  background-color: black;
  z-index: -1;
`;

export const StModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  width: 31vw;
  min-width: 300px;
  min-height: 150px;
  height: 40vh;
  border-radius: 24px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

export const StButtonContainer = styled.div`
  display: flex;
  width: 70%;
  gap: 24px;
  margin-top: 15%;
`;
