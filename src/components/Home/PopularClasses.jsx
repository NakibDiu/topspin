import { useEffect, useState } from "react";
import classes from "../../assets/data/classes.json";
import { FiUserCheck } from "react-icons/fi";
import { MdEventAvailable } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const popular = [...classes]
    .sort((a, b) => (a.numOfStudents < b.numOfStudents ? 1 : -1))
    .slice(0, 6);

  return (
    <div className="my-16 w-full">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
        Popular Classes
      </h2>
      <p className="mt-4  text-xl text-gray-500 text-center">
        Here are some of the most popular classes in the camp.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-10 my-10">
        {popular.map((item, index) => (
          <div className="card w-full bg-base-100 shadow-xl image-full h-[250px]">
            <figure>
              <img src={item.image} alt="Shoes" className="w-full h-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.instructorName}</p>
              <div className="flex gap-8">
                <div className="flex flex-col justify-center items-center">
                  <FiUserCheck size={24} />
                  <p>{item.numOfStudents}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <MdEventAvailable size={24} />
                  <p>{item.availableSeats}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <ImPriceTags size={24} />
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn button">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/classes"
        className="flex justify-center items-center w-fit mx-auto btn button"
      >
        <button>See More</button>
      </Link>
    </div>
  );
};

export default PopularClasses;
