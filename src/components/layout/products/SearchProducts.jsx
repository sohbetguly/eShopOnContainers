import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productData } from '../../../utils/productsData';
import ProductCard from './ProductCard';
import './SearchProducts.css';

const SearchProducts = () => {
  const [searchTerm] = useSearchParams();
  const term = searchTerm.get('term').toLowerCase();
  const page = +searchTerm.get('page') || 0;
  const [prods, setProds] = useState([]);
  const [products, setProducts] = useState([]);
  const [oldTerm, setOldTerm] = useState(term);

  useEffect(() => {
    setOldTerm(term);
    let uniqueProducts;
    const searchResults = productData.filter((p) =>
      p.title.toLowerCase().includes(term)
    );
    const slicedProducts = searchResults.slice(page * 24, page * 24 + 24);

    if (oldTerm !== term) {
      console.log('resetting products');
      setProds([]);
      setProducts([]);
      uniqueProducts = new Set([...slicedProducts]);
    } else {
      uniqueProducts = new Set([...products, ...slicedProducts]);
    }

    if (!term) {
      return;
    }

    setProds(searchResults);
    setProducts(Array.from(uniqueProducts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term, page]);

  console.log(prods.length - (page + 1) * 24);

  return (
    <div>
      <h2>{`${prods.length} products found`}</h2>
      <ul className="row search-products__lists">
        {products.map(({ id, title, image, price }) => {
          return (
            <li key={id} className="col-lg-3 col-sm-4 col-6">
              <ProductCard
                key={id}
                id={id}
                image={image}
                title={title}
                price={price}
              />
            </li>
          );
        })}
      </ul>
      {0 <= prods.length - (page + 1) * 24 ? (
        <Link
          className="btn bg-main-color text-white fs-4 border-rouned mt-5"
          // onClick={() => window.scrollTo(0, 0)}
          to={'/search?term=' + term + '&page=' + (page + 1)}
        >
          Load more
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default SearchProducts;
