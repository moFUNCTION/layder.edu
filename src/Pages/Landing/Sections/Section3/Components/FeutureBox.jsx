import { Box, Heading } from "@chakra-ui/react";
import React, { useRef } from "react";
import "./styles.css";
import { useInView } from "framer-motion";
export const FeutureBox = ({ text, title }) => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <Box
      ref={ref}
      w="100%"
      maxW="400px"
      border="2px"
      borderColor="gray.400"
      p="10px"
      borderRadius="lg"
      pos="relative"
      pt="35px"
      flexGrow="1"
      transition="0.3s"
      opacity={inView ? 1 : 0}
      _hover={{
        transform: "scale(0.95)",
        bgColor: "gray.50",
      }}
      bgColor="white"
    >
      <div className="ribbon">{title}</div>
      <Heading as="h4" size="md">
        {text}
      </Heading>
    </Box>
  );
};
