import { Button, ButtonGroup, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";
import AnimationData from "../../../../Assets/Landing_Section2/Animation - 1716489831073.json";
import Lottie from "lottie-react";
import { AnimatedWrapper } from "../../../../Utils/AnimatedWrapper/AnimatedWrapper";
import { AnimatedText } from "../../../../Utils/AnimatedText/AnimatedText";
export const Section2 = () => {
  return (
    <Flex
      flexWrap="wrap-reverse"
      p="10px"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      gap="3"
    >
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          />
        </svg>
      </div>
      <Stack w="100%" maxW="500px">
        <AnimatedText spacing="6px">
          <Heading as="h3" size="md">
            Layder is an innovative educational platform designed to transform
            the teaching and learning experience. With Layder, teachers gain the
            power to create dynamic virtual rooms that function as complete
            educational environments, tailored to their unique teaching styles
            and their students' learning needs.
          </Heading>
        </AnimatedText>
      </Stack>
      <AnimatedWrapper>
        <Lottie
          style={{ w: "100%", maxWidth: "600px" }}
          animationData={AnimationData}
        />
      </AnimatedWrapper>
    </Flex>
  );
};
