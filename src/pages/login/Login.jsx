import { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithEmail, signInWithGoogle, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (data) => {
    loginWithEmail(data.email, data.password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((userInfo) => {
        const newUser = userInfo.user;
        // console.log(newUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen my-10 py-10 bg-gradient-to-br from-yellow-100 via-orange-200 to-red-300">
      <div className="max-w-lg  mx-auto  border-y-8 border-gray-300 p-6 lg:p-10 rounded-xl shadow-xl bg-white">
        <h1 className="text-center text-3xl lg:text-5xl font-bold">Log in</h1>
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Email <span className="text-base text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Password <span className="text-base text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:border-orange-500">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 focus:outline-none"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                className="flex items-center px-3 py-2 text-gray-600 focus:outline-none"
                onClick={handleTogglePassword}
              >
                {showPassword ? <>hide</> : <>show</>}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div className="mb-4">
            <button className="btn button" type="submit" disabled={loading}>
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/register" className="text-orange-500 hover:underline">
            Don't have an account? Register here.
          </Link>
        </div>
        <hr className="my-6 w-4/5 mx-auto" />
        <div className="flex justify-center items-center">
          <button className="btn btn-circle" onClick={handleGoogleSignUp} disabled={loading}>
            <BsGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
