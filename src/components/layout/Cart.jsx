import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const cartItems = Object.values(items);
  return (
    <div className="mt-3">
      <h2>{totalQuantity ? 'My Cart' : 'There is no product in the cart'}</h2>
      {!!totalQuantity && (
        <div className="bg-main-color d-sm-flex d-none bg-gradient rounded d-flex align-items-center text-white py-2 px-2 mb-4">
          <h3 className="col-9 text-start m-0 ms-2">Product</h3>
          <h3 className="col-3 text-start m-0 ms-2 px-2">Price </h3>
        </div>
      )}

      <div className="border shadow rounded">
        {cartItems.map((product, index) => {
          return <CartItem key={product.id} product={product} index={index} />;
        })}
      </div>
      {totalPrice ? (
        <div className="d-flex  justify-content-between align-items-center py-2 px-4  m-3">
          <h2 className="m-0">Total price: </h2>{' '}
          <h2 className="m-0">${totalPrice}</h2>
        </div>
      ) : (
        ''
      )}

      {!!totalQuantity && (
        <button className="btn fw-bold bg-main-color text-white text-uppercase">
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
