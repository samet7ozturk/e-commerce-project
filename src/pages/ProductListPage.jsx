import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSellerProduct from "../layout/BestSellerProducts";

import svg1 from "../assets/right-arrow.svg";
import svg2 from "../assets/product-page-1.svg";
import svg3 from "../assets/product-page-2.svg";
import svg4 from "../assets/page-nav.svg";
import svg5 from "../assets/hooli.svg";
import svg6 from "../assets/lyft.svg";
import svg7 from "../assets/vector.svg";
import svg8 from "../assets/stripe.svg";
import svg9 from "../assets/aws.svg";
import svg10 from "../assets/reddit.svg";
import img1 from "../assets/product-list-page-1.png";
import img2 from "../assets/product-list-page-2.png";
import img3 from "../assets/product-list-page-3.png";
import img4 from "../assets/product-list-page-4.png";
import img5 from "../assets/product-list-page-5.png";

const ProductListPage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <div className="bg-[#FAFAFA] flex px-[10%] py-6 items-center justify-between flex-col xl:flex-row gap-8 xl:gap-0">
        <h2 className="text-[#252B42] text-2xl font-bold">Shop</h2>
        <div className="flex gap-4 justify-center xl:justify-start">
          <p className="text-[#252B42] text-sm font-bold">Home</p>
          <img src={svg1} alt="svg1" />
          <p className="text-[#BDBDBD] text-sm font-bold">Shop</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex gap-2 justify-center flex-col xl:flex-row pb-8">
        <img
          src={img1}
          alt="img1"
          className="cursor-pointer hover:scale-105 duration-200 transition opacity-100 hover:opacity-60"
        />
        <img
          src={img2}
          alt="img2"
          className="cursor-pointer hover:scale-105 duration-200 transition opacity-100 hover:opacity-60"
        />
        <img
          src={img3}
          alt="img3"
          className="cursor-pointer hover:scale-105 duration-200 transition opacity-100 hover:opacity-60"
        />
        <img
          src={img4}
          alt="img4"
          className="cursor-pointer hover:scale-105 duration-200 transition opacity-100 hover:opacity-60"
        />
        <img
          src={img5}
          alt="img5"
          className="cursor-pointer hover:scale-105 duration-200 transition opacity-100 hover:opacity-60"
        />
      </div>
      <div className="flex px-[10%] py-6 items-center justify-between flex-col xl:flex-row gap-4 xl:gap-0">
        <h2 className="text-[#737373] text-sm font-bold">
          Showing all 12 results
        </h2>
        <div className="flex gap-4 justify-center xl:justify-start items-center">
          <p className="text-[#737373] text-sm font-bold">Views:</p>
          <img src={svg2} alt="svg2" />
        </div>
        <div>
          <img src={svg3} alt="svg3" />
        </div>
      </div>
      <BestSellerProduct />
      <div className="flex justify-center pb-8">
        <img src={svg4} alt="svg4" />
      </div>
      <div className="bg-[#FAFAFA] flex pt-[72px] pb-32 items-center justify-evenly flex-col xl:flex-row gap-[43px] xl:gap-0">
        <div>
          <img
            src={svg5}
            alt="svg5"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg6}
            alt="svg6"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg7}
            alt="svg7"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg8}
            alt="svg8"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg9}
            alt="svg9"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={svg10}
            alt="svg10"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProductListPage;
