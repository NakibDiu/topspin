import React, { useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaUsers,
  FaMoneyBillAlt,
  FaChair,
} from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useSelectedClass from "../../hooks/useSelectedClass";

const ClassCard = ({ classData }) => {
  const { user } = useContext(AuthContext);
  const { refetch } = useSelectedClass();
  const {
    name,
    image,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
    numOfStudents,
    _id,
  } = classData;

  const cardStyle = availableSeats === 0 ? "bg-red-400" : "bg-white";
  const buttonDisabled = availableSeats === 0;
  const backendUrl = import.meta.env.VITE_backendUrl


  const handleSelect = (classData) => {
    if (user && user.email) {
      const selectedClass = {
        classId: _id,
        name,
        image,
        price,
        availableSeats,
        email: user.email,
      };
      fetch(`${backendUrl}/selected`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Thank You For Selecting.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (data.message) {
            Swal.fire({
              icon: "warning",
              title: data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please Login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg ${cardStyle} transform transition duration-300 hover:scale-105`}
      data-aos="fade-up-left"
      data-aos-duration="1000"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <div className="flex items-center mb-2">
          <FaUser className="text-gray-600 mr-2" />
          <p className="text-sm text-gray-600">{instructorName}</p>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-gray-600 mr-2" />
          <p className="text-sm text-gray-600">{instructorEmail}</p>
        </div>
        <div className="flex items-center mb-2">
          <FaChair className="text-gray-600 mr-2" />
          <p
            className={`text-sm text-gray-600 ${
              availableSeats === 0 ? "line-through" : ""
            }`}
          >
            Available Seats: {availableSeats}
          </p>
        </div>
        <div className="flex items-center mb-2">
          <FaMoneyBillAlt className="text-gray-600 mr-2" />
          <p className="text-sm text-gray-600">Price: ${price}</p>
        </div>
        <div className="flex items-center mb-2">
          <FaUsers className="text-gray-600 mr-2" />
          <p className="text-sm text-gray-600">
            Number of Students: {numOfStudents}
          </p>
        </div>
        <button
          className={`btn mt-4 ${
            buttonDisabled ? "bg-gray-400 cursor-not-allowed" : "button"
          }`}
          disabled={buttonDisabled}
          onClick={() => handleSelect(classData)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
