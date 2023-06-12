import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserWithEmail, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (data) => {
    console.log(data.name, data.photoUrl);
    createUserWithEmail(data.email, data.password)
      .then((userInfo) => {
        const newUser = userInfo.user;
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            console.log(newUser);
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Created Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((userInfo) => {
        const newUser = userInfo.user;
        console.log(newUser);
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Created Successfully",
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
    <div className="bg-gray-300 w-full min-h-screen my-10 py-10 bg-gradient-to-br from-cyan-50 via-sky-200 to-blue-400">
      <div className="max-w-lg mx-auto border-y-8 border-gray-300 p-6 lg:p-10 rounded-xl shadow-xl bg-white">
        <h1 className="text-center text-3xl lg:text-5xl font-bold">Register</h1>
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Name <span className="text-base text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
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
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
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
            <div className="flex items-center border border-gray-300 rounded focus-within:border-sky-500">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 focus:outline-none"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).*$/,
                })}
              />
              <button
                type="button"
                className="flex items-center px-3 py-2 text-gray-600 focus:outline-none"
                onClick={handleTogglePassword}
              >
                {showPassword ? <>hide</> : <>show</>}
              </button>
            </div>
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-500">
                Password must be at least 6 characters long
              </span>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <span className="text-red-500">
                Password must contain at least one capital letter, one special
                character, and one digit
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Confirm Password <span className="text-base text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">Passwords do not match</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoUrl"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Photo URL <span className="text-base text-red-500">*</span>
            </label>
            <input
              type="text"
              id="photoUrl"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              {...register("photoUrl", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              {...register("gender")}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              {...register("phoneNumber")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block mb-2 text-gray-800 font-semibold"
            >
              Address
            </label>
            <textarea
              id="address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              {...register("address")}
            ></textarea>
          </div>
          <div className="mb-4">
            <button className="btn button" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/login" className="text-sky-500 hover:underline">
            Already have an account? Login here.
          </Link>
        </div>
        <hr className="my-6 w-4/5 mx-auto" />
        <div className="flex justify-center items-center">
          <button className="btn btn-circle" onClick={handleGoogleSignUp}>
            <BsGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
