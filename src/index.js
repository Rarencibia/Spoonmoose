import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/main.css';
import App from './App';
import About from './pages/About';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "About",
        element: <About />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

