import { z } from "zod";

export const schema = z
  .object({
    email: z.string().email({ message: "invalid email" }),
    username: z
      .string()
      .min(4, { message: "username must be more than 4 characters" }),
    age: z
      .number()
      .min(5, {
        message: "you must be older than 5 years to use our services",
      })
      .max(100, { message: "the maximum age is 100 years old" }),
    image: z.any(),
    imageId: z.any(),
    role: z
      .string({
        invalid_type_error: "please choose your role",
        required_error: "please choose your role",
      })
      .min(1, { message: "please choose your role" }),
    interests: z
      .array(
        z.object({
          value: z.string(),
        }),
        {
          required_error:
            "at least , you must choose 2 items that describe your interest",
        }
      )
      .min(2, {
        message:
          "at least , you must choose 2 items that describe your interest",
      }),
    password: z
      .string()
      .min(8, { message: "password must be more than 8 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "please complete the confirm password field" }),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "please confirm the password correctly",
    path: ["confirmPassword"],
  });
