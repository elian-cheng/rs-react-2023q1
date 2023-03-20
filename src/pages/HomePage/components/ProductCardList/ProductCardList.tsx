import React, { Component } from 'react';
import productData from 'utils/productData';
import ProductCard, { IProduct } from '../ProductCard/ProductCard';

export default class ProductCardList extends Component {
  generateCards() {
    return productData.map((product: IProduct) => {
      return (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
          stock={product.stock}
          color={product.color}
          brand={product.brand}
          category={product.category}
          image={product.image}
        />
      );
    }) as JSX.Element[];
  }

  render() {
    return <ul className="products__catalog catalog-grid">{this.generateCards()}</ul>;
  }
}
