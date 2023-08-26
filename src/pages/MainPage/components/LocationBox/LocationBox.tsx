import React from 'react';
import * as s from './LocationBoxStyle';
import { MyDirectIcon } from '../../../../assets';

export const LocationBox = () => {
  return (
    <s.LocationBox>
      <div>
        <MyDirectIcon size={24} />
      </div>
      <div>지번주소 구,동까지</div>
    </s.LocationBox>
  );
};
