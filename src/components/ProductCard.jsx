import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import svg from "../assets/product-colors.svg";

const ProductCard = () => {
  const { productList } = useSelector((state) => state.products);
  console.log(productList);

  const turkishSlugify = (str) => {
    const turkishMap = {
      ç: "c",
      ı: "i",
      ğ: "g",
      ö: "o",
      ş: "s",
      ü: "u",
      Ç: "C",
      İ: "I",
      Ğ: "G",
      Ö: "O",
      Ş: "S",
      Ü: "U",
    };

    return str
      .replace(/[^-a-zA-Z0-9çığöşüÇİĞÖŞÜ]+/g, "")
      .replace(/./g, (c) => turkishMap[c] || c)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  };

  return (
    <main className="flex flex-wrap flex-row justify-center py-12 px-[10%] gap-8">
      {productList?.map((product, ind) => (
        <Link
          key={ind}
          to={`/product-page/${
            product.category_id === 1
              ? "tişört"
              : product.category_id === 2
              ? "ayakkabı"
              : product.category_id === 3
              ? "ceket"
              : "elbise"
          }/${product.id}/${turkishSlugify(product.name)}`}
          className="flex flex-col w-[238px] items-center border shadow-sm hover:scale-105 hover:shadow-md transition duration-300"
        >
          <img src={product.images[0].url} alt={product.name} />
          <h2 className="text-[#252B42] text-base font-bold pt-8 pb-4">
            {product.name}
          </h2>
          <p className="text-[#737373] text-sm font-bold pb-4">
            {product.description}
          </p>
          <div className="flex gap-2 pb-4">
            <p className="text-[#BDBDBD] text-sm font-bold">₺{product.price}</p>
          </div>
          <img src={svg} alt="svg" className="cursor-pointer pb-8" />
        </Link>
      ))}
    </main>
  );
};

export default ProductCard;
