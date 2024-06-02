import {
  Heading,
  Stack,
  Flex,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import AnimationData from "../../../../Assets/Hero/Animation - 1716340546231.json";
import Lottie from "lottie-react";
import styles from "./styles.module.css";
import { SearchBtn } from "../../../../Components/Layout/SearchBtn/SearchBtn";
import { AnimatedWrapper } from "../../../../Utils/AnimatedWrapper/AnimatedWrapper";
import { UseUserData } from "../../../../Context/UserDataProvider/UserDataProvider";
export const Hero = () => {
  const { user } = UseUserData();
  return (
    <Flex
      minH="calc(100vh - 68px)"
      justifyContent="center"
      alignItems="center"
      as="section"
      pos="relative"
      flexWrap="wrap-reverse"
      p="10px"
    >
      <Stack as="article" maxW="400px">
        <Heading as="h2">
          Layder Elevate Education with Virtual Classrooms
        </Heading>
        <Flex gap="2" mt="10px" w="100%">
          {!user.data ? (
            <Button
              isLoading={user.loading}
              variant="outline"
              bgColor="white"
              colorScheme="blue"
              flexFlow="1"
            >
              Sign Up
            </Button>
          ) : (
            <Button flexGrow="1" variant="outline" colorScheme="blue">
              Hi {user.data?.displayName?.split(" ")[0]} 👋
            </Button>
          )}
          {user?.data?.role === "student" ? (
            <Button colorScheme="blue">Navifate To the Main site</Button>
          ) : (
            <Button flexGrow="1" colorScheme="blue">
              Create your first Virtual Room
            </Button>
          )}
        </Flex>
        <SearchBtn bgColor="white" variant="Bar">
          Search for a room
        </SearchBtn>
      </Stack>
      <AnimatedWrapper>
        <Lottie
          style={{
            width: "100%",
            maxWidth: "500px",
          }}
          animationData={AnimationData}
        />
      </AnimatedWrapper>

      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles["shape-fill"]}
          />
        </svg>
      </div>
    </Flex>
  );
};
