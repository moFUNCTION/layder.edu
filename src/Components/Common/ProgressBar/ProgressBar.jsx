import {
  Box,
  Button,
  Flex,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import SuccessAnimation from "../../../Assets/ProgressBar/Animation - 1716663803621.json";
import Lottie from "lottie-react";
import { numberToOrdinal } from "../../../Utils/NumberToOrdinal/NumberToOrdinal";
export const ProgressBar = ({ steps, colortheme, size, current, ...rest }) => {
  return (
    <Flex gap="3" {...rest}>
      {Array.from({ length: steps }).map((_, index) => {
        return (
          <Flex alignItems="center" gap="2" key={index}>
            <Tooltip label={`${numberToOrdinal(index + 1)} step `}>
              <IconButton
                size={size}
                borderRadius="full"
                colorScheme={index + 1 < current ? "green" : "blue"}
                variant={index + 1 <= current ? "solid" : "outline"}
                transition="0.3s"
                pos="relative"
              >
                {index + 1 < current ? (
                  <Lottie
                    animationData={SuccessAnimation}
                    loop={false}
                    style={{
                      position: "absolute",
                      inset: "0px",
                      width: "100%",
                      height: "100%",
                      flexGrow: "1",
                    }}
                  />
                ) : (
                  <span>{index + 1}</span>
                )}
              </IconButton>
            </Tooltip>
            {index + 1 !== steps && <BsArrowRight style={{ color: "blue" }} />}
          </Flex>
        );
      })}
    </Flex>
  );
};
