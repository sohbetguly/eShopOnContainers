import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData, productDetails } from "../../utils/productsData";
import ProductCard from "./products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../store/cart-slice";

const Categories = () => {
  const [prods, setProds] = useState([]);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [page, setPage] = useState(0);
  const [categ, setCateg] = useState(category);
  const checkedList = useSelector((state) => state.cart.checkedList);

  const dispatch = useDispatch();

  useEffect(() => {
    setCateg(category);
    let uniqueProducts;

    const categoryProducts = productData.filter((p) => p.category === category);
    const specificationMatch = checkedList.includes("KINGSTON");
    const filteredProducts = categoryProducts.filter((p) => p.id);
    const selectedDetails = [];
    const slicedProducts = categoryProducts.slice(page * 24, page * 24 + 24);
    const obj = {};
    console.log(categoryProducts);

    categoryProducts.map(({ id, brand }) => {
      const specifications = productDetails[id]?.specifications;
      const filteredProds = [];
      if (typeof obj.Brand === "object") {
        if (!obj.Brand.includes(brand)) {
          obj.Brand.push(brand);
        }
      } else {
        obj.Brand = [brand];
      }
      if (specifications) {
        specifications?.map((d) => {
          const [splittedTitle, splittedDetail] = d.split(":");
          const title = splittedTitle?.trim();
          const detail = splittedDetail?.trim();
          // console.log(title);
          // console.log(detail);
          if (
            [
              "volume",
              "memory capacity",
              "Connection interface version",
            ].includes(title.toLowerCase())
          ) {
            console.log(checkedList.includes("8 GB"));

            if (typeof obj[title] === "object") {
              if (!obj[title].includes(detail)) {
                obj[title].push(detail);
              }
            } else {
              obj[title] = [detail];
              if (checkedList.includes(detail)) {
                selectedDetails.push(detail);
              }
            }
          }
          return "hello";
        });
      }
      return "hello";
    });

    // console.log(obj);
    console.log(selectedDetails);
    dispatch(itemActions.specificationsHandler(obj));

    if (categ !== category) {
      setPage(0);
      setProducts([]);
      uniqueProducts = new Set([...slicedProducts]);
    } else {
      uniqueProducts = new Set([...products, ...slicedProducts]);
    }
    setProds(categoryProducts);
    setProducts(Array.from(uniqueProducts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, category, categ]);

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
        <button
          className="btn bg-main-color text-white fs-4 border-rouned mt-5"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load more
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Categories;
