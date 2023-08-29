import { FC } from 'react';
import { MyDirectIcon } from '../../../../assets';
import {
  StLocationButton,
  StLocationButtonLabel,
  StLocationDetailText,
  StLocationText,
  StTextWrapper,
} from './LocationButtonStyle';
import { useWindowSize } from 'rooks';
import { Theme } from '../../../../styles';
type LocationButtonProps = { address: string };

export const LocationButton: FC<LocationButtonProps> = ({ address }) => {
  const { innerWidth } = useWindowSize();
  const isMobileView = innerWidth! < 576;
  const getFirstThreeWords = (address: string) => {
    return address.split(' ').slice(0, 3).join(' ');
  };

  return (
    <StLocationButton>
      <StLocationButtonLabel>
        <MyDirectIcon
          color={Theme.colors.gray7}
          size={isMobileView ? 18 : 32}
        />
        <StTextWrapper>
          <StLocationText>(위치)</StLocationText>
          <StLocationDetailText>
            {getFirstThreeWords(address) || '주소 불러오기 실패'}
          </StLocationDetailText>
        </StTextWrapper>
      </StLocationButtonLabel>
    </StLocationButton>
  );
};
