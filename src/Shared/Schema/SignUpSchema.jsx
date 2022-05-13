import * as yup from 'yup';
import { regularPassWord, messageApp } from '@Utils/Common';

const { messagePasswordIsValid, messageFieldIsRequire, messageEmailIsUnValid } = messageApp;

export const signUpUserSchema = yup.object().shape({
  name: yup.string().required(messageFieldIsRequire),
  email: yup.string().required(messageFieldIsRequire).email(messageEmailIsUnValid),
  password: yup
    .string()
    .required(messageFieldIsRequire)
    .min(8)
    .matches(regularPassWord, messagePasswordIsValid),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]{10,11}$/),
  address: yup.string().required(messageFieldIsRequire),
  birthday: yup.string().required(messageFieldIsRequire),
});
