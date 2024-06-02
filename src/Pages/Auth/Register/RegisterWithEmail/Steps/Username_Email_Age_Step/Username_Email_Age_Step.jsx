import { Button, Input, Modal, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
export const Username_Email_Age_Step = ({ register, errors }) => {
  return (
    <Stack w="100%" gap="3">
      <Input
        isInvalid={errors.username}
        {...register("username")}
        placeholder="Username"
      />
      {errors.username && (
        <Text ml="1" color="red">
          {errors.username.message}
        </Text>
      )}
      <Input
        isInvalid={errors.email}
        {...register("email")}
        placeholder="Email"
      />
      {errors.email && (
        <Text ml="1" color="red">
          {errors.email.message}
        </Text>
      )}
      <Input
        type="number"
        min={0}
        max={100}
        isInvalid={errors.age}
        {...register("age", {
          valueAsNumber: true,
        })}
        placeholder="Age"
      />

      {errors.age && (
        <Text ml="1" color="red">
          {errors.age.message}
        </Text>
      )}
    </Stack>
  );
};
