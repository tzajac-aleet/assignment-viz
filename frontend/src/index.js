import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { loader as dashboardLoader } from "./dashboard";
import Root from "./root";
import Viz, { loader as vizLoader } from "./viz";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import "maplibre-gl/dist/maplibre-gl.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "/:id",
        element: <Viz />,
        loader: vizLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
