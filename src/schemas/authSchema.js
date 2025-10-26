import * as zod from "zod";

export const registerSchema = zod
  .object({
    name: zod
      .string()
      .nonempty("Please enter your name")
      .min(3, { message: "Name must be at least 3 characters" })
      .max(20, { message: "Name must be at most 20 characters" })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Name must contain only letters and spaces",
      }),

    email: zod
      .string()
      .nonempty("Please enter your email")
      .email({ message: "Please enter a valid email" }),

    password: zod
      .string()
      .nonempty("Please enter your password")
      .min(8, { message: "Password must be at least 8 characters" })
      .max(20, { message: "Password must be at most 20 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
        }
      ),

    rePassword: zod.string().nonempty("Please confirm your password"),

    dateOfBirth: zod.coerce
      .date()
      .refine((date) => !Number.isNaN(date?.getTime?.()), {
        message: "Please enter your date of birth",
      })
      .refine(
        (date) => {
          const today = new Date();
          const age = today.getFullYear() - date.getFullYear();
          return age >= 18;
        },
        {
          message: "You must be at least 18 years old",
        }
      ),

    gender: zod.string().nonempty("Please select your gender"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });
