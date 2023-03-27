import React, { Component } from 'react';

interface ISearchForm {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class SearchForm extends Component<ISearchForm> {
  constructor(props: ISearchForm) {
    super(props);
  }

  render() {
    return (
      <form action="" className="search-form">
        <input
          className="search-form__input"
          type="search"
          placeholder="Search product here..."
          value={this.props.searchValue}
          onChange={this.props.onSearchChange}
        />
      </form>
    );
  }
}
