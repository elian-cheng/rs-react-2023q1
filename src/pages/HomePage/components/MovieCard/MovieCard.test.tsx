import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// describe('Product Card', () => {
//   let cardItem: HTMLElement;
//   const test = productData[0];
//   beforeEach(() => {
//     act(() => {
//       render(
//         <ProductCard
//           id={test.id}
//           title={test.title}
//           price={test.price}
//           discountPercentage={test.discountPercentage}
//           description={test.description}
//           rating={test.rating}
//           stock={test.stock}
//           color={test.color}
//           brand={test.brand}
//           category={test.category}
//           image={test.image}
//         />
//       );
//     });
//   });

//   it('should render the component correctly', () => {
//     cardItem = screen.getByRole('listitem');
//     expect(cardItem).toBeInTheDocument();
//   });

//   it('should render the card props correctly', () => {
//     expect(screen.getByText(test.title)).toBeInTheDocument();
//     expect(screen.getByText(test.rating.toString())).toBeInTheDocument();
//     expect(screen.getByText('$' + test.price.toString())).toBeInTheDocument();
//     expect(screen.getByText(test.stock.toString())).toBeInTheDocument();
//     expect(screen.getByText(test.brand)).toBeInTheDocument();
//     expect(screen.getByText(test.color)).toBeInTheDocument();
//     expect(
//       screen.getByText(test.category[0].toUpperCase() + test.category.slice(1))
//     ).toBeInTheDocument();
//   });
// });
