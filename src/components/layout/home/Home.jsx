import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import HomeProducts from '../products/HomeProducts';
import { Link } from 'react-router-dom';
import { sliders } from '../../../utils/homeProducts';
// import Products from "./Products";

function Home() {
  return (
    <React.Fragment>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        // style={{ height: '480px' }}
        // style={{ height: 'auto', width: '100%' }}
        className="zoom-container"
      >
        {sliders.mainSliders.map(({ image, link }) => (
          <SwiperSlide key={image}>
            <Link to={link}>
              <img className="img-fluid" src={image} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={4}
        slidesPerView={4}
        autoplay={{
          reverseDirection: true,
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="mt-1"
      >
        {sliders.brands.map(({ image, link }) => (
          <SwiperSlide key={image}>
            <Link to={link}>
              <img src={image} alt="" className="img-fluid" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <HomeProducts />
    </React.Fragment>
  );
}

export default Home;
