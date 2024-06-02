import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Input,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
export const ImageUploader = ({
  children,
  img,
  onChange,
  onRemove,
  colorScheme,
}) => {
  const renderedImage = useMemo(() => {
    return img && img instanceof File ? URL.createObjectURL(img) : img;
  }, [img]);
  const [isLoadeed, setIsLoaded] = useState(false);
  return (
    <Stack
      w="100%"
      bgColor={renderedImage ? "green.100" : "orange.100"}
      borderRadius="lg"
      justifyContent="center"
      alignItems="center"
      border="1px"
      borderColor={renderedImage ? "green.700" : "orange.700"}
      p="3"
      pos="relative"
      overflow="hidden"
      _before={{
        content: `""`,
        pos: "absolute",
        w: "100px",
        h: "100px",
        bgColor: renderedImage ? "green.300" : "orange.300",
        opacity: "0.3",
        bottom: "-20px",
        right: "-20px",
        borderRadius: "50%",
        zIndex: "-1",
      }}
      _after={{
        content: `""`,
        pos: "absolute",
        w: "100px",
        h: "100px",
        bgColor: renderedImage ? "green.300" : "orange.300",
        opacity: "0.3",
        bottom: "15px",
        right: "-40px",
        borderRadius: "50%",
        zIndex: "-1",
      }}
      zIndex="1"
    >
      {renderedImage ? (
        <>
          <Box
            as={Skeleton}
            isLoaded={isLoadeed}
            fadeDuration={1}
            minH="100px"
            overflow="hidden"
            _hover={{
              img: {
                transform: "scale(1.05)",
                filter: "saturate(1.1)",
              },
            }}
            border="1px"
            borderColor="gray.500"
            borderRadius="lg"
            bgColor="gray.100"
          >
            <Image
              w="100%"
              onLoad={() => setIsLoaded(true)}
              maxW="200px"
              src={renderedImage}
              transition="0.3s"
              bgColor="white"
            />
          </Box>
          <ButtonGroup mt="10px">
            <Button colorScheme="green" as="label" htmlFor="1" cursor="pointer">
              <Input
                type="file"
                hidden
                id="1"
                onChange={(e) => onChange(e.target.files[0])}
              />
              Change Image
            </Button>
            <Button onClick={onRemove} colorScheme="red" cursor="pointer">
              Remove Image
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          {children}
          <Button
            colorScheme={colorScheme}
            as="label"
            htmlFor="1"
            cursor="pointer"
          >
            <Input
              type="file"
              hidden
              id="1"
              onChange={(e) => onChange(e.target.files[0])}
            />
            Upload an Image
          </Button>
        </>
      )}
    </Stack>
  );
};
