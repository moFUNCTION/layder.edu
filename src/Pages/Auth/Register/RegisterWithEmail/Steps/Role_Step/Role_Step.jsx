import {
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Flex,
  useRadioGroup,
  RadioGroup,
  HStack,
  Text,
} from "@chakra-ui/react";
import { GiTeacher } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { RadioElement } from "./RadioElement";
export const Role_Step = ({ setValue, role, errors }) => {
  const roles = [
    {
      title: "student",
      icon: <BiUser />,
    },
    {
      title: "teacher",
      icon: <GiTeacher />,
    },
    {
      title: "organization",
      icon: <FaSchool />,
    },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "role",
    value: role,
    onChange: (value) => {
      setValue("role", value);
    },
  });

  const group = getRootProps();
  return (
    <Stack w="100%" p="3" gap="3">
      <Heading
        size="md"
        color={errors.role ? "red.500" : "blue.800"}
        borderBottom="2px"
        borderBottomColor={errors.role ? "red.500" : "blue.800"}
        p="10px"
      >
        What is your role
      </Heading>
      {errors.role && (
        <Text ml="1" color="red">
          {errors.role.message}
        </Text>
      )}
      <Stack {...group}>
        {roles.map((role, index) => {
          const radio = getRadioProps({ value: role.title });
          return (
            <RadioElement
              key={index}
              icon={role.icon}
              title={role.title}
              {...radio}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
