import { Heading, Stack, Image, Flex, Button } from "@chakra-ui/react";
import React from "react";
import LogoImage from "../../../Assets/Logo/Untitled_design-removebg-preview.png";

export const AccountExist = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minH="calc(100vh - 68px)"
      bgColor="blue.600"
      p="10px"
    >
      <Stack
        w="100%"
        maxW="600px"
        bgColor="white"
        p="4"
        borderRadius="lg"
        alignItems="center"
      >
        <Flex alignItems="center" gap="1" mb="5">
          <Image src={LogoImage} w="40px" />
          <Heading
            size="md"
            as="h3"
            textTransform="capitalize"
            color="blue.700"
            p="2"
          >
            You already have an account
          </Heading>
        </Flex>
        <Button w="100%" colorScheme="blue">
          Return Home
        </Button>
        <Button w="100%" colorScheme="red">
          Sign out
        </Button>
      </Stack>
    </Stack>
  );
};
