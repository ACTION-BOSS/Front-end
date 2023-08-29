import { styled } from 'styled-components';
import { media } from '../../styles';

export const StIntroduction = styled.div`
  width: 100vw;
  height: 3231px;
  display: flex;
  flex-direction: column;
  min-width: 375px;

  ${media.tablet`
  height: 2047px;
  `}

  ${media.mobile`
  height: 2100px;
  `}
`;
