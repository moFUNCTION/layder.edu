import { CircularProgress } from "@chakra-ui/react";
import React from "react";

export const CircularProgressCentered = () => {
  return (
    <CircularProgress
      sx={{
        translate: "-50% -50%",
        pos: "fixed",
        top: "50%",
        left: "50%",
        zIndex: "100000",
      }}
      isIndeterminate
      zIndex="100000"
    />
  );
};
