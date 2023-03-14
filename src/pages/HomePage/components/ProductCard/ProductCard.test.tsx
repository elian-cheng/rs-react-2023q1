import React from 'react';
import { render, screen } from '@testing-library/react';
import productData from 'utils/productData';
import ProductCard from './ProductCard';

describe('Product Card', () => {
  let cardItem: HTMLElement;
  const test = productData[0];
  beforeEach(() => {
    render(
      <ProductCard
        id={test.id}
        title={test.title}
        price={test.price}
        discountPercentage={test.discountPercentage}
        description={test.description}
        rating={test.rating}
        stock={test.stock}
        color={test.color}
        brand={test.brand}
        category={test.category}
        image={test.image}
      />
    );
  });

  it('should render component correctly', () => {
    cardItem = screen.getByRole('listitem');
    expect(cardItem).toBeInTheDocument();
  });

  it('should render card props correctly', () => {
    expect(screen.getByText(test.title)).toBeInTheDocument();
    expect(screen.getByText(test.rating.toString())).toBeInTheDocument();
    expect(screen.getByText('$' + test.price.toString())).toBeInTheDocument();
    expect(screen.getByText(test.stock.toString())).toBeInTheDocument();
    expect(screen.getByText(test.brand)).toBeInTheDocument();
    expect(screen.getByText(test.color)).toBeInTheDocument();
    expect(
      screen.getByText(test.category[0].toUpperCase() + test.category.slice(1))
    ).toBeInTheDocument();
  });
});
