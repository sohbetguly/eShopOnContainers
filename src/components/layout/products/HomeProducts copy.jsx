import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { AiFillCaretRight } from 'react-icons/ai';
import { products } from '../../../utils/productsData';
import ProductCard from './ProductCard';
import styles from './Products.module.css';

function HomeProducts() {
  const [active, setActive] = useState('#reccommendedTab');

  return (
    <div>
      <Nav
        className="text-uppercase justify-content-center fw-bold py-1"
        onSelect={(selectedKey) => setActive(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link
            className={`${
              active === '#reccommendedTab' && styles.activeLink
            } text-dark fs-5`}
            eventKey="#reccommendedTab"
          >
            Maslahat berilýänler
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`${
              active === '#newsTab' && styles.activeLink
            } text-dark fs-5`}
            eventKey="#newsTab"
          >
            Täzeler
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`${
              active === '#popularTab' && styles.activeLink
            } text-dark fs-5`}
            eventKey="#popularTab"
          >
            Meşhurlar
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div
        id="#hemmesi"
        className="d-flex justify-content-end align-items-center py-1 text-muted "
      >
        <AiFillCaretRight />
        <a
          className={'text-decoration-none text-dark ' + styles.hoverRed}
          href="#hemmesi"
        >
          Hemmesi
        </a>
      </div>
      <div className={`row ${active !== '#reccommendedTab' ? 'd-none' : ''}`}>
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'recommended') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
      <div className={`row ${active !== '#newsTab' ? 'd-none' : ''}`}>
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'new') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
      <div className={`row ${active !== '#popularTab' ? 'd-none' : ''}`}>
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'popular') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>

      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            'text-uppercase fw-bold text-decoration-none text-dark ' +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          Noutbuklar
        </a>
      </div>
      <div className="row">
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'laptops') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            'text-uppercase fw-bold text-decoration-none text-dark ' +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          PK DÜZÜJILERI
        </a>
      </div>
      <div className="row">
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'pcAccessories') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            'text-uppercase fw-bold text-decoration-none text-dark ' +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          PERIFERIÝALAR
        </a>
      </div>
      <div className="row">
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'peripherias') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            'text-uppercase fw-bold text-decoration-none text-dark ' +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          DURLI MOBIL PEREFERIÝALARY
        </a>
      </div>
      <div className="row">
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'differentMobilePeripherias') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            'text-uppercase fw-bold text-decoration-none text-dark ' +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          MEBELLER
        </a>
      </div>
      <div className="row">
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'furniture') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            'text-uppercase fw-bold text-decoration-none text-dark ' +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          HOJALYK HARYTLARY
        </a>
      </div>
      <div className="row">
        {products.map(({ id, img, title, price, isNew, category }) => {
          if (category === 'appliances') {
            return (
              <div key={id} className="col-6 col-sm-4 col-lg-4 col-xl-3 p-0">
                <ProductCard
                  id={id}
                  image={img}
                  title={title}
                  price={price}
                  isNew={isNew}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default HomeProducts;
