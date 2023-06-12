import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const location = useLocation();
  const noNavFooter =
    location.pathname === "/login" || location.pathname === "/register";

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div>
      {!noNavFooter && <Navbar />}
      <Outlet />
      {!noNavFooter && <Footer />}
    </div>
  );
};
export default MainLayout;
