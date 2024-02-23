import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { instanceAxios } from "../api/api";

import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const [page, setPage] = useState(true);
  const [roleOptions, setRoleOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [defaultRole, setDefaultRole] = useState(3);

  const watchPassword = watch("password", "");

  const validatePassword = (value) => {
    // En az 1 tane sayı kontrolü
    const hasNumber = /\d/.test(value);
    // En az 1 tane küçük harf kontrolü
    const hasLowerCase = /[a-z]/.test(value);
    // En az 1 tane büyük harf kontrolü
    const hasUpperCase = /[A-Z]/.test(value);

    if (!hasNumber || !hasLowerCase || !hasUpperCase) {
      return "Şifre en az 1 sayı, 1 küçük harf ve 1 büyük harf içermelidir!";
    }
    return true;
  };

  const validatePasswordMatch = (value) => {
    const password = watchPassword;
    return value === password || "Şifreler eşleşmiyor.";
  };

  const onSubmit = (data) => {
    const { confirmPassword, ...postData } = data;
    console.log("data", postData);
    setLoading(true);
    instanceAxios
      .post("/signup", postData)
      .then((res) => {
        console.log("post", res.data);
        history("/");
      })
      .catch((error) => {
        console.error("Post request failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmitLogin = async (data) => {
    try {
      await dispatch(login(data));
      console.log("returnnnnnnnnnnn", returnToPath);
      if (returnToPath === "/shopping") {
        link(returnToPath);
      } else {
        link("/");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleRoleChange = (e) => {
    setValue("role_id", e.target.value);
    setDefaultRole(e.target.value);
  };

  const togglePage = () => {
    setPage((pageOpen) => !pageOpen);
  };

  useEffect(() => {
    instanceAxios
      .get("/roles")
      .then((response) => {
        setRoleOptions(response.data);
      })
      .catch((error) => {
        console.error("Role options request failed:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div
        className={`flex flex-row justify-center py-12 bg-[#bee1e3] ${
          page ? "" : ""
        }`}
      >
        <div className="bg-[#F5FFFA] w-[900px] rounded-xl flex flex-row justify-center items-center text-xl shadow-xl animate-fade-down animate-once animate-ease-in-out">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-center"
          >
            <div
              className={`absolute top-0 left-0 w-[550px] h-[648px] bg-[url(https://imageio.forbes.com/specials-images/imageserve/63d599d870e2498dea5c856c/Online-shopping/960x0.jpg?format=jpg&width=960)] bg-no-repeat bg-cover z-10 ${
                page ? "animate-slide" : "animate-slide2"
              }`}
            >
              <div className="pt-6">
                <p>BANDAGE</p>
                {page ? (
                  <p>Do you have an account?</p>
                ) : (
                  <p>Do you not have an account?</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => togglePage()}
                className="bg-[#bee1e3] font-bold w-36 h-12 rounded-lg my-6"
              >
                {page ? "LOGIN" : "REGISTER"}
              </button>
            </div>
            <h1 className="text-4xl font-bold pb-8">Sign Up</h1>
            <div className="flex gap-6">
              <label className="flex flex-col gap-2 pt-4">
                <p>Name</p>
                <input
                  type="text"
                  {...register("name", {
                    required: "Girilmesi zorunlu alan!",
                    minLength: {
                      value: 3,
                      message: "En az 3 karakter girmelisiniz!",
                    },
                  })}
                  placeholder=" Name"
                  className="bg-[#bee1e3] rounded-md h-10"
                />
                <p>{errors.name?.message}</p>
              </label>

              <label className="flex flex-col gap-2 pt-4">
                <p>Email</p>
                <input
                  type="text"
                  {...register("email", {
                    required: "Girilmesi zorunlu alan!",
                  })}
                  placeholder=" Email"
                  className="bg-[#bee1e3] rounded-md h-10"
                />
                <p>{errors.email?.message}</p>
              </label>
            </div>
            <div className="flex gap-6">
              <label className="flex flex-col gap-2 pt-4">
                <p>Password</p>
                <input
                  type="password"
                  {...register("password", {
                    required: "Girilmesi zorunlu alan!",
                    minLength: {
                      value: 8,
                      message: "En az 8 karakter girmelisiniz!",
                    },
                    validate: validatePassword,
                  })}
                  placeholder=" Password"
                  className="bg-[#bee1e3] rounded-md h-10"
                />
                <p>{errors.password?.message}</p>
              </label>

              <label className="flex flex-col gap-2 pt-4">
                <p>Confirm Password</p>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Girilmesi zorunlu alan!",
                    validate: validatePasswordMatch,
                  })}
                  placeholder=" Confirm Password"
                  className="bg-[#bee1e3] rounded-md h-10"
                />
                <p>{errors.confirmPassword?.message}</p>
              </label>
            </div>
            <div className="flex justify-center">
              <label className="flex flex-col gap-2 pt-4 pl-2">
                <p>Role</p>
                <select
                  {...register("role_id", {
                    required: "Seçilmesi zorunlu alan!",
                  })}
                  onChange={handleRoleChange}
                  value={defaultRole}
                  className="bg-[#bee1e3] rounded-md h-10"
                >
                  {roleOptions.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                <p>{errors.role_id?.message}</p>
              </label>
            </div>
            {watch("role_id") === "2" && (
              <div>
                <div className="flex gap-6">
                  <label className="flex flex-col gap-2 pt-4">
                    <p>Store Name</p>
                    <input
                      type="text"
                      {...register("store.name", {
                        required: "Girilmesi zorunlu alan!",
                        minLength: {
                          value: 3,
                          message: "En az 3 karakter girmelisiniz!",
                        },
                      })}
                      placeholder=" Store Name"
                      className="bg-[#bee1e3] rounded-md h-10"
                    />
                    <p>{errors.store?.name?.message}</p>
                  </label>

                  <label className="flex flex-col gap-2 pt-4">
                    <p>Store Phone</p>
                    <input
                      type="tel"
                      {...register("store.phone", {
                        required: "Girilmesi zorunlu alan!",
                        pattern: {
                          value: /^[0-9]{11}$/,
                          message: "Geçerli bir telefon numarası giriniz!",
                        },
                      })}
                      placeholder=" Store Phone"
                      className="bg-[#bee1e3] rounded-md h-10"
                    />
                    <p>{errors.store?.phone?.message}</p>
                  </label>
                </div>
                <div>
                  <label className="flex flex-col gap-2 pt-4">
                    <p>Store Tax ID</p>
                    <input
                      type="text"
                      {...register("store.tax_no", {
                        required: "Girilmesi zorunlu alan!",
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message:
                            "Geçerli bir vergi numarası giriniz (TXXXXVXXXXXX)!",
                        },
                      })}
                      placeholder=" Store Tax ID"
                      className="bg-[#bee1e3] rounded-md h-10"
                    />
                    <p>{errors.store?.tax_no?.message}</p>
                  </label>
                </div>
                <div>
                  <label className="flex flex-col gap-2 pt-4">
                    <p>Store Bank Account</p>
                    <input
                      type="text"
                      {...register("store.bank_account", {
                        required: "Girilmesi zorunlu alan!",
                      })}
                      placeholder=" Store Bank Account"
                      className="bg-[#bee1e3] rounded-md h-10"
                    />
                    <p>{errors.store?.bank_account?.message}</p>
                  </label>
                </div>
              </div>
            )}

            <div className="pt-10">
              <button
                className={`bg-[#bee1e3] font-normal w-36 h-12 rounded-lg my-6 ${
                  loading
                    ? "opacity-50 cursor-not-allowed hover:animate-wiggle-more hover:animate-twice"
                    : ""
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "REGISTER"}
              </button>
            </div>
          </form>

          <form onSubmit={handleSubmit(onSubmitLogin)} className="">
            <div className=" h-[648px] w-80 flex flex-col justify-center items-center gap-4 text-xl animate-fade-down animate-once animate-ease-in-out">
              <h1 className="text-4xl font-bold mb-8">Welcome Back</h1>
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder=" Email"
                  className="bg-[#bee1e3] rounded-md h-10"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder=" Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="bg-[#bee1e3] rounded-md h-10"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <Link
                to="/signup-page"
                className="flex text-sm w-[220px] justify-end hover:scale-110 duration-200 transition"
              >
                Forgot password?
              </Link>
              <button
                type="submit"
                className="bg-[#bee1e3] w-24 h-10 rounded-lg my-6 hover:animate-wiggle-more hover:animate-infinite"
              >
                Log In
              </button>
              <div className="flex gap-2">
                <p className="text-base">Don't have an account?</p>
                <Link
                  to="/signup-page"
                  className="flex text-base text-blue-gray-600 font-bold justify-end hover:scale-110 duration-200 transition"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
