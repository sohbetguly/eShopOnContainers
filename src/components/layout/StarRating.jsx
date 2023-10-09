import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './StarRating.css';

const StarRating = ({ stars }) => {
  const rateStars = Array.from({ length: stars }, (_, index) => index + 1);
  const five = Array.from({ length: 5 }, (_, index) => index + 1);
  const textHandler = (rate) => {
    let text = rate;
    switch (text) {
      case 1:
        text = 'very bad';
        break;
      case 2:
        text = 'bad';
        break;
      case 3:
        text = 'not bad';
        break;
      case 4:
        text = 'good';
        break;
      case 5:
        text = 'very good';
        break;

      default:
        break;
    }
    return text;
  };

  return (
    <div className="row text-start">
      <div
        className="p-0"
        style={{
          width: 85,
        }}
      >
        {five.map((_, index) => {
          if (rateStars.length > index) {
            return (
              <AiFillStar
                className="star-rating__stars text-start text-warning"
                key={index}
              />
            );
          } else {
            return (
              <AiOutlineStar
                className="star-rating__stars text-start text-warning"
                key={index}
              />
            );
          }
        })}
      </div>
      <span className="col">{textHandler(rateStars.length)}</span>
    </div>
  );
};

export default StarRating;
