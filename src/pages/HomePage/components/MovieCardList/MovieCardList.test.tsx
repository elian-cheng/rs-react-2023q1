import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// describe('Product Card list', () => {
//   let list: HTMLElement;
//   beforeEach(() => {
//     act(() => {
//       render(<ProductCardList products={productData} />);
//     });
//     list = screen.getByRole('list');
//   });

//   it('should render the component correctly', () => {
//     expect(list).toBeInTheDocument();
//   });

//   it('should render a correct number of Product Cards', () => {
//     const { getAllByRole } = within(list);
//     const items = getAllByRole('listitem');
//     expect(items.length).toBe(productData.length);
//   });
// });
