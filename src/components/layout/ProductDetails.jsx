import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productDetails } from '../../utils/productsData';
import AddToCart from './AddToCart';
import './ProductDetails.css';
import Reviews from './Reviews';
import { itemActions } from '../../store/cart-slice';

const ProductDetails = () => {
  const { productId: id } = useParams();
  const dispatch = useDispatch();
  const { title, price, images, shortDescription, specifications, descImage } =
    productDetails[id];

  const cartItem = useSelector((state) => state.cart.items[id]);
  // const [image, setImage] = useState(img);

  const productPrice = cartItem?.quantity ? cartItem?.quantity * +price : price;

  // const images = [
  //   {
  //     id: '00',
  //     img: require('../../images/product-icons/APPLIANCES/EHy4HS9uNAANpx9V8pK8.jpg'),
  //   },
  //   {
  //     id: '01',
  //     img: require('../../images/product-icons/APPLIANCES/jmKCsE8z9piYnFvDzesy.jpg'),
  //   },
  //   {
  //     id: '02',
  //     img: require('../../images/product-icons/APPLIANCES/JyYuGsJ49CMo3WkNhZZJ.jpg'),
  //   },
  //   {
  //     id: '03',
  //     img: require('../../images/product-icons/APPLIANCES/lrCDWkltHGvS1cP3BCGI.jpg'),
  //   },
  //   // {
  //   //   id: '04',
  //   //   img: require('../../images/1-TYAzzTJ60x-qg5N81ElU9A.png'),
  //   // },
  //   // {
  //   //   id: '05',
  //   //   img: require('../../images/DSC_0208.JPG'),
  //   // },
  //   // {
  //   //   id: '06',
  //   //   img: require('../../images/DSC06931 — копия.JPG'),
  //   // },
  // ];

  const modelHandler = (id, initialSlide) => {
    dispatch(itemActions.modalHandler({ type: 'add', id, initialSlide }));
  };

  const extraInfo = ['Detailed Info', 'Description', 'Reviews'];
  const [isActive, setIsActive] = useState('Detailed Info');
  const previews = [
    {
      id: 'ladkjfoaeirj3ioruw0495ri4te',
      name: 'John',
      stars: 5,
      title: 'This product is very good',
    },
    {
      id: 'jfoi3yihtasep9r0382ufejwi',
      name: 'Peter',
      stars: 4,
      title: 'This product is okay. I am not sure if I would buy it again.',
    },
    {
      id: 'nfi834o4kjgowasg43g5',
      name: 'Randy Ortan',
      stars: 5,
      title: 'The quality of product is very good',
    },
    {
      id: 'Ky93j4ghIY-4e0gojp9',
      name: 'Parker',
      stars: 5,
      title: 'This product is Perfect',
    },
  ];

  return (
    <div className="d-flex flex-column bg-white shadow rounded py-2">
      <div className="d-flex flex-sm-row flex-column col-12 ">
        <div className="col-12 col-sm-6">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            className="mt-1 zoom-container"
          >
            {images.map((img, i) => (
              <SwiperSlide
                onClick={() => modelHandler(id, i)}
                className="border m-0 cursor-pointer"
                key={img}
              >
                <img
                  style={{
                    height: 400,
                    objectFit: 'contain',
                  }}
                  src={'/img/sm/' + img}
                  alt="Hello"
                  className="img-fluid "
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex">
            {images.map((img, i) => (
              <div
                onClick={() => modelHandler(id, i)}
                className="m-1 cursor-pointer"
                key={img}
              >
                <img
                  style={{
                    maxHeight: 70,
                  }}
                  src={'/img/xs/' + img}
                  alt="Hello"
                  className="img-thumbnail "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-sm-6 text-start p-3">
          <h5>{title}</h5>
          <p className="mt-2">{shortDescription}</p>
          <div className="d-flex align-items-center">
            <span className="badge fs-5 bg-success bg-gradient mt-md-2 me-2 m-0">
              ${productPrice.toFixed(2)}
            </span>
            <div className="ps-3">
              <AddToCart
                id={id}
                title={title}
                image={images[0]}
                price={price}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-4 bg-gradient">
        <div className="row  text-center justify-content-evenly">
          {extraInfo.map((info) => {
            return (
              <button
                key={info}
                onClick={() => setIsActive(info)}
                className={`btn border product-details__extra-button bg-gradient my-2 col-5 col-sm-3 ${
                  info === isActive ? 'bg-main-color text-white' : ''
                }`}
              >
                {info}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: isActive === 'Detailed Info' ? 'block' : 'none',
          }}
          className="mt-2"
        >
          <div className="product-details__table">
            {specifications.map((detail) => {
              const [title, value] = detail.split(':');
              return (
                <div key={detail} className="d-flex mx-3 text-start">
                  <div className="col-4 border px-1 ps-2 fw-bold">{title}</div>
                  <div className="col-8 border px-1 ps-2">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: isActive === 'Description' ? 'block' : 'none',
          }}
          className="m-1"
        >
          <p className="px-3 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            saepe enim laboriosam ullam tempora eum corrupti modi iure illum
            optio, dolore quidem ab natus earum voluptas perferendis dolor fugit
            vero pariatur? Recusandae aliquid suscipit quibusdam corrupti eius
            aspernatur qui odio aperiam quo. Est possimus, voluptatibus facere
            harum dolorum repellendus dolorem.
          </p>
          <img className="img-fluid" src={descImage} alt="description" />
        </div>
        <div
          style={{
            display: isActive === 'Reviews' ? 'block' : 'none',
          }}
        >
          <Reviews previews={previews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
