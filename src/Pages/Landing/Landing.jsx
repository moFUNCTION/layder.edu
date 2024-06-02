import React, { useEffect } from "react";
import { Hero } from "./Sections/Hero/Hero";
import { Heading, Stack } from "@chakra-ui/react";
import { Section2 } from "./Sections/Section2/Section2";
import { Section3 } from "./Sections/Section3/Section3";
import { Section4 } from "./Sections/Section4/Section4";
import { useAuthNavigationModalState } from "../../Context/AuthNavigationModalProvider/AuthNavigationModalProvider";
import { UseUserData } from "../../Context/UserDataProvider/UserDataProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgressCentered } from "./../../Components/Layout/CircularProgressCentered/CircularProgressCentered";
import { Footer } from "../../Components/Layout/Footer/Footer";
export default function Landing() {
  const { onOpenAuthNavigationModal } = useAuthNavigationModalState();
  const { user } = UseUserData();
  const location = useLocation();
  useEffect(() => {
    (function showAuthModal() {
      setTimeout(() => {
        if (
          !user.data &&
          !user.loading &&
          !sessionStorage.getItem("isAuthModalShowen")
        ) {
          onOpenAuthNavigationModal();
          sessionStorage.setItem("isAuthModalShowen", true);
        }
      }, 5000);
    })();
  }, []);

  if (user.data) {
    return <Navigate to="/main" state={{ from: location }} replace />;
  }

  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
