import React from 'react';
import {Formik, Form} from 'formik';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import CustomButton from '../../../UI/CustomButton';
import CustomTextField from '../../../UI/CustomTextField/idex';
import {loginValidationScheme} from '../../../utils/validationScheme';

import FacebookIcon from './FacebookIcon';
import GoogleIcon from './GoogleIcon';

interface LoginFormTypes {
    handleSignIn: (email: string, password: string) => void;
    handleFacebookSignIn: () => void;
    handleGoogleSignIn: () => void;
}

const LoginForm = ({ handleSignIn, handleFacebookSignIn, handleGoogleSignIn}: LoginFormTypes): JSX.Element => {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationScheme}
      onSubmit={(values) => {
        handleSignIn(values.email, values.password);
      }}
    >
      {({dirty, isValid}) => (
        <Form>
          <CustomTextField
            name='email'
            label='Email'
            type='email'
            isToggleVisibility={false}
          />
          <CustomTextField
            name='password'
            label='Password'
            type='password'
            isToggleVisibility
          />
          <CustomButton dirty={dirty} isValid={isValid} text='Login'/>
          <Typography component='div' sx={{margin: '40px auto 10px', textTransform: 'uppercase'}}>
                        login with:
          </Typography>
          <Button
            onClick={handleFacebookSignIn}
            variant='text'
            sx={{
              color: '#57b742',
            }}
          >
            <FacebookIcon/>
          </Button>
          <Typography component='span' sx={{padding: '5px'}}>
                        or
          </Typography>
          <Button
            onClick={handleGoogleSignIn}
            variant='text'
            sx={{
              color: '#57b742',
            }}
          >
            <GoogleIcon/>
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
