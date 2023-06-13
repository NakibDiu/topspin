import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import InstructorsPage from "../pages/instructors/InstructorsPage";
import ClassesPage from "../pages/classes/ClassesPage";
import Dashboard from "../layout/Dashboard";
import SelectedClass from "../pages/dashboard/SelectedClass";
import EnrolledClass from "../pages/dashboard/EnrolledClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
      {
        path: "/classes",
        element: <ClassesPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "selectedClass",
        element: <SelectedClass />,
      },
      {
        path: "enrolledClass",
        element: <EnrolledClass />,
      },
    ],
  },
]);
