import Button from 'components/Button/Button';
import React, { FC, useState } from 'react';

interface ISearchForm {
  onEnterMovie: (value: string) => void;
}

const SearchForm: FC<ISearchForm> = ({ onEnterMovie }) => {
  const [search, setSearch] = useState<string>(localStorage.getItem('ElyteSearch') || '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('ElyteSearch', search);
    onEnterMovie(search);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch();
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (event.target instanceof HTMLInputElement) {
        handleSearch();
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
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
