import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const HeaderMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: var(--deem, rgba(41, 47, 61, 0.4));
  backdrop-filter: blur(4px);
  z-index: 99999;
`;
export const MenuText = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 60px;
  flex-direction: column;
  top: 80px;
  right: 85px;
  color: ${Theme.colors.white};
  font-size: ${Theme.fontSizes.h3};
  font-weight: ${Theme.fontWeights.h3};
  text-align: right;
`;
export const MenuIcon = styled.div`
  position: fixed;
  width: 52px;
  height: 172px;
  background-color: ${Theme.colors.white};
  border-radius: 100px;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);
  top: 5px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  div {
    cursor: pointer;
  }
  .HeaderMenuIcon {
    display: flex;
    justify-content: center;
    width: 35px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Theme.colors.gray2};
  }
`;
