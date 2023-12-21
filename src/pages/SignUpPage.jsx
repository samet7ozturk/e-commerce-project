import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const [roleOptions, setRoleOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [defaultRole, setDefaultRole] = useState("");

  console.log(errors);
  console.log(loading);

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
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/signup", postData)
      .then((res) => {
        console.log("post", res.data);
        localStorage.setItem("token", res.data.token);
        history("/");
      })
      .catch((error) => {
        console.error("Post request failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRoleChange = (e) => {
    setValue("role_id", e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => {
        setRoleOptions(response.data);
        if (response.data.length > 0) {
          setDefaultRole(response.data[2].id);
        }
      })
      .catch((error) => {
        console.error("Role options request failed:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center py-12 bg-[url(https://previews.123rf.com/images/annaleni/annaleni1510/annaleni151000066/46604184-thin-line-retail-e-commerce-online-business-seamless-blue-pattern-vector-shopping-and-marketplace.jpg)] bg-opacity-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="backdrop-blur-sm w-[600px] rounded-xl flex flex-col justify-center items-center text-xl shadow-xl animate-fade-down animate-once animate-ease-in-out py-6"
        >
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
                className="bg-blue-100 rounded-md h-10"
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
                className="bg-blue-100 rounded-md h-10"
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
                className="bg-blue-100 rounded-md h-10"
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
                className="bg-blue-100 rounded-md h-10"
              />
              <p>{errors.confirmPassword?.message}</p>
            </label>
          </div>
          <div className="flex w-[526px]">
            <label className="flex flex-col gap-2 pt-4">
              <p>Role</p>
              <select
                {...register("role_id", {
                  required: "Seçilmesi zorunlu alan!",
                })}
                onChange={handleRoleChange}
                value={defaultRole}
                className="bg-blue-100 rounded-md h-10"
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
                    className="bg-blue-100 rounded-md h-10"
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
                        value: /^[0-9]{10}$/,
                        message: "Geçerli bir telefon numarası giriniz!",
                      },
                    })}
                    placeholder=" Store Phone"
                    className="bg-blue-100 rounded-md h-10"
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
                    className="bg-blue-100 rounded-md h-10"
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
                    className="bg-blue-100 rounded-md h-10"
                  />
                  <p>{errors.store?.bank_account?.message}</p>
                </label>
              </div>
            </div>
          )}

          <div className="pt-10">
            <button
              className={`bg-blue-100 font-semibold w-36 h-12 rounded-lg my-6 ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:animate-wiggle-more hover:animate-twice"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "REGISTER"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
