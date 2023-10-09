import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemActions } from '../../store/cart-slice';
import './AddToCart.css';

const AddToCart = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items[id]);
  const addToCartHandler = () => {
    dispatch(itemActions.add({ id, title, price, image }));
  };

  return (
    <div className="d-flex justify-content-center">
      {cartItem ? (
        <div className="add-to-cart__container w-100 d-flex justify-content-between mt-md-2 m-0 ">
          <button
            style={{
              fontSize: '35px',
            }}
            onClick={(event) => {
              dispatch(itemActions.remove(id));
            }}
            className="bg-gradient bg-main-color "
          >
            -
          </button>
          {cartItem.quantity}
          <button
            style={{
              fontSize: '35px',
            }}
            onClick={(event) => {
              addToCartHandler();
            }}
            className="bg-gradient bg-main-color "
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            addToCartHandler();
          }}
          className={
            'mt-2 bg-gradient btn bg-main-color text-white rounded-pill text-uppercase text-xs fw-bold  '
          }
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default AddToCart;
