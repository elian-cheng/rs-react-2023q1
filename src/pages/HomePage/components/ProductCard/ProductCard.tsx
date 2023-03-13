import React, { Component } from 'react';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  color: string;
  brand: string;
  category: string;
  image: string;
}

export default class ProductCard extends Component<IProduct> {
  constructor(props: IProduct) {
    super(props);
  }
  render() {
    const { title, price, discountPercentage, rating, stock, color, brand, category, image } =
      this.props;
    return (
      <li className="products__item catalog-grid__product">
        <div className="products__body catalog-grid__body">
          <div className="product__image catalog-grid__image">
            <img src={require(`../../../../assets/images/products/${image}.jpg`)} alt={title} />
          </div>
          <div className="product__rating catalog-grid__product-rating">{rating.toFixed(2)}</div>
          <div className="product__info catalog-grid__product-info">
            <p className="product__name catalog-grid__product-name">{title}</p>
            <div className="product__category-brand catalog-grid__product-category-brand">
              <span className="product__brand catalog-grid__product-brand">{brand}</span>
              <span className="product__category catalog-grid__product-category">
                {category[0].toUpperCase() + category.slice(1)}
              </span>
            </div>
            <div className="product__price catalog-grid__product-price">
              <span className="product-info__actual-price actual-price">
                $
                {discountPercentage
                  ? (price - price * (Math.round(discountPercentage) / 100)).toFixed(2)
                  : price.toFixed(2)}
              </span>
              <span className="product__old-price old-price">
                {discountPercentage ? '$' + price.toFixed(2) : ''}
              </span>
            </div>
            <div className="product__color-stock catalog-grid__product-color-stock">
              <p className="product__color-name catalog-grid__product-color-name">
                Color:
                <span className="product__color catalog-grid__product-color"> {color}</span>
              </p>
              <p className="product__stock-name catalog-grid__product-stock-name">
                In stock:
                <span className="product__stock catalog-grid__product-stock"> {stock}</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
