import { StFooter, StLogo } from './style';
import { LOGO_SERO } from '../../../../assets';

export const Footer = () => {
  return (
    <StFooter>
      <StLogo src={LOGO_SERO} alt="logo" />
    </StFooter>
  );
};
