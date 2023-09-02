import { FC } from 'react';
import * as s from './SearchBoxStyle';
import { Item } from '../../type';

type SearchListProps = {
  keyword: string;
  item: Item;
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void;
  inputValueInitialization: () => void;
};

export const SearchList: FC<SearchListProps> = ({
  keyword,
  item,
  mapCenterChangeHandler,
  inputValueInitialization,
}) => {
  const { address, latitude, longitude } = item;
  const text = address.split(keyword);

  const onClickMove = () => {
    mapCenterChangeHandler({ lat: latitude, lng: longitude });
    inputValueInitialization();
  };
  return (
    <s.SearchList onClick={onClickMove}>
      {text[0]}
      <span>{keyword}</span>
      {text[1]}
    </s.SearchList>
  );
};
