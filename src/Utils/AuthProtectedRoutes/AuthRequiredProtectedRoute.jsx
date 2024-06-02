import React from "react";
import { UseUserData } from "../../Context/UserDataProvider/UserDataProvider";
import { Navigate } from "react-router-dom";
import { Heading, Stack } from "@chakra-ui/react";
import { CircularProgressCentered } from "../../Components/Layout/CircularProgressCentered/CircularProgressCentered";

export const AuthRequiredProtectedRoute = ({ children }) => {
  const { user } = UseUserData();
  if (user.loading) {
    return <CircularProgressCentered />;
  }
  if (!user.data) {
    return (
      <Stack>
        <Heading>Auth Required</Heading>
      </Stack>
    );
  }
  return children;
};
