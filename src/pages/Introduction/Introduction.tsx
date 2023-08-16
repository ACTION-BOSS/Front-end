import { FC } from 'react';
import { TextSlideView } from './views/TextSlideView';
import { StIntroduction } from './style';
import { LandingView } from './views/LandingView';
import { Footer } from './views/Footer';
import { FirstIllustSection } from './views/FirstIllustSection';
import { SecondIllustSection } from './views/SecondIllustSection';

export const Introduction: FC = () => {
  return (
    <StIntroduction>
      <LandingView />
      <TextSlideView />
      <FirstIllustSection />
      <SecondIllustSection />
      <Footer />
    </StIntroduction>
  );
};
