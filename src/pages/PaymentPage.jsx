import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { instanceAxios } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "@material-tailwind/react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  faTrash,
  faTruckFast,
  faPlus,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { setCardData } from "../store/actions/paymentActions";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showAddCardForm, setShowAddCardForm] = useState(false);

  const addCardForm = () => {
    setShowAddCardForm((form) => !form);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const onSubmit = (data) => {
    instanceAxios
      .post("/card", data)
      .then((response) => {
        dispatch(setAddressData(response.data));
        reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  let totalPrice = shoppingCart.cart
    .filter((item) => item.checked == true)
    .reduce((total, item) => total + item.product.price * item.count, 0)
    .toFixed(2);

  useEffect(() => {
    instanceAxios
      .get("/card")
      .then((response) => {
        dispatch(setCardData(response.data));
        console.log("get: ", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className=" font-montserrat">
      <Header />
      <div>
        <div className="bg-[#fafafa] flex px-[13%] pt-4 justify-between">
          <div className="font-semibold text-[#23A6F0]">SHOPPING CART</div>
          <div className="font-semibold text-[#23A6F0]">SHIPPING ADDRESS</div>
          <div>
            <div className="font-semibold text-[#23A6F0]">PAYMENT</div>
            <div className="text-center pt-2">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="w-8 h-8 animate-car"
              />
            </div>
          </div>
          <div className="font-semibold text-[#23A6F0]">REWIEW ORDER</div>
        </div>
        <div className="flex px-[7%] w-full flex-col gap-4 bg-[#fafafa]">
          <Progress value={75} color="blue" />
        </div>
      </div>
      <div className="flex justify-evenly bg-[#fafafa] py-12">
        <div className="flex flex-col flex-wrap border-2 bg-white shadow-sm w-[750px] h-[670px] p-10">
          <p>Kayıtlı Kartlar</p>
          <div>
            <button
              className="flex flex-col justify-center items-center border p-2 w-[300px] h-[150px] gap-2"
              onClick={() => addCardForm()}
            >
              <FontAwesomeIcon icon={faPlus} />
              {/* <FontAwesomeIcon icon={faCreditCard} /> */}
              <p>New Credit Card</p>
            </button>
            {showAddCardForm && (
              <div>
                <Cards
                  number={state.number}
                  expiry={state.expiry}
                  cvc={state.cvc}
                  name={state.name}
                  focused={state.focus}
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="number"
                    name="number"
                    value={state.number}
                    {...register("number", {
                      required: "Number is required",
                      minLength: {
                        value: 16,
                        message: "Enter a valid number!",
                      },
                    })}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <input
                    type="expiry"
                    name="expiry"
                    value={state.expiry}
                    {...register("expiry", {
                      required: "Expiry is required",
                      minLength: {
                        value: 4,
                        message: "Enter a valid number!",
                      },
                    })}
                    placeholder="Card Expiry"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <input
                    type="cvc"
                    name="cvc"
                    placeholder="Card CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <input
                    type="name"
                    name="name"
                    placeholder="Card Name"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </form>
              </div>
            )}
          </div>
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

export default PaymentPage;
