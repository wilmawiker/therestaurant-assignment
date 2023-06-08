import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./scss/main.scss";
import LandingPage from "./views/LandingPage";
import BookingPage from "./views/BookingPage";
import Layout from "./components/Layout";
import AdminPage from "./views/AdminPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "/admin",
        element: <AdminPage></AdminPage>,
      },
      {
        path: "/book",
        element: <BookingPage></BookingPage>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
