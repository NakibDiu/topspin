import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";

const ManageUsers = () => {
  const {
    isLoading,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/users`);
      return response.json();
    },
  });

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
                {/* row 1 */}
                {users.map((user, index) => {
                  return (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td className="flex flex-col md:flex-row gap-2 items-center justify-center">
                        <button className="btn btn-sm btn-info">admin</button>
                        <button className="btn btn-sm btn-warning">instructor</button>
                        <button className="btn btn-sm btn-error">
                          <FaTrashAlt />
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
