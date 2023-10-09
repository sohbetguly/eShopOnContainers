import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import Menu from "../menu/Menu";
import About from "./About";
import DeliverAndPayment from "./DeliverAndPayment";
import Guarantee from "./Guarantee";
import Home from "./home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import Service from "./Service";
import AllProducts from "./products/Products";
import SearchProducts from "./products/SearchProducts";
import Categories from "./Categories";
import Accordion from "./Accordion";

function Layout() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container-xl">
      <div className="row mt-2">
        <div className="col-lg-3 d-lg-block d-none">
          {/* <Menu /> */}
          <Accordion />
        </div>
        <div className="col-md-12 col-lg-9 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/search" element={<SearchProducts />} />
            <Route path="/all" element={<AllProducts />} />
            <Route
              path="/delivery-and-payment"
              element={<DeliverAndPayment />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories/:category" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
