import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginExit } from "../store/actions/userActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
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
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
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
  const dispatch = useDispatch();

  const tokenDelete = () => {
    localStorage.removeItem("token");
    dispatch(loginExit());
  };

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
              <Link to="/product-list-page">Shop</Link>
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
                        <faPhone
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
                        <faPhone
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

          <div className="flex items-center gap-2">
            <Link to="/basket">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <p>1</p>
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
