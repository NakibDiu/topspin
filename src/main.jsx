import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1440px] xl:mx-auto mx-6 lg:mx-10">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
