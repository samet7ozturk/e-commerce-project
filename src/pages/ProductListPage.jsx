import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProducts } from "../store/thunks/productsThunk";
import { categories } from "../store/thunks/categoryThunk";

import Header from "../components/Header";
import Footer from "../components/Footer";

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

const ProductListPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.global.categories);
  const { productList, totalProductCount } = useSelector(
    (state) => state.products
  );

  const [selectedCategory, setSelectedCategory] = useState("1");
  const [customFilter, setCustomFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(categories());
    setIsLoading(true);
    dispatch(
      fetchProducts({
        category: selectedCategory,
        filter: customFilter,
        sort: selectedSort,
      })
    ).finally(() => setIsLoading(false));
  }, [selectedCategory, customFilter, selectedSort]);

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
      {isLoading && (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
        </div>
      )}
      <div className="flex px-[10%] py-6 items-center justify-between flex-col xl:flex-row gap-4 xl:gap-0">
        <h2 className="text-[#737373] text-sm font-bold">
          Showing all {totalProductCount} results
        </h2>
        <div className="flex gap-4 justify-center xl:justify-start items-center">
          <p className="text-[#737373] text-sm font-bold">Views:</p>
          <img src={svg2} alt="svg2" />
        </div>
        <div>
          <img src={svg3} alt="svg3" />
        </div>
      </div>
      <form>
        <label>
          Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </label>
        <label>
          Filter:
          <input
            type="text"
            value={customFilter}
            onChange={(e) => setCustomFilter(e.target.value)}
          />
        </label>
        <label>
          Sort:
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price:asc">PRICE: Low to High</option>
            <option value="price:desc">PROCE: High to Low</option>
            <option value="rating:asc">RATING: Low to High</option>
            <option value="rating:desc">RATING: Low To High</option>
          </select>
        </label>
      </form>
      <div className="flex">
        {productList?.map((product) => (
          <div key={product.id}>
            <img src={product.images[0].url} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        ))}
      </div>

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
