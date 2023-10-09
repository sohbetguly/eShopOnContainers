import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { itemActions } from '../store/cart-slice';
import { productDetails } from '../utils/productsData';
import './ImageModel.css';

const ImageModel = () => {
  const isActive = useSelector((state) => state.cart.isModalActive);
  const imageId = useSelector((state) => state.cart.imageId);
  const initialSlide = useSelector((state) => state.cart.initialSlide);
  const dispatch = useDispatch();
  const images = productDetails[imageId];

  // const variants = {
  //   open: { opacity: 1, x: 0, display: 'block' },
  //   closed: { opacity: 0, x: '-100%', display: 'none' },
  // };

  useEffect(() => {
    document.body.style.overflow = 'unset';
    if (isActive) {
      document.body.style.overflow = 'hidden';
    }
  }, [isActive]);

  return (
    <motion.div
      onClick={() => {
        dispatch(itemActions.modalHandler({ type: 'remove', initialSlide }));
        document.body.style.overflow = 'unset';
      }}
      className={'image-model__container'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
        className=""
        initialSlide={initialSlide}
      >
        {images?.images?.map((image) => {
          return (
            <SwiperSlide
              className="d-flex align-items-center justify-content-center"
              key={image}
            >
              <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
              >
                <img src={'/img/' + image} alt="" />
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default ImageModel;
