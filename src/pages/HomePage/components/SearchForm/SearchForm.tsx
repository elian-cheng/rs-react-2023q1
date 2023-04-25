import Button from 'components/Button/Button';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { FC, useState } from 'react';
import { setSearch } from 'store/searchSlice';

interface ISearchForm {
  onEnterMovie: (value: string) => void;
}

const SearchForm: FC<ISearchForm> = ({ onEnterMovie }) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState(search);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setSearch(searchValue));
    onEnterMovie(searchValue);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (event.target instanceof HTMLInputElement) {
        onEnterMovie(searchValue);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form" data-testid="search-form">
      <input
        className="search-form__input"
        type="search"
        placeholder="Search movie here..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
