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
export const Results = ({ children }) => {
  return children.map((child, index) => {
    return <Flex key={index}>{child.title}</Flex>;
  });
};
export const SearchField = ({
  variant,
  children,
  TooltipLabel,
  ShortCuts,
  ShortCutsListener,
  BtnStyles,
  ShowModalAsCenterd,
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState();
  const [SearchResults, setSearchResults] = useState();
  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (child.type === Title) {
        setTitle(child.props.children);
      } else if (child.type === Results) {
        setSearchResults(child.props.children);
      }
    });
  }, [children]);
  return (
    <>
      <SearchModal
        isCentered={ShowModalAsCenterd}
        isOpen={isOpen}
        onClose={onClose}
        {...rest}
      >
        {SearchResults}
      </SearchModal>
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
