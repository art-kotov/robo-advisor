// Core
import { object, string } from "yup";

export const signUpForm = {
  initialValues: {
    phone: "",
    password: "",
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

export const signIpForm = {
  initialValues: {
    phone: "",
    password: "",
    remember: false,
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
