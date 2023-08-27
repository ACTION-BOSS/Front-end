import { ComponentType } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'rooks';
import { styled } from 'styled-components';
import { media } from '../../styles';

const withConfetti = (
  Component: ComponentType<{
    showConfetti?: boolean;
  }>,
) => {
  return (props: { showConfetti?: boolean }) => {
    const { innerWidth, innerHeight } = useWindowSize();

    const windowWidth = innerWidth as number | undefined;
    const windowHeight = innerHeight as number | undefined;

    if (props.showConfetti) {
      return (
        <ConfettiWrapper>
          <Confetti
            gravity={0.5}
            recycle={false}
            width={windowWidth}
            height={windowHeight}
          />
          <Component {...props} />;
        </ConfettiWrapper>
      );
    }
    return <Component {...props} />;
  };
};

const ConfettiWrapper = styled.div`
  ${media.mobile`
    width: 100%;
    height: 100%;
    border-radius:0;
  `}
`;

export default withConfetti;
