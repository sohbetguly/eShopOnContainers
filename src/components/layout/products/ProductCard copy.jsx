import React from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineZoomIn } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { itemActions } from '../../../store/cart-slice';

function ProductCard({ image, price, title, isNew }) {
  const dispatch = useDispatch();

  const addToCartHandler = (par) => {
    dispatch(itemActions.add(par));
  };

  return (
    <div className="border p-2 position-relative overflow-hidden">
      {isNew && (
        <div className="stack-top left bg-main-color bg-gradient">Taze</div>
      )}
      <div className="position-relative ">
        <div className="d-flex align-items-center justify-content-end flex-nowrap top-0 end-0 ">
          {/* <div className="p-sm-0 p-lg-1 px-lg-2 py-1 px-2 border rounded bg-sm-white bg-white check-diff ">
            <Form.Check type="checkbox" id={image}>
              <Form.Check.Input
                type="checkbox"
                isInvalid
                className="check-diff "
              />
              <Form.Check.Label
                className="cursor-pointer text-dark"
                htmlFor={image}
              >
                Deňeşdirmek
              </Form.Check.Label>
            </Form.Check>
          </div> */}
          <AiOutlineZoomIn className="mx-1 fs-5 cursor-pointer " />
          <AiOutlineHeart className="text-danger fs-5 cursor-pointer " />
        </div>
        <Link to="/">
          <img src={image} className="img-fluid " alt="" />
        </Link>
        <Link className="product-cart__link" href="/">
          {title}
        </Link>
        <hr className="text-danger w-50 my-2 " />
        <div className="h6">
          {price} <small>TMT</small>
        </div>
      </div>
      <button
        onClick={() => addToCartHandler('Hello')}
        className={
          'xs-text bg-gradient btn bg-main-color text-white rounded-pill text-uppercase text-xs fw-bold  '
        }
      >
        Sebete goş
      </button>
    </div>
  );
}

export default ProductCard;
