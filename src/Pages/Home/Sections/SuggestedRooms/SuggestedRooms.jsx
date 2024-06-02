import React from "react";
import { Carousel } from "../../../../Components/Layout/Carousel/Carousel";
import { Button, Heading, Stack } from "@chakra-ui/react";
import { RoomCard } from "../../../../Components/Common/RoomCard/RoomCard";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { BsArrowRight } from "react-icons/bs";

export const SuggestedRooms = () => {
  return (
    <Stack p="5" borderRadius="lg" w="100%" alignItems="start">
      <Button
        _hover={{
          borderRadius: "20px",
          gap: "3",
        }}
        transition="0.3s"
        gap="2"
        colorScheme="blue"
        variant="outline"
        bgColor="white"
      >
        For you
        <BsArrowRight />
      </Button>
      <Carousel
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        onReachEnd={() => {
          console.log("hello world");
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => {
          return <RoomCard key={index} />;
        })}
      </Carousel>
      <Button
        _hover={{
          borderRadius: "20px",
          gap: "4",
        }}
        transition="0.3s"
        gap="3"
        m="0 auto"
        colorScheme="blue"
        variant="outline"
      >
        Show all <ArrowDownIcon />
      </Button>
    </Stack>
  );
};
