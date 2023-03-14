import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ProductCardList from './ProductCardList';
import productData from 'utils/productData';

describe('Product Card list', () => {
  let list: HTMLElement;
  beforeEach(() => {
    render(<ProductCardList />);
    list = screen.getByRole('list');
  });

  it('should render the component correctly', () => {
    expect(list).toBeInTheDocument();
  });

  it('should render a correct number of Product Cards', () => {
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(productData.length);
  });
});
