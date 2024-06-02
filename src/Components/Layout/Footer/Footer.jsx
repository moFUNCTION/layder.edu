import {
  Grid,
  GridItem,
  Stack,
  Flex,
  Heading,
  Button,
  ButtonGroup,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { BsGooglePlay, BsYoutube } from "react-icons/bs";
import { IoIosAppstore } from "react-icons/io";
import { BiSmile } from "react-icons/bi";

export const Footer = ({ ...rest }) => {
  const [isPhoneQuery] = useMediaQuery("(max-width: 800px)");
  return (
    <Grid
      templateColumns={isPhoneQuery ? "repeat(1,1fr)" : "repeat(3, 1fr)"}
      bgColor="white"
      gridAutoRows="350px"
      p="10px"
      {...rest}
      gap="3"
    >
      <GridItem
        p="10px"
        as={Stack}
        borderRadius="lg"
        gap="0"
        bgColor="gray.100"
      >
        <Flex justifyContent="space-between">
          <Logo w="100px" />
          <Heading size="md" color="blue.700">
            @we make learning different
          </Heading>
        </Flex>
        <Heading
          mt="5"
          size="md"
          color="gray.700"
          borderBottom="1px"
          borderBottomColor="gray.700"
          p="1"
          mb="3"
        >
          Links
        </Heading>
        {links.map((link, index) => {
          return (
            <Heading
              mt="1"
              size="sm"
              p="2"
              borderBottom="1px"
              borderBottomColor="blue.800"
              color="blue.800"
              key={index}
              textTransform="capitalize"
              as={Link}
              to={link.href}
              _hover={{
                bgColor: "blue.700",
                color: "white",
                pl: "4",
              }}
              transition="0.2s"
            >
              {link.title}
            </Heading>
          );
        })}
      </GridItem>
      <GridItem p="10px" as={Stack} borderRadius="lg" bgColor="gray.100">
        <Heading
          color="blue.800"
          size="md"
          borderBottom="1px"
          borderBottomColor="blue.800"
          p="2"
        >
          @Our services
        </Heading>
        <Flex mt="4" gap="3" flexWrap="wrap">
          {services.map((service, index) => {
            return (
              <Button colorScheme="blue" variant="outline" key={index}>
                {service}
              </Button>
            );
          })}
        </Flex>
      </GridItem>
      <GridItem
        justifyContent="center"
        alignItems="center"
        as={Stack}
        borderRadius="lg"
        bgColor="gray.100"
        pos="relative"
      >
        <Heading size="md" color="blue.800">
          Powered by Layder
        </Heading>
        <ButtonGroup mt="3">
          <IconButton colorScheme="blue">
            <BsGooglePlay />
          </IconButton>
          <IconButton variant="outline" bgColor="white">
            <IoIosAppstore />
          </IconButton>
          <IconButton colorScheme="red">
            <BsYoutube />
          </IconButton>
          <IconButton colorScheme="blue">
            <BiSmile />
          </IconButton>
        </ButtonGroup>
        <Heading
          color="blue.800"
          size="sm"
          pos="absolute"
          bottom="10px"
          right="10px"
        >
          @copy right Layder
        </Heading>
      </GridItem>
    </Grid>
  );
};
const services = [
  "Virtual classrooms",
  "Quizes",
  "Courses",
  "Forums",
  "Marketplaces",
  "Competition",
];
const links = [
  {
    title: "Sign up",
    href: "/register",
  },
  {
    title: "login",
    href: "/login",
  },
  { title: "search for a room", href: "/main" },
  { title: "create your first virtual room", href: "/main/create" },
  { title: "pricing", href: "/pricing" },
];
