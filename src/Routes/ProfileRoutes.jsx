import { Suspense, lazy } from "react";
import { CircularProgressCentered } from "../Components/Layout/CircularProgressCentered/CircularProgressCentered";
import { AuthRequiredProtectedRoute } from "../Utils/AuthProtectedRoutes/AuthRequiredProtectedRoute";
const UserProfile = lazy(() => import("../Pages/UserProfile/UserProfile"));
export const ProfileRoutes = [
  {
    path: ["/user", "/account"],
    element: (
      <AuthRequiredProtectedRoute>
        <Suspense fallback={<CircularProgressCentered />}>
          <UserProfile />
        </Suspense>
      </AuthRequiredProtectedRoute>
    ),
  },
];
