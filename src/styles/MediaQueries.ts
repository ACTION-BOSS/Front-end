import { css } from 'styled-components';

export const media = {
  mobile: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${(props) => props.theme.media.mobile}) {
      ${css(...args)}
    }
  `,
  tablet: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${(props) => props.theme.media.tablet}) {
      ${css(...args)}
    }
  `,
};
