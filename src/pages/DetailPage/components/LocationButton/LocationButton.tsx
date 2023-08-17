import { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles';
import { MyDirectIcon } from '../../../../assets';
type LocationButtonProps = { address: string };

export const LocationButton: FC<LocationButtonProps> = ({ address }) => {
  const getFirstThreeWords = (address: string) => {
    return address.split(' ').slice(0, 3).join(' ');
  };

  return (
    <StLocationButton>
      <StLocationButtonLabel>
        <MyDirectIcon color="black" size={32} />
        <StTextWrapper>
          <p>(민원 위치)</p>
          <p>{getFirstThreeWords(address) || '주소 불러오기 실패'}</p>
        </StTextWrapper>
      </StLocationButtonLabel>
    </StLocationButton>
  );
};

export const StLocationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 100px;

  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);
`;

export const StLocationButtonLabel = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  padding: 10px;

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
