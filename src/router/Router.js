import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import LogIn from "../pages/login/LogIn";
import Table from "../pages/table/Table";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      //   login
      {
        path: "/log-in",
        element: <LogIn />,
      },
      //   table
      {
        path: "/table",
        element: <Table />,
      },
    ],
  },
]);
