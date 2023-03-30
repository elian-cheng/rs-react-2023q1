import React from 'react';

interface ISearchForm {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<ISearchForm> = ({ searchValue, onSearchChange }) => {
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
