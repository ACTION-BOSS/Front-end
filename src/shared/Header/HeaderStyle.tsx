import { styled } from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  display: flex;
  box-sizing: border-box;
  padding: 0px 40px;
  box-shadow: 0 4px 4px -4px gray;
  z-index: 999;
  div {
    display: flex;
    align-items: center;
  }
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  width: 165px;
  height: 45px;
  background-color: #d9d9d9;
`;
export const HeaderRight = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  gap: 30px;
  button {
    color: black;
    font-size: 1.1rem;
    height: 45px;
    padding: 15px 30px;
  }
`;
export const PostUploadBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  .box {
    width: 25px;
    height: 25px;
    background-color: #d9d9d9;
  }
`;
