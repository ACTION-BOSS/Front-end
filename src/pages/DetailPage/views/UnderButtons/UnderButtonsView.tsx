import { FC } from 'react';
import { styled } from 'styled-components';
import { LocationButton, MetooButton } from '../../components';
type UnderButtonsViewProps = {
  address: string;
  owner: boolean;
  agree: boolean;
  agreeCount: number;
};

export const UnderButtonsView: FC<UnderButtonsViewProps> = ({
  address,
  owner = false,
  agree,
  agreeCount,
}) => {
  return (
    <StWrapper>
      <StButtonWrapper>
        <LocationButton address={address} />
        <MetooButton onClick={() => {}} agree={agree} agreeCount={agreeCount} />
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
