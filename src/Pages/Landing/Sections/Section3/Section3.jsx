import { Flex, Stack, Heading, Box } from "@chakra-ui/react";
import React from "react";
import { FeutureBox } from "./Components/FeutureBox";
import { AnimatedText } from "../../../../Utils/AnimatedText/AnimatedText";
import styles from "./styles.module.css";
export const Section3 = () => {
  return (
    <Stack pos="relative" alignItems="center" p="10px">
      <AnimatedText spacing="10px">
        <Heading
          color="gray.700"
          as="h3"
          borderBottom="2px"
          borderBottomColor="gray.500"
          p="10px"
          animatedwordheight="40px"
        >
          What we provide
        </Heading>
      </AnimatedText>

      <Flex
        gap="10"
        mt="5"
        justifyContent="center"
        alignContent="center"
        flexWrap="wrap"
      >
        {list.map((child, index) => {
          return (
            <FeutureBox key={index} text={child.text} title={child.title} />
          );
        })}
      </Flex>
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
    </Stack>
  );
};
const list = [
  {
    title: "Virtual Classrooms",
    text: `Virtual Classrooms:
    Easily set up and customize virtual rooms that serve as comprehensive digital classrooms.
    Intuitive interface allowing teachers to organize and manage multiple classes seamlessly.
     `,
  },
  {
    title: "Lesson and Quiz Uploads",
    text: `
    Upload and share a variety of educational content, including lesson plans, presentations, videos, and interactive quizzes.
    Support for multiple file formats ensures teachers can provide rich, diverse educational materials.
    `,
  },
  {
    title: "Live Streams",
    text: `
    Conduct live teaching sessions with real-time video streaming.
Engage students through interactive lessons, virtual demonstrations, and immediate feedback.
    `,
  },
  {
    title: "Student Interaction",
    text: `
    Integrated chat functionality enables direct communication between teachers and students.
Foster a collaborative learning environment with group discussions, Q&A sessions, and personalized support.
    `,
  },
  {
    title: "Accessibility",
    text: `
    Students can join virtual rooms from any location, ensuring access to education regardless of geographical barriers.
Mobile-friendly design allows for learning on-the-go, accommodating diverse student lifestyles.
    `,
  },
  {
    title: "Enhanced Learning Experience",
    text: `
    Layder's comprehensive tools create an immersive and interactive educational experience, catering to various learning styles.
    `,
  },
  {
    title: "Flexible Teaching Methods",
    text: `
    Teachers can combine live instruction with digital resources, providing a balanced and versatile teaching approach.
    `,
  },
  {
    title: "Improved Student Engagement",
    text: `
    Interactive features and real-time communication foster greater student participation and motivation.
    `,
  },
  {
    title: "Efficient Class Management",
    text: `
    Streamlined tools for content delivery, student interaction, and performance tracking save time and reduce administrative burden.
    `,
  },
];
