import React, { useState, useEffect } from 'react';
import productData from 'utils/productData';
import { IProduct } from './components/ProductCard/ProductCard';
import ProductCardList from './components/ProductCardList/ProductCardList';
import SearchForm from './components/SearchForm/SearchForm';

const HomePage: React.FC = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem('ElyteSearch') || '');
  const [products, setProducts] = useState<IProduct[]>(productData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('ElyteSearch', search);
    const filteredProducts = productData.filter((product) =>
      Object.values(product).join('').toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setProducts(filteredProducts);
  }, [search]);

  return (
    <>
      <div className="home__top">
        <h2>Catalog</h2>
        <SearchForm onSearchChange={handleSearch} searchValue={search} />
      </div>
      <ProductCardList products={products} />
    </>
  );
};

export default HomePage;
