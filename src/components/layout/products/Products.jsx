import React from 'react';
import {  productData } from '../../../utils/productsData';
import ProductCard from './ProductCard';

const AllProducts = () => {
  return (
    <div>
      <ul className="row search-products__lists">
        {productData.map(({ id, title, img, price }) => {
          return (
            <li key={id} className="col-lg-3 col-sm-4 col-6">
              <ProductCard
                key={id}
                id={id}
                image={img}
                title={title}
                price={price}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllProducts;
