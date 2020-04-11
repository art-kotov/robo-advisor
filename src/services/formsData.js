// Core
import { object, string } from "yup";

export const signUpForm = {
  initialValues: {
    phone: "05",
    password: "",
  },
  validationSchema: object().shape({
    phone: string()
      .matches(/\d{10}/, "Please enter 10-digit mobile number")
      .required("Phone is required field"),
    password: string()
      .min(8, "Between 8 and 25 characters")
      .max(25, "Between 8 and 25 characters")
      .required("Password is required field"),
  }),
};
