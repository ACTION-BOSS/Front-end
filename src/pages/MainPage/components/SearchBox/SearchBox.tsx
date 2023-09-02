import React, { FC, useCallback, useEffect, useState } from 'react';
import * as s from './SearchBoxStyle';
import { useDebouncedCallback, useSearchListQuery } from '../../hook';
import { Item } from '../../type';
import { SearchList } from './SearchList';

type SearchBoxProps = {
  mapCenterChangeHandler: (userLocation: { lat: number; lng: number }) => void;
};

export const SearchBox: FC<SearchBoxProps> = ({ mapCenterChangeHandler }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const { data } = useSearchListQuery(keyword);

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
