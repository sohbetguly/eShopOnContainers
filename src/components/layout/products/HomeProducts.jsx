import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { homePage } from '../../../utils/homeProducts';

function HomeProducts() {
  return (
    <div>
      {homePage.map(({ name, products, category, link }) => {
        return (
          <div key={name}>
            <h3 className="my-3">
              <Link className="link text-dark" to={link}>
                {name}
              </Link>
            </h3>
            <ul className="row search-products__lists">
              {products.map(({ id, image, title, price }) => {
                return (
                  <li key={id} className="col-lg-3 col-sm-4 col-6">
                    <ProductCard
                      id={id}
                      image={image}
                      title={title}
                      price={price}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default HomeProducts;
