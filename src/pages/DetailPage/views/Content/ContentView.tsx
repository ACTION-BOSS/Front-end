import { FC } from 'react';
import { styled } from 'styled-components';
import { LocationButton, MetooButton } from '../../components';
type ContentViewProps = {};

export const ContentView: FC<ContentViewProps> = ({}) => {
  return (
    <StWrapper>
      <StButtonWrapper>
        <LocationButton />
        <MetooButton />
      </StButtonWrapper>
    </StWrapper>
  );
};

export const StWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const StButtonWrapper = styled.div`
  display: flex;
  flex: 1;

  justify-content: space-between;
`;
