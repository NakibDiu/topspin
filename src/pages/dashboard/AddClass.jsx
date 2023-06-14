import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    onSubmit,
  } = useForm();
  const backendUrl = import.meta.env.VITE_backendUrl


  const handleAddClass = (data) => {
    const formData = {
      ...data,
      status: "Pending",
    };
    console.log(formData);
    axios
      .post(`${backendUrl}/classes`, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[80px] bg-orange-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-600">Add Class</h1>
      </div>
      <div className="bg-gray-300 w-full min-h-screen my-10 py-10 bg-gradient-to-br from-gray-50 via-gray-200 to-gray-400">
        <div className="max-w-lg mx-auto border-y-8 border-gray-300 p-6 lg:p-10 rounded-xl shadow-xl bg-white">
          <form
            onSubmit={handleSubmit(handleAddClass)}
            className="max-w-md mx-auto"
          >
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-800"
                htmlFor="name"
              >
                Class Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <span className="text-red-500">Class Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-800"
                htmlFor="image"
              >
                Class Image
              </label>
              <input
                type="text"
                id="image"
                {...register("image", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.image && (
                <span className="text-red-500">Class Image is required</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-800"
                htmlFor="instructorName"
              >
                Instructor Name
              </label>
              <input
                type="text"
                id="instructorName"
                {...register("instructorName", {
                  required: false,
                  defaultValue: user?.displayName,
                  readOnly: true
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-800"
                htmlFor="instructorEmail"
              >
                Instructor Email
              </label>
              <input
                type="email"
                id="instructorEmail"
                {...register("instructorEmail", {
                  required: false,
                  defaultValue: user?.email,
                  readOnly: true
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-800"
                htmlFor="availableSeats"
              >
                Available Seats
              </label>
              <input
                type="number"
                id="availableSeats"
                {...register("availableSeats", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.availableSeats && (
                <span className="text-red-500">
                  Available Seats is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-800"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                {...register("price", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.price && (
                <span className="text-red-500">Price is required</span>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Class
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
