import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../store/thunks/productsThunk";

import ProductCard from "../components/ProductCard";

const BestSellerProduct1 = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [customFilter, setCustomFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const data = useSelector((state) => state.products.productList);
  console.log("bestsellerrrrr", data);

  const sortedData = [...data].sort((a, b) => b.rating - a.rating);
  const topProducts = sortedData.slice(0, 8);
  console.log("bestsellerrrrr", topProducts);

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: selectedCategory,
        filter: customFilter,
        sort: selectedSort,
      })
    ).catch((error) => {
      console.error("Error fetching products:", error);
    });
  }, []);

  return (
    <main className="flex flex-wrap px-[10%] gap-8 justify-center text-center">
      {topProducts.map((product, index) => (
        <div className="w-[239px] hover:scale-110 hover:drop-shadow-xl transition duration-300">
          <Link to="/product-page" key={index}>
            <img
              src={product.images[0].url}
              alt={`img${index + 1}`}
              className="cursor-pointer hover:scale-110 transition duration-300"
            />
          </Link>
          <p className="pt-4">{product.name}</p>
          <p className="pt-4">${product.price}</p>
          <p className="pt-4">{product.rating}</p>
        </div>
      ))}
    </main>
  );
};

export default BestSellerProduct1;
