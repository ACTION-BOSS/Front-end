import { styled } from 'styled-components';
import { media } from '../../styles';
import { ReactComponent as plus } from '../../assets/svgIcon/plus.svg';
import { ReactComponent as minus } from '../../assets/svgIcon/minus.svg';
import { ReactComponent as gps } from '../../assets/svgIcon/GPS.svg';

export const PlusIcon = styled(plus)`
  width: 24px;
  height: 24px;
  ${media.mobile`
  width: 20px;
  height: 20px;`}
`;
export const MinusIcon = styled(minus)`
  width: 24px;
  height: 24px;
  ${media.mobile`
  width: 18px;
  height: 18px;`};
`;
export const GPSIcon = styled(gps)`
  width: 24px;
  height: 24px;
  ${media.mobile`
  width: 18px;
  height: 18px;`};
`;

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
    box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.3);
    cursor: pointer;
    ${media.mobile`
    height: 35px;
    width: 36px;`}
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
    box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.3);
    ${media.mobile`
    width: 32px;
    height: 80px;`}
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
