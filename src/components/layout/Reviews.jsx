import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import StarRating from './StarRating';
import './Previews.css';

const Reviews = ({ previews }) => {
  return (
    <ul className="previews__lists border">
      {previews.map(({ id, title, name, stars }) => {
        return (
          <li className="row border-top mx-2" key={id}>
            <div className="my-1">
              <StarRating stars={stars} />
            </div>
            <div className="d-flex align-items-center text-start p-0">
              <BsPersonCircle className="mx-1" />
              <h6 className="m-0 px-1 fw-bold">{name}</h6>
            </div>
            <div className="p-0">
              <p className="text-start my-1 px-1 pt-2">{title}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
