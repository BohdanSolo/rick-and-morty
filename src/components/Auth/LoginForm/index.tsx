import React from "react";
import { Formik, Form } from "formik";
import CustomButton from "../../../UI/CustomButton";
import CustomTextField from "../../../UI/CustomTextField/idex";
import { loginValidationScheme } from "../../../utils/validationScheme";
import Button from "@mui/material/Button";

interface LoginFormTypes {
  handleSignIn: (email: string, password: string) => void;
  handleFacebookSignIn: () => void;
}

const LoginForm: React.FC<LoginFormTypes> = ({
  handleSignIn,
  handleFacebookSignIn,
}) => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationScheme}
      onSubmit={(values) => {
        handleSignIn(values.email, values.password);
      }}
    >
      {({ dirty, isValid }) => (
        <Form>
          <CustomTextField
            name="email"
            label="Email"
            type="email"
            isToggleVisibility={false}
          />
          <CustomTextField
            name="password"
            label="Password"
            type="password"
            isToggleVisibility
          />
          <CustomButton
            dirty={dirty}
            isValid={isValid}
            text="Login"
          />
          <Button
            onClick={handleFacebookSignIn}
            variant="text"
            fullWidth
            sx={{
              color: "#57b742",
              marginTop: "20px",
              padding: "15px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Login with Facebook
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
