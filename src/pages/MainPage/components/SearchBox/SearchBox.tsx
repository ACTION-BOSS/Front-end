import React, { FC, useCallback, useEffect, useState } from 'react';
import * as s from './SearchBoxStyle';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../../api';

type Item = {
  address: string;
  latitude: number;
  longitude: number;
};
type SearchBoxProps = {
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void;
};

export const SearchBox: FC<SearchBoxProps> = ({ mapCenterChangeHandler }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const { data, isLoading, error } = useQuery(
    ['searchList', keyword],
    async () => {
      try {
        const response = await api.get(`/search?keyword=${keyword}`);
        return response.data;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  );

  const useDebouncedCallback = (callback: Function, duration: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), duration);
    };
  };

  const debouncedSetKeyword = useCallback(
    useDebouncedCallback((value: string) => {
      setKeyword(value);
    }, 500),
    [],
  );

  useEffect(() => {
    debouncedSetKeyword(inputValue);
  }, [inputValue]);

  const inputValueInitialization = () => {
    setInputValue('');
    setKeyword('');
  };

  return (
    <s.SearchBox>
      <s.SearchBoxInput>
        <div>
          <s.Magnifier />
        </div>
        <s.SearchInput
          placeholder="궁금한 지역을 검색해보세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </s.SearchBoxInput>
      <s.SearchBoxList>
        {data &&
          data.data.map((item: Item, index: number) => (
            <SearchList
              key={index}
              item={item}
              mapCenterChangeHandler={mapCenterChangeHandler}
              inputValueInitialization={inputValueInitialization}
              keyword={keyword}
            />
          ))}
      </s.SearchBoxList>
    </s.SearchBox>
  );
};

interface SearchListProps {
  item: Item;
  keyword: string;
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void;
  inputValueInitialization: () => void;
}

export const SearchList: FC<SearchListProps> = ({
  item,
  keyword,
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
