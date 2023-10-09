import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import logo from '../../images/sumbar-computer-light.svg';
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const navLinks = [
    { link: '/', title: 'Home' },
    { link: '/about-us', title: 'About' },
    { link: '/service', title: 'Service' },
    { link: '/guarantee', title: 'Guarantee' },
  ];

  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const linkRef = useRef();

  return (
    <div className="bg-dark bg-gradient">
      <div className="text-white container-xl">
        <div className="d-flex justify-content-between align-items-center p-2">
          {/* <div className="text-left">
               <a
                className="text-light text-decoration-none"
                href="tel:+99361610316"
              >
                <FontAwesomeIcon icon={faPhone} />
                +99361610316
              </a> 
            </div> */}
          <div className="col-6 col-sm-3 col-lg-2">
            <Link to={'/'}>
              <img className="me-4" src={logo} alt="" />
            </Link>
          </div>
          <ul className="d-none m-0 d-sm-flex mx-auto text-start list-unstyled">
            {navLinks.map(({ link, title }) => {
              return (
                <li
                  key={link}
                  className={`fs-7 px-3 py-1 rounded ${
                    pathname === link ? 'bg-main-color bg-gradient' : ''
                  }`}
                >
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-light text-decoration-none text-truncate"
                    to={link}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            style={{ fontSize: '25px' }}
            className="d-flex d-lg-none justify-content-end col col-md-auto "
          >
            {/* <FontAwesomeIcon className="me-2" icon={faCircleUser} /> */}
            <FaUserCircle className="me-2" />
            <Link className="position-relative link text-white " to={'/cart'}>
              {/* <FontAwesomeIcon icon={faCartShopping} /> */}
              <FaShoppingCart />
              {!!totalQuantity && (
                <span className="nav__top-badge badge bg-main-color bg-gradient rounded-circle">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
          {/* <div>
              <FontAwesomeIcon icon={faGlobe} className="me-1" />
              Türkmen
            </div> */}
        </div>
      </div>
      <div className="text-light  nav__container position-sticky top-0">
        <div className="container-xl">
          <div className="row py-2 justify-content-center ">
            <div className="col-lg col-12 align-self-center d-lg-block ">
              <div className="d-flex justify-content-center">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    linkRef.current.click();
                  }}
                  action="/search"
                  className="input-group"
                >
                  <input
                    type="text"
                    id="search"
                    name="term"
                    value={searchTerm}
                    onChange={(val) => setSearchTerm(val.target.value)}
                    maxLength={40}
                    className="form-control rounded-lg-left bg-light"
                    placeholder="search"
                    aria-label="search"
                    autoComplete="off"
                  />

                  <Link
                    to={!searchTerm ? null : '/search?term=' + searchTerm}
                    ref={linkRef}
                    className="btn bg-main-color rounded-lg-right pb-1"
                  >
                    <FaSearch className="text-white " />
                  </Link>
                </form>
              </div>
            </div>
            <div
              style={{ fontSize: '25px', width: 90 }}
              className="d-none d-lg-flex ms-auto justify-content-end align-items-center "
            >
              {/* <FontAwesomeIcon className="me-2" icon={faCircleUser} /> */}
              <FaSearch className="me-2" />
              <Link
                className="position-relative link text-white d-flex align-items-center me-2"
                to={'/cart'}
              >
                {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                <FaShoppingCart />
                {!!totalQuantity && (
                  <span className="nav__top-badge badge bg-main-color bg-gradient rounded-circle">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
