import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Code,
  Flex,
  IconButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
import { SearchModal } from "./SearchModal";

export const Title = ({ children }) => {
  return children;
};
export const SearchField = ({
  variant,
  children,
  TooltipLabel,
  ShortCuts,
  BtnStyles,
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [title, setTitle] = useState();
  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (child.type === Title) {
        setTitle(child.props.children);
      }
    });
  }, [children]);

  return (
    <>
      <SearchModal isOpen={isOpen} onClose={onClose} {...rest} />
      {variant === "Bar" && (
        <Tooltip label={TooltipLabel}>
          <Button
            leftIcon={<BsSearch />}
            variant="outline"
            borderRadius="lg"
            justifyContent="left"
            onClick={onOpen}
            boxShadow="0px 2px 2px 0px  rgba(220, 220, 220, 0.809)"
            {...BtnStyles}
          >
            {title}
            <Flex gap="1" ml="auto">
              {ShortCuts.map((shortcut, index) => {
                return <Code key={index}> {shortcut} </Code>;
              })}
            </Flex>
          </Button>
        </Tooltip>
      )}
      {variant === "IconButton" && (
        <Tooltip label={TooltipLabel}>
          <IconButton onClick={onOpen} {...BtnStyles}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};
SearchField.propTypes = {
  variant: PropTypes.oneOf(["Bar", "IconButton"]).isRequired,
  TooltipLabel: PropTypes.string,
  ShortCuts: PropTypes.arrayOf(PropTypes.string),
};
