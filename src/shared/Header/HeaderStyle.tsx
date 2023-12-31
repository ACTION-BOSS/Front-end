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
  height: 84px;
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
  ${media.mobile`
  padding: 10px 30px 0px;
  height: 68px;
`}
`;
export const HeaderLeft = styled.div<{ $userLocation: string }>`
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
    color: ${({ $userLocation }) =>
      $userLocation === '/main' ? Theme.colors.pink : Theme.colors.black};
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
  font-size: ${Theme.fontSizes.h3};
  font-weight: ${Theme.fontWeights.h3};
  gap: 40px;
  ${media.tablet`
  gap: 20px;`}
  ${media.bigMobile`
  .text{
    display: none;
  }
  `}
  ${media.mobile`
  position: absolute;
  visibility: hidden;
`}
  .headerLine {
    border-right: 1px solid ${Theme.colors.gray1};
    height: 30px;
  }
  button {
    color: black;
    height: 45px;
    border: none;
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.h2};
    cursor: pointer;
    padding: 0px;
    &:hover {
      background-color: ${Theme.colors.white};
    }
  }
`;
export const Notification = styled.div<{ $openNotificationModal: boolean }>`
  cursor: pointer;
  display: flex;
  gap: 5px;
  color: ${({ $openNotificationModal }) =>
    $openNotificationModal ? Theme.colors.pink : Theme.colors.black};
`;

export const Mypage = styled.div<{ $userLocation: string }>`
  cursor: pointer;
  display: flex;
  gap: 5px;
  color: ${({ $userLocation }) =>
    $userLocation === '/mypage' ? Theme.colors.pink : Theme.colors.black};
`;
export const CreatePost = styled.div<{ $userLocation: string }>`
  cursor: pointer;
  display: flex;
  gap: 5px;
  color: ${({ $userLocation }) =>
    $userLocation === '/create' ? Theme.colors.pink : Theme.colors.black};
`;
