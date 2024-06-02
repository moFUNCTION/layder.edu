import {
  Button,
  Flex,
  Heading,
  Stack,
  Image,
  CircularProgress,
} from "@chakra-ui/react";
import React from "react";
import LogoImage from "../../../Assets/Logo/Untitled_design-removebg-preview.png";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { EmailIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { FaUserSecret } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { UseUserData } from "../../../Context/UserDataProvider/UserDataProvider";
import { CircularProgressCentered } from "../../../Components/Layout/CircularProgressCentered/CircularProgressCentered";
import { AccountExist } from "../AccountExist/AccountExist";
export default function Index() {
  const { user } = UseUserData();
  if (user.loading) {
    return <CircularProgressCentered />;
  }
  if (user.data && !user.loading) {
    return <AccountExist />;
  }
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minH="calc(100vh - 68px)"
      bgColor="blue.600"
      p="10px"
    >
      <Stack
        alignItems="center"
        borderRadius="lg"
        w="100%"
        maxW="500px"
        p="3"
        bgColor="white"
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
            Create an Account
          </Heading>
        </Flex>
        <Button
          as={Link}
          to="email"
          colorScheme="teal"
          gap="2"
          alignItems="center"
          w="100%"
        >
          Create account With Email
          <EmailIcon />
        </Button>
        <Button gap="2" alignItems="center" w="100%">
          Create account With Google
          <FcGoogle />
        </Button>
        <Button colorScheme="blue" gap="2" alignItems="center" w="100%">
          Create account With Facebook <BsFacebook />
        </Button>
        <Button variant="outline" gap="2" alignItems="center" w="100%">
          Create account as Anonymous <FaUserSecret />
        </Button>
      </Stack>
    </Stack>
  );
}
