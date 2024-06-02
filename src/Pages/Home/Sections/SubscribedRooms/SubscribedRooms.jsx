import React from "react";
import { Carousel } from "../../../../Components/Layout/Carousel/Carousel";
import { Button, Heading, Stack } from "@chakra-ui/react";
import { RoomCard } from "../../../../Components/Common/RoomCard/RoomCard";
import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { BsArrowRight } from "react-icons/bs";

export const SubscribedRooms = () => {
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
        Subscribed Rooms <BsArrowRight />
      </Button>
      <Carousel
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 20,
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
