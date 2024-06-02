import {
  Heading,
  Stack,
  Image,
  Flex,
  Input,
  Button,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import LogoImage from "../../../Assets/Logo/Untitled_design-removebg-preview.png";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Login() {
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
        borderRadius="lg"
        p="10px"
        border="1px"
        borderColor="gray.400"
        alignItems="center"
        justifyContent="center"
        gap="3"
        className="login"
        pos="relative"
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
            Login To your account
          </Heading>
        </Flex>
        <Input placeholder="email or username" />
        <Input placeholder="password" />
        <Button variant="link" color="gray.600" mr="auto" ml="10px">
          Forgot Your Password
        </Button>
        <Flex
          alignItems="center"
          color="gray.500"
          mr="auto"
          ml="10px"
          size="sm"
          textTransform="capitalize"
          flexWrap="wrap"
          gap="2"
        >
          <Heading color="gray.500" size="sm">
            you dont have an account please
          </Heading>
          <Button variant="link" as={Link} to="/register">
            Sign up
          </Button>
        </Flex>
        <Button w="100%" colorScheme="blue">
          Sign In
        </Button>
        <ButtonGroup>
          <IconButton colorScheme="red">
            <BsGoogle />
          </IconButton>
          <IconButton colorScheme="facebook">
            <FaFacebook />
          </IconButton>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
