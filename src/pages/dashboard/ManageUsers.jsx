import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const {
    isLoading,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${backendUrl}/users`);
      return response.json();
    },
  });
  const backendUrl = import.meta.env.VITE_backendUrl

  const makeAdmin = (user) => {
    fetch(`${backendUrl}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const makeInstructor = (user) => {
    fetch(`${backendUrl}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is an instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[80px] bg-orange-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-600">All Users</h1>
      </div>
      <div className="my-4">
        {isLoading ? (
          <div>
            <progress className="progress progress-accent w-56"></progress>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>email</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td className="flex flex-col md:flex-row gap-2 items-center justify-center">
                        <button
                          className="btn btn-sm btn-info"
                          onClick={() => makeAdmin(user)}
                          disabled={user.role === "admin"}
                        >
                          admin
                        </button>
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => makeInstructor(user)}
                          disabled={user.role === "instructor"}
                        >
                          instructor
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
