import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const { user, loading, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Log out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  const listItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-base font-medium"
              : "text-base font-medium text-[#374151]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-base font-medium"
              : "text-base font-medium text-[#374151]"
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-base font-medium"
              : "text-base font-medium text-[#374151]"
          }
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-base font-medium"
                  : "text-base font-medium text-[#374151]"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-gray-100 to-gray-200 my-2 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {listItems}
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl hidden lg:block">
          <img src={logo} alt="logo" className="w-20 h-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listItems}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <button className="btn btn-circle btn-sm" onClick={toggleTheme}>
          {theme === "light" ? (
            <MdOutlineDarkMode size={28} />
          ) : (
            <MdDarkMode size={28} />
          )}
        </button>

        {
        loading ? <progress className="progress progress-info w-20"></progress> :
        user ? (
          <>
            <button className="btn btn-circle">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                title={user.displayName}
                className="w-full h-full rounded-full"
              />
            </button>
            <button className="btn button" onClick={handleLogOut}>
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
