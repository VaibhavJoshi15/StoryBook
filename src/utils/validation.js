import * as yup from 'yup';
import {regex, ValidationMessage} from './constant';

export const RegisterSchema = yup.object().shape({
  name: yup.string().required(ValidationMessage.NAME_REQUIRED),
  email: yup.string().email().required(ValidationMessage.EMAIL_REQUIRED),
  mobile: yup
    .string()
    .required(ValidationMessage.NUMBER_REQUIRED)
    .matches(regex.PHONE_REGEX, ValidationMessage.INVALID_NUMBER),
  password: yup
    .string()
    .required(ValidationMessage.PASSWORD_REQUIRED)
    .matches(regex.PASSWORD_REGEX, ValidationMessage.PASSWORD_VALIDATION),
  // confirmPassword: yup
  //   .string()
  //   .required('* Confirm Password is Required')
  //   .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(ValidationMessage.EMAIL_REQUIRED),
  password: yup
    .string()
    .required(ValidationMessage.PASSWORD_REQUIRED)
    .matches(regex.PASSWORD_REGEX, ValidationMessage.PASSWORD_VALIDATION),
});
