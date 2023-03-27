import React, { Component } from 'react';
import ProductCard, { IProduct } from '../ProductCard/ProductCard';

interface IProductCardList {
  products: IProduct[];
}

export default class ProductCardList extends Component<IProductCardList> {
  constructor(props: IProductCardList) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <>
        {products.length ? (
          <ul className="products__catalog grid">
            {products.map((product) => (
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
            ))}
          </ul>
        ) : (
          <p className="notification-message">Sorry, there are no products found</p>
        )}
      </>
    );
  }
}
