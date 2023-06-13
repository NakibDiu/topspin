import React from "react";
import useSelectedClass from "../../hooks/useSelectedClass";

const SelectedClass = () => {
  const { refetch, selectedClass, isLoading } = useSelectedClass();

  const handleDelelte = (id) => {
    console.log(id);
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[80px] bg-orange-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-600">Selected Class</h1>
      </div>
      <div className="my-4">
        {isLoading ? (
          <div>
            <progress className="progress progress-accent w-56"></progress>
          </div>
        ) : (
          <div className="space-y-5">
            {selectedClass.map((cls) => {
              const { image, name, price, _id, availableSeats } = cls;
              return (
                <div
                  key={_id}
                  className="w-full border flex flex-col md:flex-row items-center justify-between gap-y-3 px-3 py-5 shadow-md rounded-md"
                >
                  <div className="avatar">
                    <div className="mask mask-squircle w-2/3 mx-auto md:w-12 md:h-12 md:mx-0"> 
                      <img src={image} alt={name} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900">{name}</h2>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg text-gray-500">{price}$</p>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg text-gray-500">
                      {availableSeats} seats
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <button className="btn btn-sm md:btn-md btn-success">
                      pay
                    </button>
                    <button
                      className="btn btn-error btn-sm md:btn-md text-white"
                      onClick={() => handleDelelte(_id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedClass;
