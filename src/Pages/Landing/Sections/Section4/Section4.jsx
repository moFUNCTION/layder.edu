import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Image,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { SearchBtn } from "./../../../../Components/Layout/SearchBtn/SearchBtn";
import Lottie from "lottie-react";
import AnimationData from "../../../../Assets/Landing_Section4/Animation - 1716539814139.json";
import { AnimatedWrapper } from "../../../../Utils/AnimatedWrapper/AnimatedWrapper";
import styles from "./styles.module.css";
export const Section4 = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="#5c9bee"
      p="4"
      gap="7"
      pos="relative"
      overflow="hidden"
      flexWrap="wrap"
      zIndex="1"
    >
      <Stack maxW="400px">
        <Heading color="white" as="h3" size="lg" sx={{ fontWeight: "700" }}>
          Why do you wait !!?
        </Heading>
        <Heading size="md" color="gray.100" textTransform="capitalize">
          Join us Now and get ready for the journey of success
        </Heading>
        <Flex gap="2" flexWrap="wrap" mt="10px">
          <Button
            flexGrow="1"
            variant="outline"
            bgColor="white"
            colorScheme="blue"
          >
            Join us Now
          </Button>
          <SearchBtn flexGrow="1" bgColor="white" variant="Bar">
            search for a room
          </SearchBtn>
        </Flex>
      </Stack>
      <AnimatedWrapper>
        <Lottie
          style={{
            width: "100%",
            maxWidth: "400px",
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
