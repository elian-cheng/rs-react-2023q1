import React, { FC, useEffect, useRef } from 'react';

interface ISearchForm {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: FC<ISearchForm> = ({ searchValue, onSearchChange }) => {
  const savedSearch = useRef('');

  useEffect(() => {
    savedSearch.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('ElyteSearch', savedSearch.current);
    };
  }, []);

  return (
    <form action="" className="search-form">
      <input
        className="search-form__input"
        type="search"
        placeholder="Search product here..."
        value={searchValue}
        onChange={onSearchChange}
      />
    </form>
  );
};

export default SearchForm;
