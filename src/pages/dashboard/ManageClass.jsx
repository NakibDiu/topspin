import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageClass = () => {
  const backendUrl = import.meta.env.VITE_backendUrl
  const {
    isLoading,
    refetch,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await fetch(`${backendUrl}/classes`);
      return response.json();
    },
  });


  const handleChangeStatus = (cls, updatedStatus) => {
    fetch(`${backendUrl}/classes/status/${cls._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: updatedStatus,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `Status has been updated`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-[80px] bg-orange-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-600">All Classes</h1>
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
                  <th>Image</th>
                  <th>Name</th>
                  <th className="text-center">Instructor</th>
                  <th className="text-center">Available Seats</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls, index) => {
                  const {
                    _id,
                    name,
                    image,
                    instructorName,
                    instructorEmail,
                    availableSeats,
                    price,
                    status,
                  } = cls;
                  return (
                    <tr key={cls._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt={name} />
                          </div>
                        </div>
                      </td>
                      <td>{name}</td>
                      <td>
                        {instructorName}
                        <br />
                        {instructorEmail}
                        <br />
                      </td>
                      <td>{availableSeats}</td>
                      <td>{price}</td>
                      <td className="flex flex-col  gap-2 items-center justify-center">
                        <button
                          className="btn btn-sm btn-info"
                          onClick={() => handleChangeStatus(cls, "Pending")}
                          disabled={cls.status === "Pending"}
                        >
                          pending
                        </button>
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => handleChangeStatus(cls, "Approved")}
                          disabled={cls.status === "Approved"}
                        >
                          approved
                        </button>
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() => handleChangeStatus(cls, "Denied")}
                          disabled={cls.status === "Denied"}
                        >
                          denied
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

export default ManageClass;
