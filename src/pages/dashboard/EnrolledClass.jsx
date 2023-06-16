import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "react-query";

const EnrolledClass = () => {
  // const backendUrl = import.meta.env.VITE_backendUrl
  const backendUrl = "http://localhost:5000";
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    data: enrolledClasses = [],
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `${backendUrl}/payments?email=${user?.email}`
      );
      return response.json();
    },
  });

  return (
    <div>
      <div className="w-full min-h-[80px] bg-orange-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-600">
          Enrolled Courses: {enrolledClasses.length}
        </h1>
      </div>
      <div className="my-4">
        {isLoading ? (
          <div>
            <progress className="progress progress-accent w-56"></progress>
          </div>
        ) : enrolledClasses.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-y-4">
            <h1>No Class is Selected !</h1>
            <Link to="/classes" className="btn btn-accent btn-md">
              Go to Classes
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {enrolledClasses.map((cls) => {
              const { classImage, className, price, _id, status } = cls;
              return (
                <div
                  key={_id}
                  className="w-full border flex flex-col md:flex-row items-center justify-between gap-y-3 px-3 py-5 shadow-md rounded-md"
                >
                  <div className="avatar">
                    <div className="mask mask-squircle w-2/3 mx-auto md:w-12 md:h-12 md:mx-0">
                      <img src={classImage ? classImage : ""} alt={className} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                      {className}
                    </h2>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg text-gray-500">{price}$</p>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg badge badge-accent text-white badge-lg ">
                      {status}
                    </p>
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

export default EnrolledClass;
