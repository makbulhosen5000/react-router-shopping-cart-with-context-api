import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './assets/components/Home/Home';
import Main from './assets/components/Layouts/Main';
import OrderReview from './assets/components/OrderReview/OrderReview';
import Grandpa from './assets/components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "order",
        element: <OrderReview />,
      },
      {
        path: "grandpa",
        element: <Grandpa/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
