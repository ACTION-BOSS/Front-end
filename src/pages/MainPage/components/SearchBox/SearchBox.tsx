import React, { useState } from 'react';
import * as s from './SearchBoxStyle';
import axios from 'axios';

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');

  // const { data, isLoading, error } = useSearchListQuery(inputValue);
  // data && console.log(data);

  // const debounce = (callback: any, duration: any) => {
  //   let timer: any;
  //   return (...args: any) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => callback(...args), duration);
  //   };
  // };

  // const onChangeInput = useCallback(
  //   (e: any) => {
  //     debounce(setInputValue(e.target.value), 500);
  //   },
  //   [inputValue],
  // );

  const onChangeInput = (e: any) => {
    setInputValue(e.target.value);
  };
  const go = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URI}/api/search/example?keyword=${inputValue}`,
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <s.SearchBox>
      <s.SearchBoxInput>
        <div onClick={go}>
          <s.Magnifier />
        </div>
        <s.SearchInput
          placeholder="궁금한 지역을 검색해보세요"
          value={inputValue}
          onChange={onChangeInput}
        />
      </s.SearchBoxInput>
      <s.SearchBoxList>
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <SearchList key={index} />
          ))}
      </s.SearchBoxList>
    </s.SearchBox>
  );
};

export const SearchList = () => {
  return <s.SearchList>사당역 2호선, 4호선</s.SearchList>;
};
