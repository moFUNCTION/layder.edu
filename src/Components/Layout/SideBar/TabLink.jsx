import React from "react";
import { Button } from "@chakra-ui/react";
export const TabLink = ({ icon, title, href }) => {
  return (
    <Button
      variant="ghost"
      size="lg"
      justifyContent="left"
      alignItems="center"
      gap="4"
      overflowWrap="break-word"
    >
      <span
        style={{
          fontSize: "meduim",
        }}
      >
        {icon}
      </span>

      <span
        style={{
          fontSize: "medium",
          overflowWrap: "break-word",
          whiteSpace: "wrap",
          textAlign: "left",
        }}
      >
        {title}
      </span>
    </Button>
  );
};
