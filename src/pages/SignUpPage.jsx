import React from "react";
import { useForm } from "react-hook-form";
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

  console.log(errors);

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
    console.log("data", data);
    axios
      .post("https://workinteck-fe-final.onrender.com/signup", data)
      .then((res) => {
        console.log("post", res);
        localStorage.setItem("token", res.data.token);
      });
  };

  const handleRoleChange = (e) => {
    setValue("role_id", e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center py-12">
        <h1 className="text-[#252B42] text-3xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
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
                placeholder="Name"
                className="border-2 border-[#23A6F0] w-64 h-8"
              />
              <p>{errors.name?.message}</p>
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-2 pt-4">
              <p>Email</p>
              <input
                type="text"
                {...register("email", {
                  required: "Girilmesi zorunlu alan!",
                })}
                placeholder="Email"
                className="border-2 border-[#23A6F0] w-64 h-8"
              />
              <p>{errors.email?.message}</p>
            </label>
          </div>
          <div>
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
                placeholder="First Name"
                className="border-2 border-[#23A6F0] w-64 h-8"
              />
              <p>{errors.password?.message}</p>
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-2 pt-4">
              <p>Confirm Password</p>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Girilmesi zorunlu alan!",
                  validate: validatePasswordMatch,
                })}
                placeholder="Confirm Password"
                className="border-2 border-[#23A6F0] w-64 h-8"
              />
              <p>{errors.confirmPassword?.message}</p>
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-2 pt-4">
              <p>Role</p>
              <select
                {...register("role_id", {
                  required: "Seçilmesi zorunlu alan!",
                })}
                onChange={handleRoleChange}
                className="border-2 border-[#23A6F0] w-64 h-8"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="store">Store</option>
              </select>
              <p>{errors.role_id?.message}</p>
            </label>
          </div>
          {watch("role_id") === "store" && (
            <>
              <div>
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
                    placeholder="Store Name"
                    className="border-2 border-[#23A6F0] w-64 h-8"
                  />
                  <p>{errors.store?.name?.message}</p>
                </label>
              </div>
              <div>
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
                    placeholder="Store Phone"
                    className="border-2 border-[#23A6F0] w-64 h-8"
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
                    placeholder="Store Tax ID"
                    className="border-2 border-[#23A6F0] w-64 h-8"
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
                      // Burada uygun bir IBAN validasyonu kullanmanız gerekebilir.
                    })}
                    placeholder="Store Bank Account"
                    className="border-2 border-[#23A6F0] w-64 h-8"
                  />
                  <p>{errors.store?.bank_account?.message}</p>
                </label>
              </div>
            </>
          )}

          <div className="pt-10">
            <button
              className="border-2 border-[#23A6F0] rounded-md w-20 h-10"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
