import { Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";
const SideBarContext = createContext();
export const SideBarProvider = ({ children }) => {
  const {
    isOpen: isExpanded,
    onOpen: onExpand,
    onClose: onUnExpand,
  } = useDisclosure();
  const [isPhoneQuery] = useMediaQuery("(max-width: 800px)");
  const variant = isPhoneQuery ? "fixed" : "collapsible ";

  return (
    <SideBarContext.Provider
      value={{ onExpand, onUnExpand, isExpanded, variant }}
    >
      <Flex
        h="100%"
        justifyContent="center"
        sx={{
          "> div": {
            overflow: "auto",
          },
        }}
        overflow="hidden"
      >
        {children}
      </Flex>
    </SideBarContext.Provider>
  );
};
export const useSideBarStatus = () => {
  return useContext(SideBarContext);
};
