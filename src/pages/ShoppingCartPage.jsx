import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  addToCart,
  decrease,
  deleteProduct,
} from "../store/actions/shoppingCartActions";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

  const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for (const cartItem of cart) {
      totalPrice += cartItem.product.price * cartItem.count;
    }
    return totalPrice;
  };

  const totalCartPrice = calculateTotalPrice(shoppingCart.cart).toFixed(2);

  return (
    <main className=" font-montserrat">
      <Header />
      <div className="flex justify-evenly bg-[#fafafa] py-12">
        <div className="flex flex-col border-2 p-10 bg-white shadow-sm w-[750px] gap-6">
          <p className="text-[#737373] font-bold">Cart Items</p>
          {shoppingCart?.cart.map((cartItem) => (
            <div
              key={cartItem.product.id}
              className={`flex gap-6 ${
                deletedItemId === cartItem.product.id ? "animate-delete" : ""
              }`}
            >
              <input type="checkbox" id={`checkbox-${cartItem.product.id}`} />
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
                  className="pr-4 text-[#23A6F0]"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-2 w-[350px] text-center bg-white shadow-sm">
          <div className="text-[#737373] font-bold">Order Summary</div>
          <div className="font-bold">Shipping: $10</div>
          {<p className="font-bold">Total Price: ${totalCartPrice}</p>}
          <button className="border-2 w-[150px]">PROCEED TO CHECKOUT</button>
          <button className="border-2 w-[150px]">CONTINUE SHOPPING</button>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ShoppingCartPage;
