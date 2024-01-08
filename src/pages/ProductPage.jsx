import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchSingleProduct } from "../store/thunks/productsThunk";

import Header from "../components/Header";
import BestSellerProduct1 from "../layout/BestSellerProducts1";
import ProductDescription from "../layout/ProductDescription";
import Footer from "../components/Footer";

import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import svg1 from "../assets/right-arrow.svg";
import svg5 from "../assets/like.svg";
import svg6 from "../assets/basket.svg";
import svg7 from "../assets/more.svg";
import svg8 from "../assets/hooli.svg";
import svg9 from "../assets/lyft.svg";
import svg10 from "../assets/vector.svg";
import svg11 from "../assets/stripe.svg";
import svg12 from "../assets/aws.svg";
import svg13 from "../assets/reddit.svg";
import {
  faStar,
  faStarHalfAlt,
  faCheck,
  faHeart as heart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarRegular,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { addToCart } from "../store/actions/shoppingCartActions";

const ProductPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const searchParams = useParams();
  const product = useSelector((state) => state.products.product);
  console.log("product :", product);

  const [selectedColor, setSelectedColor] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const token = localStorage.getItem("token");

  const handleGoBack = () => {
    history(-1);
  };

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  const handleInspect = () => {
    setIsClicked3((inspect) => !inspect);
  };

  const handleAddToCart = (product) => {
    if (token) {
      dispatch(addToCart(product));
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
    } else {
      localStorage.setItem("returnTo", location.pathname);
      link("/login");
    }
  };

  const favorite = (product) => {
    setIsClicked2(true);
    setTimeout(() => {
      setIsClicked2(false);
    }, 700);
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

  useEffect(() => {
    dispatch(fetchSingleProduct(searchParams.productId));
  }, [searchParams]);

  return product.name ? (
    <main className="font-montserrat">
      {isClicked3 && (
        <div className="absolute bg-gray-700 h-[200vh] w-[200vh]"></div>
      )}
      <Header />
      <div className="bg-[#FAFAFA] pb-10">
        <div className="flex gap-4 px-[10%] h-[92px] items-center justify-center xl:justify-start">
          <button className="pr-4" onClick={handleGoBack}>
            <ArrowLeftCircleIcon className="h-8 w-8 text-blue-500" />
          </button>
          <p className="text-[#252B42] text-sm font-bold">Home</p>
          <img src={svg1} alt="svg1" />
          <p className="text-[#BDBDBD] text-sm font-bold">Shop</p>
        </div>
        <div className="flex px-[10%] gap-4 flex-col xl:flex-row">
          <div className="flex relative w-full justify-center">
            <img
              src={product?.images[0].url}
              alt="img1"
              className={`h-[650px] ${isClicked3 && "animate-grow z-10"}`}
              onClick={() => handleInspect()}
            />
            {isClicked2 && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon
                  icon={heart}
                  className="w-52 h-52 text-red-700 animate-favorite"
                />
              </div>
            )}
          </div>
          {isClicked && (
            <div className="flex w-full absolute">
              <img
                src={product?.images[0].url}
                alt="img1"
                className={`h-[650px] ${isClicked ? "animate-basket2" : ""}`}
              />
            </div>
          )}
          <div className="flex flex-col w-full">
            <h2 className="text-[#252B42] text-xl pt-4">{product.name}</h2>
            <div className="pt-[13px]">
              <div class="flex items-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={
                      index < product.rating
                        ? faStar
                        : index - 0.5 < product.rating
                        ? faStarHalfAlt
                        : faStarRegular
                    }
                    className="text-yellow-600 w-4 h-4 me-1"
                  />
                ))}
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {product.rating}
                </p>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  out of
                </p>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  5
                </p>
              </div>
            </div>
            <p className="text-[#252B42] text-2xl font-bold pt-6">
              ${product.price}
            </p>
            <div className="flex gap-2 pt-2">
              <p className="text-[#737373] text-sm font-bold">Availability</p>
              <p className="text-[#737373] text-sm font-bold">:</p>
              <p className="text-[#23A6F0] text-sm font-bold">
                {product.stock}
              </p>
            </div>
            <p className="text-[#858585] text-sm pt-8 pb-6">
              {product.description}
            </p>
            <hr />
            <div className="flex flex-col justify-center gap-8 h-[150px] py-10">
              <div className="flex gap-2">
                <button
                  className={`bg-[#23A6F0] rounded-full w-8 h-8 relative ${
                    selectedColor === "#23A6F0"
                      ? "border-2 border-black animate-rotate-y"
                      : ""
                  }`}
                  onClick={() => handleColorButtonClick("#23A6F0")}
                >
                  {selectedColor === "#23A6F0" && (
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                    </p>
                  )}
                </button>
                <button
                  className={`bg-[#2DC071] rounded-full w-8 h-8 relative ${
                    selectedColor === "#2DC071"
                      ? "border-2 border-black animate-rotate-y"
                      : ""
                  }`}
                  onClick={() => handleColorButtonClick("#2DC071")}
                >
                  {selectedColor === "#2DC071" && (
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                    </p>
                  )}
                </button>
                <button
                  className={`bg-[#E77C40] rounded-full w-8 h-8 relative ${
                    selectedColor === "#E77C40"
                      ? "border-2 border-black animate-rotate-y"
                      : ""
                  }`}
                  onClick={() => handleColorButtonClick("#E77C40")}
                >
                  {selectedColor === "#E77C40" && (
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                    </p>
                  )}
                </button>
                <button
                  className={`bg-[#252B42] rounded-full w-8 h-8 relative ${
                    selectedColor === "#252B42"
                      ? "border-2 border-black animate-rotate-y"
                      : ""
                  }`}
                  onClick={() => handleColorButtonClick("#252B42")}
                >
                  {selectedColor === "#252B42" && (
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                    </p>
                  )}
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => favorite(product)}
                  className="flex justify-center items-center bg-white border rounded-full w-10 h-10 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>

                <button onClick={() => handleAddToCart(product)}>
                  <img src={svg6} alt="svg6" className="cursor-pointer" />
                </button>
                <button onClick={() => handleInspect()}>
                  <img src={svg7} alt="svg7" className="cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription />
      <BestSellerProduct1 />
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
  ) : (
    <p>Loading...</p>
  );
};

export default ProductPage;
