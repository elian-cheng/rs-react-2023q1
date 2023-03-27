import React, { Component } from 'react';
import productData from 'utils/productData';
import { IProduct } from './components/ProductCard/ProductCard';
import ProductCardList from './components/ProductCardList/ProductCardList';
import SearchForm from './components/SearchForm/SearchForm';
interface IHomePage {
  search: string;
  products: IProduct[];
}

export default class HomePage extends Component<object, IHomePage> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: localStorage.getItem('ElyteSearch') || '',
      products: productData,
    };
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, search: event.target.value });
  };

  componentWillUnmount() {
    localStorage.setItem('ElyteSearch', this.state.search);
  }

  render() {
    const { search } = this.state;
    let { products } = this.state;

    if (search) {
      products = products.filter((product) =>
        Object.values(product).join('').toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    return (
      <>
        <div className="home__top">
          <h2>Catalog</h2>
          <SearchForm onSearchChange={this.handleSearch} searchValue={search} />
        </div>
        <ProductCardList products={products} />
      </>
    );
  }
}
