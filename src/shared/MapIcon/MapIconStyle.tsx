import { styled } from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .gpsIcon {
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 54px;
    box-shadow: 0px 2px 5px 0px ${(props) => props.theme.colors.gray8};
    cursor: pointer;
  }
  .mapSizeIcon {
    width: 48px;
    height: 97px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    box-shadow: 0px 2px 5px 0px ${(props) => props.theme.gray8};
  }
  .plusIcon {
    cursor: pointer;
    padding-top: 13px;
  }
  .minusIcon {
    cursor: pointer;
    padding-bottom: 13px;
  }
  .line {
    border: 1px solid ${(props) => props.theme.colors.blueGray};
    height: 1px;
    width: 100%;
  }
`;
