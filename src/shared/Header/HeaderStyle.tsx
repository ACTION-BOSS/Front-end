import { styled } from 'styled-components';
import { Theme, media } from '../../styles';
import { LogoGaroIcon } from '../../assets';

export const Logo = styled(LogoGaroIcon)`
  width: 151px;
  height: 28px;
  cursor: pointer;
  ${media.mobile`
  width: 123px;
  height: 20px;
  padding-left: 10px;`}
`;
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
  padding: 10px 30px 0px;
  height: 68px;
`}
`;
export const HeaderLeft = styled.div`
  display: flex;
  gap: 30px;
  ${media.mobile`
  flex: 1;
  justify-content: space-between;
`}
  .mainMenu {
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.h2};
    cursor: pointer;
    ${media.mobile`
  display: none;
`}
  }
  .mobileIcon {
    cursor: pointer;
    display: none;
    ${media.mobile`
  display:inline;
`}
  }
`;
export const HeaderRight = styled.div`
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  gap: 20px;
  ${media.mobile`
  position: absolute;
  visibility: hidden;;
`}
  button {
    color: black;
    height: 45px;
    padding: 15px 30px;
    border: none;
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.h2};
    background-color: ${Theme.colors.blueGray};
    &:hover {
      background-color: ${Theme.colors.blueGray};
    }
    cursor: pointer;
  }
`;
export const PostUploadBtn = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
`;
