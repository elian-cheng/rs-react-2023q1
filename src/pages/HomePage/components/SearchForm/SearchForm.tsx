import React, { Component } from 'react';

interface ISearchForm {
  ElyteSearch: string;
}

export default class SearchForm extends Component<object, ISearchForm> {
  constructor(props: object) {
    super(props);
    this.state = {
      ElyteSearch: localStorage.getItem('ElyteSearch') || '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillUnmount() {
    this.saveToStorage(this.state.ElyteSearch);
  }

  saveToStorage(item: string) {
    localStorage.setItem('ElyteSearch', item);
  }

  handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ElyteSearch: e.target.value });
    this.saveToStorage(e.target.value);
  }

  render(): JSX.Element {
    return (
      <form action="" className="search-form">
        <input
          className="search-form__input"
          type="search"
          placeholder="Search product here..."
          value={this.state.ElyteSearch}
          onChange={this.handleSearchChange}
        />
      </form>
    );
  }
}
