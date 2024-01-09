import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "@material-tailwind/react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  addToCart,
  checkProduct,
  decrease,
  deleteProduct,
} from "../store/actions/shoppingCartActions";

import { faTrash, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const increaseCount = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const decreaseCount = (cartItem) => {
    dispatch(decrease(cartItem));
  };

  const deleteItem = (cartItem) => {
    setDeletedItemId(cartItem.product.id);
    setTimeout(() => {
      dispatch(deleteProduct(cartItem.product));
      setDeletedItemId(null);
    }, 1000);
  };

  const toggleChecked = (cartItem) => {
    dispatch(checkProduct(cartItem.product));
  };

  let totalPrice = shoppingCart.cart
    .filter((item) => item.checked == true)
    .reduce((total, item) => total + item.product.price * item.count, 0)
    .toFixed(2);

  return (
    <main className="font-montserrat">
      <Header />
      <div className="bg-[#fafafa] flex px-[13%] pt-4 justify-between">
        <div>
          <div className="font-semibold text-[#23A6F0]">SHOPPING CART</div>
          <div className="text-center pt-2">
            <FontAwesomeIcon
              icon={faTruckFast}
              className="w-8 h-8 animate-car"
            />
          </div>
        </div>
        <div className="font-semibold text-[#23A6F0]">SHIPPING ADDRESS</div>
        <div className="font-semibold text-[#23A6F0]">PAYMENT</div>
        <div className="font-semibold text-[#23A6F0]">REWIEW ORDER</div>
      </div>
      <div className="flex px-[7%] w-full flex-col gap-4 bg-[#fafafa]">
        <Progress value={25} color="blue" className="" />
      </div>
      <div className="flex justify-evenly bg-[#fafafa] py-12">
        <div className="h-[670px] overflow-auto flex flex-col border-2 p-10 bg-white shadow-sm w-[750px] gap-6">
          <p className="text-[#737373] font-bold">Cart Items</p>
          {shoppingCart?.cart.map((cartItem) => (
            <div
              key={cartItem.product.id}
              className={`flex gap-6 ${
                deletedItemId === cartItem.product.id ? "animate-delete" : ""
              }`}
            >
              <input
                type="checkbox"
                id={`checkbox-${cartItem.product.id}`}
                checked={cartItem.checked}
                onChange={() => toggleChecked(cartItem)}
              />
              <div className="flex items-center py-2 pl-2 border-2 justify-between w-[600px]">
                <div className="flex gap-4 items-center w-[240px]">
                  <img
                    src={cartItem.product.images[0].url}
                    alt="Ürün Resmi"
                    className="w-[100px]"
                  />
                  <div className="font-semibold flex items-center text-center">
                    {cartItem.product.name}
                  </div>
                </div>
                <div className="flex">
                  <div className="flex gap-2">
                    <p className="flex items-end text-[#23A6F0] font-bold">
                      Piece:
                    </p>
                    <button
                      onClick={() => decreaseCount(cartItem.product)}
                      className="border bg-gray-300 w-4"
                    >
                      -
                    </button>
                    <p className="flex items-end">{cartItem.count}</p>
                    <button
                      onClick={() => increaseCount(cartItem.product)}
                      className="border bg-gray-300 w-4"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <div className="">
                    <p className="text-[#23A6F0] font-bold">Price</p>$
                    {(cartItem.product.price * cartItem.count).toFixed(2)}
                  </div>
                </div>
                <button
                  onClick={() => deleteItem(cartItem)}
                  className="pr-4 text-[#23A6F0] hover:scale-125 transition duration-300"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-6 border-2 w-[350px] text-center bg-white shadow-sm px-[5%]">
          <div className="text-[#23A6F0] font-bold pb-16">Order Summary</div>
          <div className="flex font-bold justify-between">
            <p className="text-[#737373]">Shipping:</p>
            {totalPrice > "200" ? (
              <p className="line-through decoration-blue-500 decoration-4">
                $15
              </p>
            ) : (
              <p>$15</p>
            )}
          </div>

          {totalPrice > "200" ? (
            <div className="flex flex-col font-bold justify-between">
              <p>Free shipping on orders over 200 dollars.</p>
            </div>
          ) : (
            ""
          )}
          {
            <div className="flex justify-between">
              <p className="font-bold text-[#737373]">Items Price:</p>
              <p className="font-bold">${totalPrice}</p>
            </div>
          }

          <hr />
          {
            <div className="flex justify-between pb-10">
              <p className="font-bold text-[#737373]">Total Price:</p>
              <p className="font-bold">
                $
                {parseFloat(totalPrice) > 200
                  ? totalPrice
                  : parseFloat(totalPrice) + 15}
              </p>
            </div>
          }
          <Link to="/order-page">
            <button className="bg-blue-300 w-[150px] py-2 rounded hover:scale-105 transition duration-300">
              PROCEED TO CHECKOUT
            </button>
          </Link>
          <Link to="/shopping">
            <button className="bg-blue-300 w-[150px] py-2 rounded hover:scale-105 transition duration-300">
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ShoppingCartPage;
