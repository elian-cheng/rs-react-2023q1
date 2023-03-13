import React, { Component } from 'react';
import ProductCardList from './components/ProductCardList/ProductCardList';
import SearchForm from './components/SearchForm/SearchForm';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="home__top">
          <h2>Home</h2>
          <SearchForm />
        </div>
        <ProductCardList />
      </>
    );
  }
}
