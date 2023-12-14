import Header from "../components/Header";
import BestSellerProduct from "../layout/BestSellerProducts";
import Footer from "../components/Footer";

import svg1 from "../assets/right-arrow.svg";
import svg2 from "../assets/product-page-stars.svg";
import svg3 from "../assets/product-colors-2.svg";
import svg4 from "../assets/select-options-button.svg";
import svg5 from "../assets/like.svg";
import svg6 from "../assets/basket.svg";
import svg7 from "../assets/more.svg";
import svg8 from "../assets/hooli.svg";
import svg9 from "../assets/lyft.svg";
import svg10 from "../assets/vector.svg";
import svg11 from "../assets/stripe.svg";
import svg12 from "../assets/aws.svg";
import svg13 from "../assets/reddit.svg";
import img1 from "../assets/product-page-1.png";
import ProductDescription from "../layout/ProductDescription";

const ProductPage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <div className="bg-[#FAFAFA] pb-10">
        <div className="flex gap-4 px-[10%] h-[92px] items-center justify-center xl:justify-start">
          <p className="text-[#252B42] text-sm font-bold">Home</p>
          <img src={svg1} alt="svg1" />
          <p className="text-[#BDBDBD] text-sm font-bold">Shop</p>
        </div>
        <div className="flex px-[10%] gap-4 flex-col xl:flex-row">
          <div className="flex w-full xl:w1/2">
            <img src={img1} alt="img1" />
          </div>
          <div className="flex flex-col w-full xl:w1/2">
            <h2 className="text-[#252B42] text-xl pt-4">Floating Phone</h2>
            <div className="pt-[13px]">
              <img src={svg2} alt="svg2" className="cursor-pointer" />
            </div>
            <p className="text-[#252B42] text-2xl font-bold pt-6">$1,139.33</p>
            <div className="flex gap-2 pt-2">
              <p className="text-[#737373] text-sm font-bold">Availability</p>
              <p className="text-[#737373] text-sm font-bold">:</p>
              <p className="text-[#23A6F0] text-sm font-bold">In Stock</p>
            </div>
            <p className="text-[#858585] text-sm pt-8 pb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr />
            <div className="mt-[28px] h-[30px]">
              <img src={svg3} alt="svg3" className="cursor-pointer" />
            </div>
            <div className="flex pt-16 gap-2">
              <img src={svg4} alt="svg4" className="cursor-pointer" />
              <img src={svg5} alt="svg5" className="cursor-pointer" />
              <img src={svg6} alt="svg6" className="cursor-pointer" />
              <img src={svg7} alt="svg7" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <ProductDescription />
      <BestSellerProduct />
      <div className="flex pt-[72px] pb-32 items-center justify-evenly flex-col xl:flex-row gap-[43px] xl:gap-0">
        <div>
          <img
            src={svg8}
            alt="svg8"
            className="cursor-pointer  hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg9}
            alt="svg9"
            className="cursor-pointer  hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg10}
            alt="svg10"
            className="cursor-pointer  hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg11}
            alt="svg11"
            className="cursor-pointer  hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg12}
            alt="svg12"
            className="cursor-pointer  hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg13}
            alt="svg13"
            className="cursor-pointer  hover:drop-shadow-xl hover:scale-105"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProductPage;
