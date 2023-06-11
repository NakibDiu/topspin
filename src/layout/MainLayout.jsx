import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noNavFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!noNavFooter && <Navbar />}
      <Outlet />
      {!noNavFooter && <Footer />}
    </div>
  );
};
export default MainLayout;
