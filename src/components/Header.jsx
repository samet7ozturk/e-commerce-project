import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginExit, loginUserVerify } from "../store/actions/userActions";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faTrash,
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
  Typography,
} from "@material-tailwind/react";
import { instanceAxios } from "../api/api";
import {
  addToCart,
  decrease,
  deleteProduct,
} from "../store/actions/shoppingCartActions";

const Header = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const categories = useSelector((store) => store.global.categories);
  const femaleCategories = categories.filter(
    (category) => category.gender === "k"
  );
  const maleCategories = categories.filter(
    (category) => category.gender === "e"
  );

  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  console.log(user);

  const tokenDelete = () => {
    localStorage.removeItem("token");
    dispatch(loginExit());
  };

  const toggleBasket = () => {
    setOpenMenu3((basketOpen) => !basketOpen);
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

  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for (const cartItem of cart) {
      totalPrice += cartItem.product.price * cartItem.count;
    }
    return totalPrice;
  };

  const totalCartPrice = calculateTotalPrice(shoppingCart.cart).toFixed(2);

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

      <nav className="h-[500px] xl:h-[76px] px-[3%] flex bg-white justify-center xl:justify-between">
        <div className="flex flex-wrap justify-start xl:justify-between gap-20 flex-col xl:flex-row ">
          <div className="flex items-center pt-8 xl:pt-0">
            <h2 className="text-[#252B42] text-2xl">Bandage</h2>
          </div>
          <div className="flex flex-wrap gap-4 text-[#737373] text-3xl xl:text-sm flex-col xl:flex-row font-normal xl:font-bold">
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
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          <div className="flex items-center">
            <div className="flex gap-2">
              <button onClick={() => toggleBasket()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="18"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </button>
              <p>{shoppingCart.cart.length}</p>
            </div>
            {openMenu3 && (
              <div className="flex flex-col z-10 bg-white border-2 absolute right-20 top-20 justify-between p-2 mt-8">
                <div className="flex flex-col h-[350px] w-[400px] overflow-auto gap-4">
                  {shoppingCart?.cart.map((cartItem) => (
                    <div
                      key={cartItem.product.id}
                      className="flex items-center gap-4 py-2 pl-2  border justify-between"
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
                          className="font-semibold flex items-center text-center text-[#252B42]"
                        >
                          {cartItem.product.name}
                        </div>
                      </div>
                      <div className="flex">
                        <div
                          variant="small"
                          color="gray"
                          className="flex gap-2"
                        >
                          <p className="flex items-end text-[#23A6F0] font-bold">
                            Piece:
                          </p>
                          <button
                            onClick={() => decreaseCount(cartItem.product)}
                            className="border bg-gray-300 text-[#737373] w-4"
                          >
                            -
                          </button>
                          <p className="flex items-end text-[#252B42]">
                            {cartItem.count}
                          </p>
                          <button
                            onClick={() => increaseCount(cartItem.product)}
                            className="border bg-gray-300 text-[#737373] w-4"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <div variant="small" color="gray" className="">
                          <p className="text-[#23A6F0] font-bold">Price</p>
                          <p className="text-[#252B42]">
                            {(cartItem.product.price * cartItem.count).toFixed(
                              2
                            )}
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
                  <Link to="/shopping-cart-page">Sepete Git</Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <p>1</p>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
