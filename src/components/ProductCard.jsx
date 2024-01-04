import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { addToCart } from "../store/actions/shoppingCartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import svg from "../assets/product-colors.svg";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const link = useNavigate();
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const token = localStorage.getItem("token");

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
      .replaceAll(" ", "-")
      .toLowerCase()
      .trim();
  };

  const handleAddToCart = (product) => {
    if (token) {
      dispatch(addToCart(product));
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 700);
    } else {
      localStorage.setItem("returnTo", location.pathname);
      link("/login");
    }
  };

  const favorite = (product) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let isFavorite = false;

    for (const favoriteItem of favorites) {
      if (favoriteItem.id === product.id) {
        isFavorite = true;
        break;
      }
    }

    if (!isFavorite) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col w-[238px] items-center border shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
        <div className="absolute top-[1%] right-[4%]">
          <button onClick={() => favorite(product)}>
            <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
          </button>
        </div>
        <img src={product.images[0].url} alt={product.name} />
        <Link
          to={`/product-page/${
            product.category_id === 1
              ? "tişört"
              : product.category_id === 2
              ? "ayakkabı"
              : product.category_id === 3
              ? "ceket"
              : "elbise"
          }/${product.id}/${turkishSlugify(product.name)}`}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-[#252B42] text-base font-bold pt-8 pb-4">
            {product.name}
          </h2>
        </Link>
        <div className="flex gap-2 pb-4">
          <p className="text-[#BDBDBD] text-sm font-bold tracking-wider">
            ${product.price}
          </p>
        </div>
        <img src={svg} alt="svg" className="cursor-pointer pb-8" />

        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer mb-8"
        >
          Sepete Ekle
        </button>
      </div>
      {isClicked && (
        <div
          className={`flex flex-col w-[238px] items-center border shadow-md hover:scale-105 hover:shadow-xl transition duration-300 absolute top-0 left-0 ${
            isClicked ? "animate-basket" : ""
          }`}
        >
          <Link
            to={`/product-page/${
              product.category_id === 1
                ? "tişört"
                : product.category_id === 2
                ? "ayakkabı"
                : product.category_id === 3
                ? "ceket"
                : "elbise"
            }/${product.id}/${turkishSlugify(product.name)}`}
            className="flex flex-col items-center text-center"
          >
            <img src={product.images[0].url} alt={product.name} />
            <h2 className="text-[#252B42] text-base font-bold pt-8 pb-4">
              {product.name}
            </h2>
            <div className="flex gap-2 pb-4">
              <p className="text-[#BDBDBD] text-sm font-bold">
                ₺{product.price}
              </p>
            </div>
            <img src={svg} alt="svg" className="cursor-pointer pb-8" />
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer mb-8"
          >
            Sepete Ekle
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
