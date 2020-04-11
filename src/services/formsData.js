// Core
import { object, string } from "yup";

export const signUpForm = {
  initialValues: {
    phone: "0511111111",
    password: "qwerty123",
  },
  validationSchema: object().shape({
    phone: string()
      .matches(/\d{10}/, "Please enter 10-digit mobile number")
      .required("Phone is required field"),
    password: string()
      .matches(/^\S*$/, "Between 8 and 25 characters without space")
      .min(8, "Between 8 and 25 characters")
      .max(25, "Between 8 and 25 characters")
      .required("Password is required field"),
  }),
};
