import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import img1 from "../assets/bestseller-products-1.png";
import img2 from "../assets/bestseller-products-2.png";
import img3 from "../assets/bestseller-products-3.png";
import img4 from "../assets/bestseller-products-4.png";
import img5 from "../assets/bestseller-products-5.png";
import img6 from "../assets/bestseller-products-6.png";
import img7 from "../assets/bestseller-products-7.png";
import img8 from "../assets/bestseller-products-8.png";

const BestSellerProduct = () => {
  return (
    <main className="flex flex-col px-[10%]">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 pt-14 pb-20">
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img1}
            alt="img1"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img2}
            alt="img2"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img3}
            alt="img3"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img4}
            alt="img4"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img5}
            alt="img5"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img6}
            alt="img6"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img7}
            alt="img7"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
        <Link
          to="/product-page"
          className="hover:scale-110 hover:drop-shadow-xl transition duration-300"
        >
          <img
            src={img8}
            alt="img8"
            className="cursor-pointer hover:scale-110 transition duration-300"
          />
          <ProductCard />
        </Link>
      </div>
    </main>
  );
};

export default BestSellerProduct;
