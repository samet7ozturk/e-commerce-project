import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/thunkAction";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useNavigate();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data));
      history("/");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500"
    >
      <div className="bg-white h-[600px] w-80 rounded-xl flex flex-col justify-center items-center gap-4 text-xl shadow-xl animate-fade-down animate-once animate-ease-in-out">
        <h1 className="text-4xl font-bold mb-8">Welcome back</h1>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
            placeholder=" Email"
            className="bg-blue-100 rounded-md h-10"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            placeholder=" Password"
            {...register("password", { required: "Password is required" })}
            className="bg-blue-100 rounded-md h-10"
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
          className="bg-blue-100 w-24 h-10 rounded-lg my-6 hover:animate-wiggle-more hover:animate-infinite"
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
  );
};

export default LoginForm;
