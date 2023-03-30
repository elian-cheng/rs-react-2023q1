import React from 'react';
import ProductCard, { IProduct } from '../ProductCard/ProductCard';

interface IProductCardList {
  products: IProduct[];
}

const ProductCardList: React.FC<IProductCardList> = ({ products }) => {
  return (
    <>
      {products.length ? (
        <ul className="products__catalog grid">
          {products.map(
            ({
              id,
              title,
              description,
              price,
              discountPercentage,
              rating,
              stock,
              color,
              brand,
              category,
              image,
            }) => (
              <ProductCard
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                discountPercentage={discountPercentage}
                rating={rating}
                stock={stock}
                color={color}
                brand={brand}
                category={category}
                image={image}
              />
            )
          )}
        </ul>
      ) : (
        <p className="notification-message">Sorry, there are no products found</p>
      )}
    </>
  );
};

export default ProductCardList;
