import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = React.lazy(() => import("./App"));
const Signup = React.lazy(() => import("./pages/SignUp"));
const Login = React.lazy(() => import("./pages/login"));
const Forgotpassword = React.lazy(() => import("./pages/forgotpassword"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  { path: "/forgotpassword", element: <Forgotpassword /> },

  {
    path: "/login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
