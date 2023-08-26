import { FC } from 'react';
import { MyDirectIcon } from '../../../../assets';
import {
  StLocationButton,
  StLocationButtonLabel,
  StTextWrapper,
} from './LocationButtonStyle';
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
