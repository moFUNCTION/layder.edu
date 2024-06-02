import { CircularProgressCentered } from "../Components/Layout/CircularProgressCentered/CircularProgressCentered";
import { Footer } from "../Components/Layout/Footer/Footer";
import { Suspense, lazy } from "react";
// landing routes
const Landing = lazy(() => import("../Pages/Landing/Landing"));
export const landingRoutes = [
  {
    path: ["/", "/landing"],
    index: true,
    element: (
      <>
        <Suspense fallback={<CircularProgressCentered />}>
          <Landing />,
        </Suspense>
      </>
    ),
  },
];
