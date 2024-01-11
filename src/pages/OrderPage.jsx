import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instanceAxios } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  faTrash,
  faTruckFast,
  faUser,
  faPhone,
  faPlus,
  faCircleXmark,
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  addAddressData,
  setAddressData,
} from "../store/actions/paymentActions";
import { Progress } from "@material-tailwind/react";

const OrderPage = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const address = useSelector((state) => state.payment.address);
  console.log("adres :", address.address);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [provinceData, setProvinceData] = useState();
  const [city, setCity] = useState("");
  const [districts, setDistricts] = useState([]);

  const cityNames = provinceData?.map((city) => city.name);

  const addAddressForm = () => {
    setShowAddAddressForm((form) => !form);
    setIsClicked(!isClicked);
  };

  function handleCityChange(e) {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setValue("city", selectedCity, { shouldValidate: true });
  }

  const onSubmit = (data) => {
    instanceAxios
      .post("/user/address", data)
      .then(() => {
        dispatch(addAddressData({ ...data }));
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
    window.scrollTo(0, 0);
    instanceAxios
      .get("/user/address")
      .then((response) => {
        dispatch(setAddressData(response.data));
        console.log("get: ", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://turkiyeapi.dev/api/v1/provinces")
      .then((response) => {
        setProvinceData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const activeCity = provinceData?.find((item) => item.name == city);
    const districts = activeCity?.districts.map((district) => district.name);
    setDistricts(districts);
  }, [city]);

  return address ? (
    <main className=" font-montserrat">
      {isClicked && (
        <div className="absolute z-10 bg-gray-700 h-[200vh] w-[200vh]"></div>
      )}
      <Header />
      <div>
        <div className="bg-[#fafafa] flex px-[13%] pt-4 justify-between">
          <div className="font-semibold text-[#23A6F0]">SHOPPING CART</div>
          <div>
            <div className="font-semibold text-[#23A6F0]">SHIPPING ADDRESS</div>
            <div className="text-center pt-2">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="w-8 h-8 animate-car"
              />
            </div>
          </div>
          <div className="font-semibold text-[#23A6F0]">PAYMENT</div>
          <div className="font-semibold text-[#23A6F0]">REWIEW ORDER</div>
        </div>
        <div className="flex px-[7%] w-full flex-col gap-4 bg-[#fafafa]">
          <Progress value={50} color="blue" className="" />
        </div>
      </div>
      <div className="flex justify-evenly bg-[#fafafa] py-12">
        <div className="flex flex-wrap justify-between border-2 bg-white shadow-sm w-[750px] h-[670px] overflow-auto gap-y-10 p-10">
          <button
            className="flex flex-col justify-center items-center border p-2 w-[300px] h-[150px] gap-2"
            onClick={() => addAddressForm()}
          >
            <FontAwesomeIcon icon={faPlus} />
            <p>New Address</p>
          </button>
          {showAddAddressForm && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col absolute z-20 top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 border-2 border-blue-400 rounded-sm bg-white p-4 scale-125 gap-4 w-[390px]"
            >
              <button className="text-end text-blue-400">
                <FontAwesomeIcon
                  type="button"
                  icon={faCircleXmark}
                  className="w-[20px] h-[20px]"
                  onClick={() => addAddressForm()}
                />
              </button>
              <div className="flex justify-between gap-4">
                <label>
                  Name
                  <input
                    {...register("name", {
                      required: "Girilmesi zorunlu alan!",
                      minLength: {
                        value: 3,
                        message: "En az 3 karakter girmelisiniz!",
                      },
                    })}
                    className="border w-[170px]"
                  />
                  <p className="text-xs text-red-600">{errors.name?.message}</p>
                </label>
                <label>
                  Surname
                  <input
                    {...register("surname", {
                      required: "Girilmesi zorunlu alan!",
                      minLength: {
                        value: 3,
                        message: "En az 3 karakter girmelisiniz!",
                      },
                    })}
                    className="border w-[170px]"
                  />
                  <p className="text-xs text-red-600">
                    {errors.surname?.message}
                  </p>
                </label>
              </div>
              <div className="flex justify-between gap-4">
                <label>
                  Phone
                  <input
                    {...register("phone", {
                      required: "Girilmesi zorunlu alan!",
                      pattern: {
                        value: /^[0-9]{11}$/,
                        message: "Geçerli bir telefon numarası giriniz!",
                      },
                    })}
                    className="border w-[170px]"
                  />
                  <p className="text-xs text-red-600">
                    {errors.phone?.message}
                  </p>
                </label>
                <label>
                  City
                  <select
                    {...register("city")}
                    onChange={handleCityChange}
                    value={city}
                    className="border w-[170px]"
                  >
                    <option selected disabled></option>
                    {cityNames?.map((city) => (
                      <option value={city} key={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex justify-between gap-4">
                <label>
                  District
                  <select
                    {...register("district")}
                    className="border w-[170px]"
                  >
                    {districts?.map((district) => (
                      <option value={district} key={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Neighborhood
                  <input
                    {...register("neighborhood")}
                    className="border w-[170px]"
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <p>Address</p>
                <label className="flex justify-between">
                  <textarea
                    {...register("address")}
                    className="border w-[370px]"
                  />
                </label>
              </div>
              <div>
                <p>Address Title</p>
                <label>
                  <input
                    {...register("title", {
                      required: "Girilmesi zorunlu alan!",
                      minLength: {
                        value: 2,
                        message: "En az 2 karakter girmelisiniz!",
                      },
                    })}
                    className="border w-full"
                  />
                  <p className="text-xs text-red-600">
                    {errors.title?.message}
                  </p>
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-300 w-[100px] py-2 rounded-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
          {address?.map((addressItem, index) => (
            <button
              key={index}
              className={`flex flex-col border p-2 w-[300px] h-[150px] justify-between ${
                selectedAddress === index
                  ? "border-[3px] border-blue-300 rounded-sm scale-[1.07]"
                  : ""
              }`}
              onClick={() => setSelectedAddress(index)}
            >
              <div className="flex w-[280px] justify-between">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faUser} />
                  <p>{addressItem.title}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>{addressItem.phone}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <p>{addressItem.name}</p>
                <p>{addressItem.surname}</p>
              </div>
              <div>{addressItem.address}</div>
              <div className="flex">
                <p>{addressItem.neighborhood}</p>
                <p>/{addressItem.district}</p>
                <p>/{addressItem.city}</p>
              </div>
            </button>
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
          {selectedAddress !== null ? (
            <div>
              <Link to="/payment-page">
                <button className="bg-blue-300 w-[150px] py-2 rounded hover:scale-105 transition duration-300">
                  <div className="flex items-center">
                    <p>PROCEED TO PAYMENT</p>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="w-6 h-6 pr-2"
                    />
                  </div>
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <button className="bg-blue-300 w-[150px] py-2 rounded cursor-not-allowed opacity-50">
                <div className="flex items-center">
                  <p>PROCEED TO PAYMENT</p>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="w-6 h-6 pr-2"
                  />
                </div>
              </button>
            </div>
          )}
          <Link to="/shopping">
            <button className="bg-blue-300 w-[150px] py-2 rounded hover:scale-105 transition duration-300">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCaretLeft} className="w-6 h-6 pl-2" />
                <p>CONTINUE SHOPPING</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  ) : (
    <p>Loading...</p>
  );
};

export default OrderPage;
