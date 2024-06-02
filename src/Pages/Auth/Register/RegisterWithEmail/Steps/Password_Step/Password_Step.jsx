import { ButtonGroup, Input, Stack, Button, Text } from "@chakra-ui/react";
import React from "react";

export const Password_Step = ({ register, errors }) => {
  return (
    <Stack w="100%" gap="3">
      <Input {...register("password")} placeholder="password" />
      {errors.password && (
        <Text ml="1" color="red">
          {errors.password.message}
        </Text>
      )}
      <Input {...register("confirmPassword")} placeholder="confirm password" />
      {errors.confirmPassword && (
        <Text ml="1" color="red">
          {errors.confirmPassword.message}
        </Text>
      )}
    </Stack>
  );
};
