import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/thunkAction";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data));
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500"
    >
      <div className="bg-white h-[500px] w-80 rounded-xl flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold mb-8">Welcome back</h1>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
            placeholder="Email"
            className="bg-blue-100 rounded-xl"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="bg-blue-100 rounded-xl"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="border-2 border-blue-300 bg-blue-100 w-24 h-8 rounded-xl mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
