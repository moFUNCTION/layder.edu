import { Box, Flex, Heading, useRadio } from "@chakra-ui/react";
import React from "react";

export const RadioElement = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label" className="animated translate opactiy">
      <input {...input} />
      <Flex
        {...checkbox}
        bgColor="white"
        border="2px"
        borderColor="blue.600"
        color="blue.600"
        borderRadius="lg"
        w="100%"
        p="3"
        alignItems="center"
        gap="3"
        transition="0.2s"
        cursor="pointer"
        _hover={{
          bgColor: "gray.100",
          borderColor: "blue.600",
          transform: "scale(1.02)",
          color: "blue.600",
        }}
        _checked={{
          bg: "blue.600",
          color: "white",
        }}
        pos="relative"
      >
        {props.icon}
        <Heading textTransform="capitalize" size="md">
          {props.title}
        </Heading>
      </Flex>
    </Box>
  );
};
