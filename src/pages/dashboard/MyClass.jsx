import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "react-query";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const backendUrl = import.meta.env.VITE_backendUrl;

  const {
    isLoading,
    refetch,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const response = await fetch(`${backendUrl}/classes/${user?.email}`);
      return response.json();
    },
  });

  return (
    <div className="w-full">
      <div className="w-full min-h-[80px] bg-orange-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-600">My Classes</h1>
      </div>
      <div className="my-4">
        {isLoading ? (
          <div>
            <progress className="progress progress-accent w-56"></progress>
          </div>
        ) : (
          <div className="space-y-5">
            {classes.map((cls) => {
              const { image, name, price, _id, availableSeats, status } = cls;
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
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                      {name}
                    </h2>
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
                      {status}
                    </button>
                    <button
                      className="btn btn-accent btn-sm md:btn-md text-white"
                      onClick={() => handleDelelte(cls)}
                    >
                      update
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

export default MyClass;
