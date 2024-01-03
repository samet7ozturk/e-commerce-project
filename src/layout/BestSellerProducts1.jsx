import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../store/thunks/productsThunk";

import ProductCard from "../components/ProductCard";

const BestSellerProduct1 = () => {
  const dispatch = useDispatch();
  const [rating, setrating] = useState("rating:desc");
  const data = useSelector((state) => state.products.productList);
  console.log("bestsellerrrrr", data);

  const sortedData = [...data].sort((a, b) => b.rating - a.rating);
  const topProducts = sortedData.slice(0, 8);
  console.log("bestsellerrrrr", topProducts);

  useEffect(() => {
    dispatch(
      fetchProducts({
        sort: rating,
      })
    ).catch((error) => {
      console.error("Error fetching products:", error);
    });
  }, []);

  return (
    <main className="flex flex-wrap px-[10%] gap-8 justify-center text-center">
      {topProducts.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </main>
  );
};

export default BestSellerProduct1;
