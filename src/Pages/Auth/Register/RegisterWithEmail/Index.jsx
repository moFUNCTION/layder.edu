import {
  Heading,
  Stack,
  Image,
  Flex,
  useMediaQuery,
  ButtonGroup,
  Button,
  CircularProgress,
} from "@chakra-ui/react";
import LogoImage from "../../../../Assets/Logo/Untitled_design-removebg-preview.png";
import { ProgressBar } from "../../../../Components/Common/ProgressBar/ProgressBar";
import { useMultFormSteps } from "./Hooks/useMultFormSteps";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useEffect, useState } from "react";
import { getFileFromDB, saveFileToDB } from "../../../../Utils/IndexDb/IndexDb";
// steps components
import { Username_Email_Age_Step } from "./Steps/Username_Email_Age_Step/Username_Email_Age_Step";
import { ImageUpload_Step } from "./Steps/ImageUpload_Step/SecondStep";
import { Role_Step } from "./Steps/Role_Step/Role_Step";
import { Interests_Step } from "./Steps/Interests_Step/Interests_Step";
import { Password_Step } from "./Steps/Password_Step/Password_Step";
import { VerifyHash, hashValue } from "../../../../Utils/HashValue/HashValue";
import { RegisterWithEmail } from "../../../../@Firebase/Utils/Auth/Register/RegisterWithEmail/RegisterWithEmail";
import { UseUserData } from "../../../../Context/UserDataProvider/UserDataProvider";
import { CircularProgressCentered } from "../../../../Components/Layout/CircularProgressCentered/CircularProgressCentered";
import { AccountExist } from "../../AccountExist/AccountExist";
export default function Register() {
  const { user } = UseUserData();
  // media query
  const [isPhoneQuery] = useMediaQuery("(max-width: 700px)");
  const [isSmallPhoneQuery] = useMediaQuery("(max-width: 400px)");
  // react form hook init
  const {
    register,
    trigger,
    formState: { errors, isSubmitted, isLoading, isSubmitting },
    clearErrors,
    setValue,
    control,
    watch,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: async () => {
      const dataSavedToLocalStorage = JSON.parse(
        localStorage.getItem("register-form")
      );
      if (dataSavedToLocalStorage.imageId) {
        const image = await getFileFromDB(dataSavedToLocalStorage.imageId);
        return { ...dataSavedToLocalStorage, image };
      }
      return dataSavedToLocalStorage;
    },
  });
  // array methods for interests
  const methods = useFieldArray({ control, name: "interests" });
  // get all values to save it
  const formValues = watch();
  useEffect(() => {
    localStorage.setItem(
      "register-form",
      JSON.stringify({
        ...formValues,
        image: "",
        step: { value: step, hash: hashValue(step) },
      })
    );
  }, [formValues]);
  useEffect(() => {
    if (formValues.image) {
      (async function SaveToIndexDb() {
        const { id } = await saveFileToDB(formValues.image);
        setValue("imageId", id);
      })();
    } else {
      setValue("imageId", "");
    }
  }, [formValues.image]);
  const {
    HandleNaviateTo,
    HandleNext,
    HandlePrev,
    step,
    RenderedElement,
    isFirst,
    isLast,
    stepsLength,
    steps,
  } = useMultFormSteps({
    steps: [
      {
        element: (
          <Username_Email_Age_Step
            key="first"
            errors={errors}
            register={register}
          />
        ),
        fields: ["username", "email", "age"],
      },
      {
        element: (
          <ImageUpload_Step
            key="second"
            setValue={setValue}
            image={formValues.image}
          />
        ),
        fields: ["image"],
      },
      {
        element: (
          <Role_Step
            key="third"
            errors={errors}
            setValue={setValue}
            role={formValues.role}
          />
        ),
        fields: ["role"],
      },
      {
        element: <Interests_Step key="fourth" {...methods} errors={errors} />,
        fields: ["interests"],
      },
      {
        element: (
          <Password_Step key="fitfh" register={register} errors={errors} />
        ),
        fields: ["password", "confirmPassword"],
      },
    ],
    stepInitial: () => {
      const step = JSON.parse(localStorage.getItem("register-form"))?.step;
      if (VerifyHash(step?.hash, step?.value)) {
        return step.value;
      } else {
        return 0;
      }
    },
  });
  const onPrev = () => {
    clearErrors();
    HandlePrev();
  };
  const SubmitStep = async () => {
    const valid = await trigger(steps[step].fields);
    if (valid) {
      HandleNext();
    }
  };
  const onSubmitAllSteps = async (data) => {
    try {
      const register = new RegisterWithEmail({
        ...data,
        interests: data.interests.map((interest) => {
          return interest.value;
        }),
      });
      const req = await register.requist();
    } catch (err) {
      console.log(err);
    }
  };
  if (user.loading) {
    return <CircularProgressCentered />;
  }
  if (user.data && !user.loading) {
    return <AccountExist />;
  }
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minH="calc(100vh - 68px)"
      bgColor="blue.600"
      p="10px"
    >
      <Stack
        as="form"
        w="100%"
        maxW="600px"
        bgColor="white"
        borderRadius="lg"
        p="10px"
        border="1px"
        borderColor="gray.400"
        alignItems="center"
        justifyContent="center"
        gap="3"
        className="login"
        pos="relative"
      >
        <Flex alignItems="center" gap="1" mb="5">
          <Image src={LogoImage} w="40px" />
          <Heading
            size="md"
            as="h3"
            textTransform="capitalize"
            color="blue.700"
            p="2"
          >
            Create an Account
          </Heading>
        </Flex>
        <ProgressBar
          steps={stepsLength}
          size={isPhoneQuery ? (isSmallPhoneQuery ? "sm" : "md") : "lg"}
          current={step + 1}
          mb="10px"
        />
        {isLoading ? <CircularProgress isIndeterminate /> : RenderedElement}

        <ButtonGroup w="100%" colorScheme="blue">
          {!isFirst && (
            <Button onClick={onPrev} mr="auto" variant="outline">
              Prev
            </Button>
          )}

          {isLast ? (
            <Button
              onClick={handleSubmit(onSubmitAllSteps)}
              ml="auto"
              colorScheme="green"
              isLoading={isSubmitting}
            >
              Create your account
            </Button>
          ) : (
            <Button ml="auto" onClick={SubmitStep}>
              Next
            </Button>
          )}
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
