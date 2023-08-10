import { styled } from 'styled-components';
import { LOGO_GARO } from '../../assets';

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
  background-color: white;
  div {
    display: flex;
    align-items: center;
  }
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  width: 160px;
  height: 40px;
  background-image: url(${LOGO_GARO});
`;
export const HeaderRight = styled.div`
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: ${(props) => props.theme.fontWeights.h2};
  gap: 20px;
  button {
    color: black;
    height: 45px;
    padding: 15px 30px;
    border: none;
    font-size: ${(props) => props.theme.fontSizes.h2};
    font-weight: ${(props) => props.theme.fontWeights.h2};
  }
`;
export const PostUploadBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
`;
