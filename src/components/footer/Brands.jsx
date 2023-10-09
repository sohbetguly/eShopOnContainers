import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/core';
import { brands } from '../../utils/homeProducts';
import { Link } from 'react-router-dom';

function Brands() {
  return (
    <Splide
      aria-label="My Favorite Images"
      className="cursor-pointer px-0 py-1"
      options={{
        rewind: true,
        perPage: 10,
        gap: '1rem',
        type: 'loop',
        pagination: false,
        drag: 'free',
        autoplay: true,
        resetProgress: false,
        cover: false,
        arrows: false,
        flickPower: 60,
        perMove: 1,
        interval: 2500,
        snap: true,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          1200: { perPage: 6, gap: '.5rem' },
          800: { perPage: 4 },
          640: { perPage: 3 },
        },
      }}
    >
      {brands.map(({ id, image }) => (
        <SplideSlide key={id}>
          <Link to={'/a'}>
            <img className="img-fluid" src={image} alt="brand icon" />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Brands;
