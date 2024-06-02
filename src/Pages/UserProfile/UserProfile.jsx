import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { UseUserData } from "../../Context/UserDataProvider/UserDataProvider";
import { GrCamera, GrCloudUpload } from "react-icons/gr";
export default function UserProfile() {
  const { user } = UseUserData();
  return (
    <Stack>
      <Flex p="3">
        <Flex
          pos="relative"
          w="fit-content"
          h="fit-content"
          borderRadius="full"
          p="1"
          bgColor="gray.100"
          cursor="pointer"
          _hover={{
            ".icon": {
              opacity: "1",
            },
          }}
        >
          <Flex
            pos="absolute"
            w="100%"
            h="100%"
            bgColor="rgba(0, 0, 0, 0.7)"
            borderRadius="full"
            inset="0px"
            justifyContent="center"
            alignItems="center"
            zIndex="1000"
            color="white"
            className="icon"
            opacity="0"
            transition="0.3s"
          >
            <GrCamera style={{ fontSize: "20px" }} />
          </Flex>
          <Avatar
            name={user.data?.displayName.split("")[0]}
            src={user.data?.photoURL}
            size="2xl"
          />
        </Flex>
      </Flex>
    </Stack>
  );
}
