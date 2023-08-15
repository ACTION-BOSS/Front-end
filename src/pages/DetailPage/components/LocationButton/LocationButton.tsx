import { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles';
import { MyDirectIcon } from '../../../../assets';
type LocationButtonProps = {};

export const LocationButton: FC<LocationButtonProps> = ({}) => {
  return (
    <StLocationButton>
      <StLocationButtonLabel>
        <MyDirectIcon color="black" size={32} />
        <StTextWrapper>
          <p>(민원 위치)</p>
          <p>노원구 공릉동 동일로</p>
        </StTextWrapper>
      </StLocationButtonLabel>
    </StLocationButton>
  );
};

export const StLocationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 20px 12px 20px;
  border: none;
  border-radius: 100px;

  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);
`;

export const StLocationButtonLabel = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 4px;

  color: black;

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;

export const StTextWrapper = styled.div`
  display: flex;
  gap: 6px;

  font-size: ${Theme.fontSizes.body1};
  font-weight: ${Theme.fontWeights.body1};
  color: ${Theme.colors.black};
`;
