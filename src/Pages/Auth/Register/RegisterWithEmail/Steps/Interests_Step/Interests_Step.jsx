import {
  Flex,
  Heading,
  Icon,
  Stack,
  Image,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SubjectBtn } from "./SubjectBtn";

export const Interests_Step = ({
  fields,
  append,
  prepend,
  remove,
  swap,
  move,
  insert,
  errors,
}) => {
  const [size, setSize] = useState({
    start: 0,
    limit: 5,
  });
  const HandleNext = () => {
    if (size.limit < schoolSubjects.length) {
      setSize((prev) => {
        return {
          start: prev.start + 5,
          limit: prev.limit + 5,
        };
      });
    }
  };
  const HandlePrev = () => {
    if (size.start !== 0) {
      setSize((prev) => {
        return {
          start: prev.start - 5,
          limit: prev.limit - 5,
        };
      });
    }
  };
  const HandleAddToInterests = (value) => {
    append({
      value,
    });
  };
  const HandleRemoveFromInterses = (index) => {
    remove(index);
  };
  return (
    <Stack gap="3" w="100%" overflow="hidden">
      <Heading
        size="md"
        color="blue.800"
        borderBottom="2px"
        borderBottomColor="blue.800"
        p="10px"
      >
        Choose What you are interested in
      </Heading>
      {fields.length < 2 && errors.interests && (
        <Text ml="1" color="red">
          {errors.interests.message}
        </Text>
      )}
      {schoolSubjects.slice(size.start, size.limit).map((subject, index) => {
        const matchedField = fields?.find(
          (field) => field.value === subject.title.toUpperCase()
        );
        return (
          <SubjectBtn
            key={index + size.start}
            title={subject.title}
            icon={subject.icon}
            isActive={matchedField}
            onClick={() =>
              !matchedField && HandleAddToInterests(subject.title.toUpperCase())
            }
            onRemove={() =>
              HandleRemoveFromInterses(fields.indexOf(matchedField))
            }
          />
        );
      })}
      <ButtonGroup>
        <Button
          gap="3"
          alignItems="center"
          flexGrow="1"
          colorScheme="blue"
          variant="outline"
          onClick={HandlePrev}
          isDisabled={size.start === 0}
        >
          <BsArrowLeft />
          Prev
        </Button>
        <Button
          onClick={HandleNext}
          gap="3"
          alignItems="center"
          flexGrow="1"
          colorScheme="blue"
          isDisabled={size.limit >= schoolSubjects.length}
        >
          See more subjects
          <BsArrowRight />
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
const schoolSubjects = [
  {
    title: "Mathematics",
    icon: "https://img.icons8.com/ios/50/000000/calculator.png",
  },
  {
    title: "Science",
    icon: "https://img.icons8.com/ios/50/000000/test-tube.png",
  },
  {
    title: "English",
    icon: "https://img.icons8.com/ios/50/000000/book.png",
  },
  {
    title: "History",
    icon: "https://img.icons8.com/ios/50/000000/historical.png",
  },
  {
    title: "Geography",
    icon: "https://img.icons8.com/ios/50/000000/geography.png",
  },
  {
    title: "Biology",
    icon: "https://img.icons8.com/ios/50/000000/microscope.png", // Updated valid icon for Biology
  },
  {
    title: "Physics",
    icon: "https://img.icons8.com/ios/50/000000/physics-book.png", // Updated valid icon for Physics
  },
  {
    title: "Chemistry",
    icon: "https://img.icons8.com/ios/50/000000/chemical-plant.png",
  },
  {
    title: "Physical Education",
    icon: "https://img.icons8.com/ios/50/000000/gymnastics.png", // Updated valid icon for Physical Education
  },
  {
    title: "Art",
    icon: "https://img.icons8.com/ios/50/000000/paint-palette.png",
  },
  {
    title: "Music",
    icon: "https://img.icons8.com/ios/50/000000/musical-notes.png",
  },
  {
    title: "Computer Science",
    icon: "https://img.icons8.com/ios/50/000000/computer.png",
  },
  {
    title: "Economics",
    icon: "https://img.icons8.com/ios/50/000000/economic-improvement.png",
  },
  {
    title: "Foreign Language",
    icon: "https://img.icons8.com/ios/50/000000/language.png",
  },
  {
    title: "Social Studies",
    icon: "https://img.icons8.com/ios/50/000000/classroom.png",
  },
];
