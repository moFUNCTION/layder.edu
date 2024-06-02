import { ArrowRightIcon, ChatIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Divider, Heading, Stack, Tab, Tabs } from "@chakra-ui/react";
import React from "react";
import { BsChat, BsHouse, BsPeople } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { RiCalendarTodoFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdInterests } from "react-icons/md";
import { GrLocation, GrNotification } from "react-icons/gr";
import styles from "./styles.module.css";
import { TabLink } from "./TabLink";
export const SideBar = () => {
  return (
    <Stack
      sx={{
        "> *": {
          flexShrink: "0",
        },
      }}
      overflow="auto"
      gap="3"
      p="10px"
      w="250px"
      className={styles["side-bar"]}
    >
      {MainLinks.map((link, index) => {
        return <TabLink key={index} {...link} />;
      })}
      <Divider color="gray.200" />
      <Button justifyContent="left" variant="ghost" gap="3">
        For you <MdOutlineKeyboardArrowRight />
      </Button>
      {UserAccountRelevantLinks.map((link, index) => {
        return <TabLink key={index} {...link} />;
      })}
      <Divider color="gray.200" />
      <Button justifyContent="left" variant="ghost" gap="2">
        Explore <FaFireFlameCurved />
      </Button>
      {ExploreLinks.map((link, index) => {
        return <TabLink key={index} {...link} />;
      })}
    </Stack>
  );
};
const MainLinks = [
  {
    title: "Home",
    href: "/",
    icon: <BsHouse />,
  },
  { title: "Society", href: "/society", icon: <BsPeople /> },
  {
    title: "Chats",
    href: "/chat",
    icon: <BsChat />,
  },
  {
    title: "Subscribtions",
    href: "/subscribedRooms",
    icon: <MdOutlineSubscriptions />,
  },
];
const UserAccountRelevantLinks = [
  {
    title: "Your Account",
    href: "/user",
    icon: <AiOutlineUser />,
  },
  {
    title: "Notifications",
    href: "/user/notifications",
    icon: <GrNotification />,
  },
  {
    title: "Todo List",
    href: "/user/todo-list",
    icon: <RiCalendarTodoFill />,
  },
  {
    title: "History",
    href: "/user/history",
    icon: <SearchIcon />,
  },
  {
    title: "Joined Rooms",
    href: "/subscribedRooms",
    icon: <MdOutlineSubscriptions />,
  },
  {
    title: "Created Rooms",
    href: "/user/RoomsCreated",
    icon: <SiGoogleclassroom />,
  },
];
const ExploreLinks = [
  {
    title: "match your interests",
    href: "/",
    icon: <MdInterests />,
  },
  {
    title: "Near to your location",
    href: "/",
    icon: <GrLocation />,
  },
];
