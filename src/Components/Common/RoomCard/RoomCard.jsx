import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Avatar,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import LogoImage from "../../../Assets/Logo/LAYDER-removebg-preview (2).png";
import Logo from "../../../Assets/Logo/Untitled_design-removebg-preview.png";
export const RoomCard = () => {
  return (
    <Card
      _hover={{
        transform: "scale(.95)",
      }}
      _active={{
        transform: "scale(1)",
      }}
      transition="0.3s"
      w="100%"
      border="1px"
      borderColor="gray.300"
      cursor="pointer"
    >
      <CardBody>
        <Image
          src={LogoImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          maxH="150px"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Flex gap="3" bgColor="gray.100" p="3" borderRadius="lg">
            <Tooltip label="mrs heba">
              <IconButton size="md" borderRadius="full">
                <Avatar bgColor="white" size="sm" src={Logo} />
              </IconButton>
            </Tooltip>
            <Stack gap="1" alignItems="start">
              <Heading size="sm">Biology room</Heading>
              <Heading size="xs">By mrs heba</Heading>
            </Stack>
          </Flex>
        </Stack>
      </CardBody>
      <Divider color="gray.400" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Go to room
          </Button>
          <Button variant="outline" colorScheme="blue">
            View statics
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
