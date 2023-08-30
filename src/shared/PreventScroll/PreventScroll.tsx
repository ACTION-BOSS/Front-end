import { ComponentType } from 'react';
import Confetti from 'react-confetti';
import { useDidMount, useWillUnmount, useWindowSize } from 'rooks';
import { styled } from 'styled-components';
import { media } from '../../styles';

const withPreventScroll = (
  Component: ComponentType<{
    preventScroll?: boolean;
  }>,
) => {
  return (props: { preventScroll?: boolean }) => {
    const { innerWidth, innerHeight } = useWindowSize();

    const windowWidth = innerWidth as number | undefined;
    const windowHeight = innerHeight as number | undefined;

    useDidMount(() => {
      document.body.style.overflow = 'hidden';
    });

    useWillUnmount(() => {
      document.body.style.overflow = 'scroll';
    });

    if (props.preventScroll) {
      return (
        <ConfettiWrapper>
          <Confetti
            gravity={0.6}
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

export default withPreventScroll;
