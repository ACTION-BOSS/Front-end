import { styled } from 'styled-components';
import { LOGO_GARO } from '../../assets';
import { Theme, media } from '../../styles';

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
  z-index: 9999;
  background-color: ${Theme.colors.white};
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  ${media.tablet`
  padding: 0px 15px;
`}
`;
export const HeaderLeft = styled.div`
  display: flex;
  gap: 30px;
  .logo {
    width: 160px;
    height: 40px;
    background-image: url(${LOGO_GARO});
    cursor: pointer;
  }
  .mainMenu {
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.h2};
    cursor: pointer;
  }
`;
export const HeaderRight = styled.div`
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  gap: 20px;
  button {
    color: black;
    height: 45px;
    padding: 15px 30px;
    border: none;
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.h2};
    cursor: pointer;
  }
`;
export const PostUploadBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
`;
