import { ComponentType } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'rooks';

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
        <div>
          <Confetti
            gravity={0.5}
            recycle={false}
            width={windowWidth}
            height={windowHeight}
          />
          <Component {...props} />;
        </div>
      );
    }
    return <Component {...props} />;
  };
};

export default withConfetti;
