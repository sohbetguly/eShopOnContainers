import { motion } from "framer-motion";
import React from "react";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { itemActions } from "../../../store/cart-slice";
import "./ProductCard.css";

function ProductCard({ id, image, price, title, isNew }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items[id]);

  const addToCartHandler = () => {
    if (cartItem) {
      const { id, image, title, price } = cartItem;
      dispatch(itemActions.add({ id, title, price, image }));
    } else {
      dispatch(itemActions.add({ id, title, price, image }));
    }
  };

  const variants = {
    open: { opacity: 1, x: 0, display: "block" },
    closed: { opacity: 0, x: "-100%", display: "none" },
  };

  return (
    <div
      className="d-flex h-100 flex-column justify-content-between border p-2 position-relative overflow-hidden"
      data-aos="flip-up"
      data-aos-delay="100"
    >
      {isNew && (
        <div className="stack-top left bg-main-color bg-gradient">Taze</div>
      )}
      <div className="position-relative ">
        <div className="d-flex align-items-center justify-content-end flex-nowrap top-0 end-0 ">
          <AiOutlineZoomIn
            onClick={() =>
              // dispatch(itemActions.modalHandler({ type: 'add', id,  }))
              dispatch(
                itemActions.modalHandler({ type: "add", id, initialSlide: 0 })
              )
            }
            className="mx-1 fs-5 cursor-pointer "
          />
          <AiOutlineHeart className="text-danger fs-5 cursor-pointer " />
        </div>
        <Link
          state={id}
          onClick={() => window.scrollTo(0, 0)}
          to={"/products/" + id}
        >
          <img src={"/img/" + image} className="img-fluid " alt={title} />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          state={id}
          className="product-cart__link"
          to={"/products/" + id}
        >
          {title}
        </Link>
      </div>
      <div>
        <hr className="main-color mx-auto text-center w-50 my-2 " />
        <div className="h4">
          <small>$</small>
          {price}
        </div>
        <motion.div animate={cartItem ? "open" : "closed"} variants={variants}>
          <Link
            to="/cart"
            onClick={(event) => {
              addToCartHandler();
            }}
            className={
              "mt-2 bg-gradient btn main-color border-main-color rounded-pill text-uppercase text-xs fw-bold  w-100"
            }
          >
            go to cart
          </Link>
        </motion.div>
        <button
          style={{
            display: cartItem ? "none" : "block",
          }}
          onClick={(event) => {
            addToCartHandler();
          }}
          className={
            "mt-2 text-center bg-gradient btn bg-main-color text-white rounded-pill text-uppercase text-xs fw-bold w-100 "
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
