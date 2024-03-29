import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { instanceAxios } from "../api/api";
import { loginExit, loginUserVerify } from "../store/actions/userActions";
import {
  addToCart,
  decrease,
  deleteBasket,
  deleteProduct,
} from "../store/actions/shoppingCartActions";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faTrash,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const Header = () => {
  const dispatch = useDispatch();
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);
  const [openMenu5, setOpenMenu5] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const shoppingCart = useSelector((state) => state.shoppingCart);
  const categories = useSelector((store) => store.global.categories);

  const femaleCategories = categories.filter(
    (category) => category.gender === "k"
  );
  const maleCategories = categories.filter(
    (category) => category.gender === "e"
  );

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  console.log(user);

  const tokenDelete = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("favorites");
    dispatch(loginExit());
    dispatch(deleteBasket());
  };

  const toggleBasket = () => {
    setOpenMenu3((basketOpen) => !basketOpen);
  };

  const toggleMenu = () => {
    setOpenMenu5(!openMenu5);
  };

  const increaseCount = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const decreaseCount = (cartItem) => {
    dispatch(decrease(cartItem));
  };

  const deleteItem = (cartItem) => {
    dispatch(deleteProduct(cartItem));
  };

  const toggleFavorite = () => {
    setOpenMenu4((favoriteOpen) => !favoriteOpen);
    setFavoritesCount(favorites.length);
  };

  const deleteFavorite = (productId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter(
      (favoriteItem) => favoriteItem.id !== productId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoritesCount(updatedFavorites.length);
  };

  useEffect(() => {
    if (token) {
      instanceAxios.defaults.headers.common["Authorization"] = token;
      instanceAxios
        .get("/verify")
        .then((response) => {
          dispatch(loginUserVerify(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    console.log("Favorites count changed:", favoritesCount);
  }, [favoritesCount]);

  return (
    <main className="font-bold">
      <header className="h-[58px] px-[3%] hidden flex-wrap justify-between xl:flex bg-[#252B42] text-white">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="flex items-center">
          Follow us and get a chance to win 80% off
        </div>
        <div className="flex items-center gap-4">
          <p>Follow Us</p>
          <p>:</p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </header>

      <nav className="h-[100px] xl:h-[76px] px-[3%] flex bg-white justify-center xl:justify-between items-center xl:items-center">
        <div className="flex flex-wrap justify-between xl:justify-between gap-40 xl:flex-row ">
          <div className="flex items-center">
            <h2 className="text-[#252B42] text-2xl">Bandage</h2>
          </div>
          <div className="xl:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </button>
            {openMenu5 && (
              <div className="z-10 absolute top-[8%] right-[6%] bg-white border-2 p-4 flex flex-wrap gap-4 text-[#737373] text-lg xl:text-2xl flex-col xl:flex-row font-normal xl:font-bold">
                <div className="flex items-center hover:bg-[#5cb1df] p-2">
                  <Link to="/">Home</Link>
                </div>
                <div className="flex items-center hover:bg-[#5cb1df] p-2">
                  <Link to="/shopping">Shop</Link>
                </div>
                <div className="flex items-center hover:bg-[#5cb1df] p-2">
                  <Link to="/about-page">About</Link>
                </div>
                <div className="flex items-center hover:bg-[#5cb1df] p-2">
                  <Link to="/blog">Blog</Link>
                </div>
                <div className="flex items-center hover:bg-[#5cb1df] p-2">
                  <Link to="/contact-page">Contact</Link>
                </div>
                <div className="flex items-center hover:bg-[#5cb1df] p-2">
                  <Link to="/pages">Pages</Link>
                </div>
                <div className="flex items-center hover:bg-[#5cb1df] p-2">
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <button>Categories</button>
                    </MenuHandler>
                    <MenuList>
                      <Menu
                        placement="right-start"
                        open={openMenu1}
                        handler={setOpenMenu1}
                        allowHover
                        offset={15}
                      >
                        <MenuHandler className="flex items-center justify-between">
                          <MenuItem>
                            <p className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat">
                              Kadın
                            </p>
                            <ChevronUpIcon
                              strokeWidth={2.5}
                              className={`h-3.5 w-3.5 transition-transform ${
                                openMenu1 ? "rotate-90" : ""
                              }`}
                            />
                          </MenuItem>
                        </MenuHandler>
                        <MenuList>
                          {femaleCategories.map((category) => (
                            <MenuItem
                              className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat"
                              key={category.id}
                            >
                              {category.title}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Menu>
                      <Menu
                        placement="right-start"
                        open={openMenu2}
                        handler={setOpenMenu2}
                        allowHover
                        offset={15}
                      >
                        <MenuHandler className="flex items-center justify-between">
                          <MenuItem>
                            <p className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat">
                              Erkek
                            </p>
                            <ChevronUpIcon
                              strokeWidth={2.5}
                              className={`h-3.5 w-3.5 transition-transform ${
                                openMenu2 ? "rotate-90" : ""
                              }`}
                            />
                          </MenuItem>
                        </MenuHandler>
                        <MenuList>
                          {maleCategories.map((category) => (
                            <MenuItem
                              className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat"
                              key={category.id}
                            >
                              {category.title}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Menu>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            )}
          </div>
          <div className="hidden xl:flex flex-wrap gap-4 text-[#737373] text-3xl xl:text-sm flex-col xl:flex-row font-normal xl:font-bold">
            <div className="flex items-center ">
              <Link to="/">Home</Link>
            </div>
            <div className="flex items-center ">
              <Link to="/shopping">Shop</Link>
            </div>
            <div className="flex items-center">
              <Link to="/about-page">About</Link>
            </div>
            <div className="flex items-center">
              <Link to="/blog">Blog</Link>
            </div>
            <div className="flex items-center">
              <Link to="/contact-page">Contact</Link>
            </div>
            <div className="flex items-center">
              <Link to="/pages">Pages</Link>
            </div>
            <div className="flex items-center">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <button>Categories</button>
                </MenuHandler>
                <MenuList>
                  <Menu
                    placement="right-start"
                    open={openMenu1}
                    handler={setOpenMenu1}
                    allowHover
                    offset={15}
                  >
                    <MenuHandler className="flex items-center justify-between">
                      <MenuItem>
                        <p className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat">
                          Kadın
                        </p>
                        <ChevronUpIcon
                          strokeWidth={2.5}
                          className={`h-3.5 w-3.5 transition-transform ${
                            openMenu1 ? "rotate-90" : ""
                          }`}
                        />
                      </MenuItem>
                    </MenuHandler>
                    <MenuList>
                      {femaleCategories.map((category) => (
                        <MenuItem
                          className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat"
                          key={category.id}
                        >
                          {category.title}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                  <Menu
                    placement="right-start"
                    open={openMenu2}
                    handler={setOpenMenu2}
                    allowHover
                    offset={15}
                  >
                    <MenuHandler className="flex items-center justify-between">
                      <MenuItem>
                        <p className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat">
                          Erkek
                        </p>
                        <ChevronUpIcon
                          strokeWidth={2.5}
                          className={`h-3.5 w-3.5 transition-transform ${
                            openMenu2 ? "rotate-90" : ""
                          }`}
                        />
                      </MenuItem>
                    </MenuHandler>
                    <MenuList>
                      {maleCategories.map((category) => (
                        <MenuItem
                          className="text-[#737373] text-3xl xl:text-sm font-normal xl:font-bold font-montserrat"
                          key={category.id}
                        >
                          {category.title}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-wrap gap-8 text-[#23A6F0] items-center justify-end">
          <div className="flex gap-2">
            {token ? (
              <>
                <p>{user.name}</p>
                <button type="button" onClick={tokenDelete}>
                  Exit
                </button>
              </>
            ) : (
              <>
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/login">Login</Link>
                <p>/</p>
                <Link to="/signup-page">Register</Link>
              </>
            )}
          </div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />

          <div className="flex items-center">
            <div className="flex gap-2">
              <button onClick={() => toggleBasket()}>
                <ShoppingCartIcon strokeWidth={1.7} className="h-5 w-5" />
              </button>
              <p>{shoppingCart.cart.length}</p>
            </div>

            <div
              className={`flex flex-col z-10 bg-white border-2 absolute right-[105px] top-20 justify-between p-2 mt-8 ${
                openMenu3 ? "animate-dropdown" : "animate-dropdown2"
              }`}
            >
              <div className="flex flex-col max-h-[350px] w-[350px] overflow-auto gap-2 font-normal">
                {shoppingCart?.cart.map((cartItem) => (
                  <div
                    key={cartItem.product.id}
                    className="flex items-center gap-4 py-2 pl-2 border-dashed border-b-2 border-blue-100 justify-between last:border-b-0 hover:bg-blue-100"
                  >
                    <div className="flex gap-4 items-center w-[240px]">
                      <img
                        src={cartItem.product.images[0].url}
                        alt="Ürün Resmi"
                        className="w-10 h-14"
                      />
                      <div
                        variant="small"
                        color="gray"
                        className="flex items-center text-center text-[#252B42] text-sm"
                      >
                        {cartItem.product.name}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => decreaseCount(cartItem.product)}
                          className="text-[#23A6F0] w-4 justify-center items-center flex"
                        >
                          -
                        </button>
                        <p className="flex items-end text-[#252B42] text-sm">
                          {cartItem.count}
                        </p>
                        <button
                          onClick={() => increaseCount(cartItem.product)}
                          className="text-[#23A6F0] w-4 justify-center items-center flex"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">
                        <p className="text-[#252B42]">
                          $
                          {(cartItem.product.price * cartItem.count).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteItem(cartItem.product)}
                      className="pr-4 text-[#23A6F0]"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
              </div>
              <Link to="/shopping-cart-page">
                <div className="flex items-center justify-end bg-[#ebebeb] border rounded font-semibold py-2 pr-2">
                  <div className="flex gap-2 hover:scale-105">
                    <p>Go to Cart</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <button onClick={() => toggleFavorite()}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <p>{favorites.length}</p>
            </div>
            {openMenu4 && (
              <div className="flex flex-col z-10 bg-white border-2 absolute right-10 top-20 justify-between p-2 mt-8">
                <div className="flex flex-col h-[350px] w-[350px] overflow-auto gap-4">
                  {favorites.map((favoriteItem) => (
                    <div
                      key={favoriteItem.id}
                      className="flex items-center gap-4 py-2 pl-2 border"
                    >
                      <div className="flex gap-4 items-center w-[200px]">
                        <img
                          src={favoriteItem.images[0].url}
                          alt="Ürün Resmi"
                          className="w-10 h-14"
                        />
                        <div
                          variant="small"
                          color="gray"
                          className="font-semibold flex items-center text-center text-[#252B42]"
                        >
                          {favoriteItem.name}
                        </div>
                      </div>
                      <div>
                        <div
                          variant="small"
                          color="gray"
                          className="w-[60px] text-center"
                        >
                          <p className="text-[#252B42]">
                            Price ${favoriteItem.price}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteFavorite(favoriteItem.id)}
                        className="text-[#23A6F0]"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
