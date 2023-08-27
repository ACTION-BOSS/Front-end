import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StFooter = styled.div`
  width: 100vw;
  min-width: 375px;
  height: 35vh;
  background-color: ${Theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StLogo = styled.img`
  width: 179px;
  height: 93px;

  ${media.tablet`
  width: 104px;
  height: 54px;
  `}

  ${media.mobile`
    
  `}
`;
