import Button from 'components/Button/Button';
import React, { FC, useEffect, useRef, useState } from 'react';

interface ISearchForm {
  onEnterMovie: (value: string) => void;
}

const SearchForm: FC<ISearchForm> = ({ onEnterMovie }) => {
  const [search, setSearch] = useState<string>(localStorage.getItem('ElyteSearch') || '');
  const savedSearch = useRef('');

  useEffect(() => {
    savedSearch.current = search;
  }, [search]);

  useEffect(() => {
    return () => {
      localStorage.setItem('ElyteSearch', savedSearch.current);
    };
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onEnterMovie(search);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (event.target instanceof HTMLInputElement) {
        onEnterMovie(event.target.value);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-form__input"
        type="search"
        placeholder="Search movie here..."
        value={search}
        onChange={handleSearch}
        onKeyDown={handleEnter}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
