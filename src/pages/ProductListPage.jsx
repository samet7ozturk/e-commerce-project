import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { fetchNextPage, fetchProducts } from "../store/thunks/productsThunk";
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
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../components/ProductCard";

const ProductListPage = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const data = useSelector((state) => state.global.categories);
  const { productList, totalProductCount } = useSelector(
    (state) => state.products
  );

  const categoriesData = [
    { id: "", text: "Default" },
    { id: "1", text: "Tişört" },
    { id: "2", text: "Ayakkabı" },
    { id: "3", text: "Ceket" },
    { id: "4", text: "Elbise" },
  ];

  const { register, handleSubmit } = useForm();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [customFilter, setCustomFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = (data) => {
    setIsLoading(true);
    dispatch(fetchNextPage(data))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching next page:", error);
        setIsLoading(false);
        setHasMore(false);
      });
  };

  const onSubmit = (data) => {
    console.log("formmmm", data);
    setIsLoading(true);
    setSearchParams({
      category: data.category,
      filter: data.filter,
      sort: data.sort,
    });
    dispatch(
      fetchProducts({
        category: data.category,
        filter: data.filter,
        sort: data.sort,
      })
    ).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    dispatch(categories());
    setIsLoading(true);
    dispatch(fetchProducts({}))
      .finally(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setHasMore(false);
      });
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
          <form className="flex" onSubmit={handleSubmit(onSubmit)}>
            <label className="flex border-2 items-center p-2">
              <p className="text-[#737373] text-sm font-bold">Category:</p>
              <select {...register("category")}>
                {categoriesData.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className="text-[#737373] text-sm font-bold"
                  >
                    {category.text}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex border-2 items-center p-2">
              <p className="text-[#737373] text-sm font-bold">Sort:</p>
              <select {...register("sort")}>
                <option
                  value="default"
                  className="text-[#737373] text-sm font-bold"
                >
                  Default
                </option>
                <option
                  value="price:asc"
                  className="text-[#737373] text-sm font-bold"
                >
                  PRICE: Low to High
                </option>
                <option
                  value="price:desc"
                  className="text-[#737373] text-sm font-bold"
                >
                  PRICE: High to Low
                </option>
                <option
                  value="rating:asc"
                  className="text-[#737373] text-sm font-bold"
                >
                  RATING: Low to High
                </option>
                <option
                  value="rating:desc"
                  className="text-[#737373] text-sm font-bold"
                >
                  RATING: Low To High
                </option>
              </select>
            </label>
            <label className="flex border-2 items-center p-2 text-[#737373] font-bold">
              Filter:
              <input type="text" {...register("filter")} className="w-20" />
            </label>
            <button
              type="submit"
              className="border-[#23A6F0] w-20 bg-[#23A6F0] active:scale-110"
            >
              Filter
            </button>
          </form>
        </div>
      </div>
      <InfiniteScroll
        dataLength={productList.length}
        next={() =>
          fetchData({
            selectedCategory,
            customFilter,
            selectedSort,
            offset: 25,
          })
        }
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="flex flex-col"
      >
        <div className="flex flex-wrap flex-row justify-center py-12 px-[10%] gap-8">
          {productList.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </InfiniteScroll>

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
