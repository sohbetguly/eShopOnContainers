import { motion } from "framer-motion";
import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import menuItems from "../../utils/menuItems";
import "./Menu.css";

function Menu() {
  const variants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: 20, display: "none" },
  };

  return (
    <div className=" shadow ">
      <div className="list-group mb-1 ">
        <div className="fw-bold w-100 p-1 text-white cursor-pointer bg-main-color bg-gradient link">
          <div className="d-flex align-items-center text-left ">
            <BsFilterLeft
              style={{ minWidth: "2rem", fontSize: "2.5rem" }}
              className="text-center px-2 p-0"
            />
            <span className="py-1 text-truncate">CATEGORIES</span>
          </div>
        </div>
      </div>
      <div className="list-group">
        <ul className="p-0">
          {menuItems.map(({ title, id, links, link, Icon }) => {
            return (
              <li key={id} className="menu-item ">
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  className="link menu-links fw-bold w-100 text-uppercase py-0 "
                  to={"/categories/" + link}
                  style={{
                    fontSize: 13,
                    minHeight: 35,
                  }}
                >
                  {Icon ? (
                    <Icon
                      size={28}
                      // color={active !== id ? "green" : "white"}
                      className="me-2 menu-icon menu-color-toggler"
                    />
                  ) : (
                    ""
                  )}
                  <span className="text-truncate menu-color-toggler">
                    {title}
                  </span>

                  <span
                    style={{
                      display: links ? "block" : "none",
                    }}
                    className="dropend menu-color-toggler"
                  ></span>
                </Link>
                <motion.ul
                  // animate={active !== id ? "closed" : "open"}
                  // variants={variants}
                  // style={{
                  //   display: id !== active ? 'none' : 'block',
                  // }}
                  className="submenu-items "
                >
                  {links
                    ? links.map(({ title, link, SubmenuIcon }) => {
                        return (
                          <li
                            key={title}
                            // onClick={() => setActive(false)}
                          >
                            <Link
                              onClick={() => window.scrollTo(0, 0)}
                              to={"/categories/" + link}
                              className="w-100 menu-links link py-0 "
                              style={{
                                minHeight: 35,
                              }}
                            >
                              <div className="submenu">
                                {SubmenuIcon ? (
                                  <SubmenuIcon
                                    size={28}
                                    className="me-2 submenu-icon"
                                  />
                                ) : (
                                  <Icon
                                    size={28}
                                    className="me-2 submenu-icon"
                                  />
                                )}
                                <span className="text-truncate submenu-text">
                                  {title}
                                </span>
                              </div>
                            </Link>
                          </li>
                        );
                      })
                    : ""}
                </motion.ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="menu-items"></div>
    </div>
  );
}

export default Menu;
