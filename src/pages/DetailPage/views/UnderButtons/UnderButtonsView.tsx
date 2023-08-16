import { FC } from 'react';
import { styled } from 'styled-components';
import { LocationButton, MetooButton } from '../../components';
type UnderButtonsViewProps = { address: string; owner: boolean };

export const UnderButtonsView: FC<UnderButtonsViewProps> = ({
  address,
  owner = false,
}) => {
  const metooCount = 12;

  return (
    <StWrapper>
      <StButtonWrapper>
        <LocationButton address={address} />
        <MetooButton onClick={() => {}} metooCount={metooCount} />
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
