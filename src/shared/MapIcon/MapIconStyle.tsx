import { styled } from 'styled-components';
import { media } from '../../styles';
import { ReactComponent as plus } from '../../assets/svgIcon/plus.svg';
import { ReactComponent as minus } from '../../assets/svgIcon/minus.svg';

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
  width: 20px;
  height: 20px;`};
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
    box-shadow: 0px 2px 5px 0px ${(props) => props.theme.colors.gray8};
    cursor: pointer;
    ${media.mobile`
    height: 40px;
    width: 40px;`}
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
    ${media.mobile`
    width: 38px;
    height: 85px;`}
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
