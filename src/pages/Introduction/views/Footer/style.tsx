import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StFooter = styled.div`
  width: 100vw;
  min-width: 375px;
  height: 323px;
  background-color: ${Theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
  height: 140px;
  `}

  ${media.mobile`
  height: 110px;
  `}
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
