import React from "react";
import logo from "../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {/* navbar on small screen/lg */}
        <div className="justify-between  bg-gray-300 my-5 rounded-md navbar lg:hidden">
          <div className="flex-none">
            <button className=""></button>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <img src={logo} alt="logo" />
            </button>
          </div>
        </div>
        {/* navbar ends */}

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-orange-200 text-base-content py-10 space-y-2">
          {/* Sidebar content here */}
          <li className=" font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" font-semibold">
            <NavLink to="/dashboard/selectedClass">Selected Class</NavLink>
          </li>
          <li className=" font-semibold">
            <NavLink to="/dashboard/enrolledClass">Enrolled Class</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
