import React, { FC } from 'react';
import * as s from './LocationBoxStyle';
import { MyDirectIcon } from '../../../../assets';
import { useLocationAddress } from '../../hook';

type LocationBoxProps = {
  mapCenter: {
    lat: number;
    lng: number;
  };
};

export const LocationBox: FC<LocationBoxProps> = ({ mapCenter }) => {
  const address = useLocationAddress(mapCenter);

  return (
    <s.LocationBox>
      <div>
        <MyDirectIcon size={24} />
      </div>
      <div>{address}</div>
    </s.LocationBox>
  );
};
