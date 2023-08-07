import styled from 'styled-components';

export const StModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.9;
  background-color: rgb(221, 221, 221);
`;

export const StModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: white;
  width: 40vw;
  height: 40vh;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const StButtonContainer = styled.div`
  display: flex;
  width: 60%;
  gap: 20px;

  margin-top: 50px;
`;
