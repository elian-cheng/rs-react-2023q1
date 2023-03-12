import React, { Component } from 'react';
import SearchForm from './components/SearchForm/SearchForm';

export default class HomePage extends Component {
  render() {
    return (
      <div className="catalog__wrapper">
        <SearchForm />
      </div>
    );
  }
}
