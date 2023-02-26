import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Provider/Context";

const App = React.lazy(() => import("./App"));
const Signup = React.lazy(() => import("./pages/SignUp"));
const Login = React.lazy(() => import("./pages/login"));
const Forgotpassword = React.lazy(() => import("./pages/Forgotpassword"));
const OtpVerify = React.lazy(() => import("./pages/OtpVerify"));
const ChangePass = React.lazy(() => import("./pages/changePass"));

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
  {
    path: "/otpverify",
    element: <OtpVerify />,
  },
  {
    path: "/changePassword",
    element: <ChangePass />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      {" "}
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
);
