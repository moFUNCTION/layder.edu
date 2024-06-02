import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { GiCancel } from "react-icons/gi";

export const SubjectBtn = ({ title, icon, isActive, onRemove, ...rest }) => {
  return (
    <Button
      as={Flex}
      className="animated translate opactiy"
      size="lg"
      justifyContent="space-between"
      alignItems="center"
      p="5"
      variant={isActive ? "solid" : "outline"}
      bgColor={!isActive && "gray.50"}
      colorScheme={isActive && "green"}
      cursor="pointer"
      {...rest}
    >
      <Flex gap="2" alignItems="center">
        {isActive && (
          <IconButton
            onClick={onRemove}
            size="sm"
            sx={{
              bgColor: "transparent !important",
            }}
            color="white"
          >
            <CloseIcon />
          </IconButton>
        )}
        {title}
      </Flex>

      <Image w="30px" filter={isActive && "invert(1)"} src={icon} />
    </Button>
  );
};
