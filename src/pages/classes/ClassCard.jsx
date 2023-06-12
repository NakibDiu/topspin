import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaUsers,
  FaMoneyBillAlt,
  FaChair,
} from "react-icons/fa";

const ClassCard = ({ classData }) => {
  const {
    name,
    image,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
    numOfStudents,
  } = classData;

  const cardStyle = availableSeats === 0 ? "bg-red-400" : "bg-white";
  const buttonDisabled = availableSeats === 0;

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
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
