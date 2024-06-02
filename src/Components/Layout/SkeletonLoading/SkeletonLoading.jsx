import {
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const SkeletonLoading = () => {
  return (
    <Stack w="100%" h="100%" p="10px">
      <SkeletonText noOfLines={2} />
      <Flex overflow="hidden" gap="5" mt="5">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Skeleton
              flexShrink="0"
              key={index}
              w="100%"
              maxW="300px"
              h="300px"
            />
          );
        })}
      </Flex>
      <SkeletonText mt="5" noOfLines={2} />
      <Flex gap="5" mt="5" overflow="hidden">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Skeleton
              flexShrink="0"
              key={index}
              w="100%"
              maxW="300px"
              h="300px"
            />
          );
        })}
      </Flex>
    </Stack>
  );
};
