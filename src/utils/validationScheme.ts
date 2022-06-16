import * as Yup from "yup";

export const registrationValidationScheme = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Z][A-Za-z0-9_-]+ [A-Z][A-Za-z0-9_-].+$/,
      "Enter at least 2 words that start with a English capital letter"
    )
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string()
    .min(6, "At least 6 characters are required")
    .required("This field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Enter the same password")
    .required("This field is required"),
});

export const loginValidationScheme = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is required"),
  password: Yup.string()
    .min(6, "Password too short (at least 6 characters)")
    .required("This field is required"),
});
