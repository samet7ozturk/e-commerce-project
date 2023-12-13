import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

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

  const watchPassword = watch("password", "");

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

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center py-12">
        <h1 className="text-[#252B42] text-3xl font-bold">Üye Ol</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="flex flex-col gap-2 pt-4">
              <p>Name</p>
              <input
                type="text"
                {...register("name", {
                  required: "Girilmesi zorunlu alan!",
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
              <p>PASSWORD</p>
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
          <select
            {...register("gender", {
              required: "Seçilmesi zorunlu alan!",
            })}
            className="mt-4"
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <p>{errors.gender?.message}</p>
          </select>
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
