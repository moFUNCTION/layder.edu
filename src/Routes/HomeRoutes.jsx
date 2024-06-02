import { Suspense, lazy } from "react";
import { CircularProgressCentered } from "../Components/Layout/CircularProgressCentered/CircularProgressCentered";
import { CircularProgress, Flex } from "@chakra-ui/react";
import { SideBar } from "../Components/Layout/SideBar/SideBar";
import { SkeletonLoading } from "../Components/Layout/SkeletonLoading/SkeletonLoading";

// home route
const Home = lazy(() => import("../Pages/Home/Home"));
export const HomeRoutes = [
  {
    index: true,
    path: ["/", "/main", "/home"],
    element: (
      <Suspense fallback={<SkeletonLoading />}>
        <Home />
      </Suspense>
    ),
  },
];
