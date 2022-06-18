import React from 'react';
import { Formik, Form } from 'formik';
import CustomTextField from '../../../UI/CustomTextField/idex';
import { registrationValidationScheme } from '../../../utils/validationScheme';
import CustomButton from '../../../UI/CustomButton';

interface AuthFormTypes {
    handleSignup: (name: string, email: string, password: string) => void;
};

const RegisterForm = ({ handleSignup }: AuthFormTypes): JSX.Element => {
    const initialValues = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registrationValidationScheme}
            onSubmit={(values) => {
                handleSignup(values.name, values.email, values.password);
            }}
        >
            {({ dirty, isValid }) => (
                <Form>
                    <CustomTextField
                        name="name"
                        label="Enter your name"
                        type="text"
                        isToggleVisibility={false}
                    />
                    <CustomTextField
                        name="email"
                        label="Enter email"
                        type="email"
                        isToggleVisibility={false}
                    />
                    <CustomTextField
                        name="password"
                        label="Enter password"
                        type="password"
                        isToggleVisibility
                    />
                    <CustomTextField
                        name="confirmPassword"
                        label="Confirm password"
                        type="password"
                        isToggleVisibility
                    />
                    <CustomButton
                        text="Register"
                        dirty={dirty}
                        isValid={isValid}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
