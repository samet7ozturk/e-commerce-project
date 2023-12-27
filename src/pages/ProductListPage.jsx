import { useEffect } from "react";
import { instanceAxios } from "../api/api";

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
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../store/thunks/categoryThunk";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.global.categories);

  useEffect(() => {
    dispatch(categories());
  }, []);

  const sortedData = [...data].sort((a, b) => b.rating - a.rating);
  const topCategories = sortedData.slice(0, 5);

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
        {topCategories.map((category) => (
          <Link
            to={`/shopping/${
              category.gender === "k" ? "kadin" : "erkek"
            }/${category.title.toLowerCase()}`}
            key={category.id}
            className="flex relative hover:scale-105 justify-center"
          >
            <img
              src={category.img}
              alt={category.title}
              className="cursor-pointer duration-200 transition opacity-100 hover:opacity-60 w-[205px]"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <p className="text-base font-bold">{category.title}</p>
            </div>
          </Link>
        ))}
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
