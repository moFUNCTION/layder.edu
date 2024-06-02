import React, { Suspense, lazy } from "react";
import { CircularProgressCentered } from "../Components/Layout/CircularProgressCentered/CircularProgressCentered";

// Auth routes
const Login = lazy(() => import("../Pages/Auth/Login/Login"));
const Register = lazy(() => import("../Pages/Auth/Register/Index"));
const RegisterWithEmail = lazy(() =>
  import("../Pages/Auth/Register/RegisterWithEmail/Index")
);
export const AuthRoutes = [
  {
    path: ["login", "signIn"],
    element: (
      <Suspense fallback={<CircularProgressCentered />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: ["register", "signup"],
    element: (
      <Suspense fallback={<CircularProgressCentered />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: ["register/email", "signup/email"],
    element: (
      <Suspense fallback={<CircularProgressCentered />}>
        <RegisterWithEmail />
      </Suspense>
    ),
  },
];
