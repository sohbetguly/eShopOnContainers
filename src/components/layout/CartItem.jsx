import React from 'react';
import AddToCart from './AddToCart';
import { FaRegTrashAlt } from 'react-icons/fa';
import './CartItem.css';
import { useDispatch } from 'react-redux';
import { itemActions } from '../../store/cart-slice';

export const CartItem = ({ product, index }) => {
  const { id, title, image, price, totalPrice } = product;
  // const cartItem = useSelector((state) => state.cart.items[id]);
  const dispatch = useDispatch();
  const deleteCart = (id) => {
    dispatch(itemActions.delete(id));
  };

  return (
    <div
      className={`position-relative flex-wrap d-flex align-items-center ${
        index !== 0 ? 'border-top' : ''
      }  mt-2 p-0 p-sm-2 px-sm-4`}
    >
      <div className="col-sm-2 col-4 p-0 p-sm-2">
        <img className="img-fluid" src={'/img/sm/' + image} alt={title} />
      </div>
      <div className="col-8 col-sm-10 row">
        <div className="col-12 col-sm-8 text-right">
          <p className="m-0">{title}</p>
        </div>
        <div className="col-sm-4 col-12 flex-sm-column-reverse d-flex justify-content-evenly align-items-center mt-2 mt-sm-0">
          <AddToCart id={id} title={title} img={image} price={price} />
          <h4 className="main-color fw-bold m-0">${totalPrice}</h4>
        </div>
      </div>

      <span
        onClick={() => deleteCart(id)}
        style={{
          fontSize: '80%',
        }}
        className=" 
      cart-items__trash position-absolute top-0 end-0 me-2 mt-2 px-1"
      >
        <FaRegTrashAlt />
      </span>
      {/* <span className="badge bg-success fs-6">${price} </span> */}
    </div>
  );
};
