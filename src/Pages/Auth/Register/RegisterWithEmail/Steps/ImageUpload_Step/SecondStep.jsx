import { Stack, Image, ButtonGroup, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { ImageUploader } from "../../../../../../Components/Common/ImageUploader/ImageUploader";
import MalePhoto from "../../../../../../Assets/ImageUploader/undraw_male_avatar_g98d.svg";
import AnimationData from "../../../../../../Assets/Register/Animation - 1716578068923 (1).json";
import Lottie from "lottie-react";
export const ImageUpload_Step = ({ setValue, image }) => {
  const HandleChange = (file) => {
    setValue("image", file);
  };
  const HandleRemoveChange = () => {
    setValue("image", "");
  };
  return (
    <Stack w="100%" gap="3">
      <Heading
        size="sm"
        borderBottom="2px"
        borderBottomColor="blue.800"
        p="8px"
        color="blue.700"
      >
        *Optional
      </Heading>
      <ImageUploader
        colorScheme="orange"
        img={image}
        onChange={HandleChange}
        onRemove={HandleRemoveChange}
      >
        <Lottie
          animationData={AnimationData}
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      </ImageUploader>
    </Stack>
  );
};
