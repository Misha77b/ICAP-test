import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/notFound/NotFoundPage";

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
    ],
  },
]);
