import { FC } from 'react';
import { styled } from 'styled-components';
import { LocationButton, MetooButton } from '../../components';
type UnderButtonsViewProps = {
  address: string;
  owner: boolean;
  handleClickMetooButton: () => void;
  localMetooCount: number | null;
  localMetoo: boolean | null;
};

export const UnderButtonsView: FC<UnderButtonsViewProps> = ({
  address,
  owner = false,
  handleClickMetooButton,
  localMetooCount,
  localMetoo,
}) => {
  return (
    <StWrapper>
      <StButtonWrapper>
        <LocationButton address={address} />
        <MetooButton
          handleClickMetooButton={handleClickMetooButton}
          localMetooCount={localMetooCount}
          localMetoo={localMetoo}
        />
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
