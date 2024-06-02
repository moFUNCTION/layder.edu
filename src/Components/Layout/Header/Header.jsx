import {
  Avatar,
  Button,
  Flex,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { FaBars } from "react-icons/fa";
import { UseUserData } from "../../../Context/UserDataProvider/UserDataProvider";
import { GrNotification } from "react-icons/gr";
import { SearchIcon } from "@chakra-ui/icons";
import { BsChat } from "react-icons/bs";
import { SearchField, Title } from "../SearchField/SearchField";
export const Header = () => {
  const { user } = UseUserData();
  const [isPhoneQuery] = useMediaQuery("(max-width: 900px)");
  const [isSmallPhoneQuery] = useMediaQuery("(max-width: 700px)");
  return (
    <Flex
      as="header"
      paddingBlock="3"
      paddingInline="5"
      alignItems="center"
      justifyContent={isSmallPhoneQuery ? "center" : "space-between"}
      gap="5"
      flexWrap="wrap"
    >
      <Flex w="fit-content" gap="3" alignItems="center">
        <IconButton borderRadius="full">
          <FaBars />
        </IconButton>
        <Logo w="150px" />
      </Flex>
      {!isPhoneQuery && (
        <SearchField
          variant="Bar"
          BtnStyles={{
            w: "100%",
            maxW: "500px",
          }}
          ShortCuts={["CTRL", "U"]}
        >
          <Title>Search for a room</Title>
        </SearchField>
      )}
      <Flex alignItems="center" gap="2">
        {user.data ? (
          <>
            {isPhoneQuery && (
              <SearchField
                variant="IconButton"
                BtnStyles={{ borderRadius: "full", colorScheme: "blue" }}
              />
            )}
            <IconButton borderRadius="full" colorScheme="blue">
              <GrNotification />
            </IconButton>
            <IconButton colorScheme="blue" borderRadius="full">
              <BsChat />
            </IconButton>
            <IconButton size="md" borderRadius="full" p="1">
              <Avatar src={user.data?.photoURL} w="100%" h="100%" />
            </IconButton>
          </>
        ) : (
          <>
            <Button
              isLoading={user.loading}
              colorScheme="blue"
              borderRadius="full"
            >
              Login
            </Button>
            <Button
              isLoading={user.loading}
              variant="outline"
              colorScheme="blue"
              borderRadius="full"
            >
              Sign up
            </Button>
            <IconButton size="md" borderRadius="full" p="1">
              <Avatar w="100%" h="100%" />
            </IconButton>
          </>
        )}
      </Flex>
    </Flex>
  );
};
