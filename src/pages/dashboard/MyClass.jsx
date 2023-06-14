import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

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
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th className="text-center">Seats</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, index) => {
                const {_id, image, price, availableSeats, status, name } = cls
                return (
                  <tr key={_id}>
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle w-2/3 mx-auto md:w-12 md:h-12 md:mx-0">
                          <img src={image} alt={name} />
                        </div>
                      </div>
                    </th>
                    <td>
                      <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                        {name}
                      </h2>
                    </td>
                    <td>
                      <p className="text-sm md:text-lg text-gray-500">
                        {price}$
                      </p>
                    </td>
                    <td>
                      <p className="text-sm md:text-lg text-gray-500">
                        {availableSeats}
                      </p>
                    </td>
                    <td>
                      <button className="btn btn-sm md:btn-md btn-success btn-outline">
                        {status}
                      </button>
                    </td>
                    <td className="flex flex-col md:flex-row gap-2 items-center justify-center">
                      <Link
                        className="btn btn-accent btn-sm md:btn-md text-white"
                        to={`/dashboard/myClass/${_id}`}
                      >
                        update
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyClass;
