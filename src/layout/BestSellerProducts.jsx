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
    <main className="flex flex-col h-[1652px]">
      <div className="flex flex-col items-center pt-24 pb-6">
        <p className="text-[#737373] text-xl pb-2">Featured Products</p>
        <h2 className="text-[#252B42] text-2xl font-bold pb-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 pt-14">
        <div>
          <img src={img1} alt="img1" className="" />
          <ProductCard />
        </div>
        <div>
          <img src={img2} alt="img2" />
          <ProductCard />
        </div>
        <div>
          <img src={img3} alt="img3" />
          <ProductCard />
        </div>
        <div>
          <img src={img4} alt="img4" />
          <ProductCard />
        </div>
        <div>
          <img src={img5} alt="img5" />
          <ProductCard />
        </div>
        <div>
          <img src={img6} alt="img6" />
          <ProductCard />
        </div>
        <div>
          <img src={img7} alt="img7" />
          <ProductCard />
        </div>
        <div>
          <img src={img8} alt="img8" />
          <ProductCard />
        </div>
      </div>
    </main>
  );
};

export default BestSellerProduct;
