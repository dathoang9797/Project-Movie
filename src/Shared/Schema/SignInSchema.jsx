import * as yup from 'yup';
import { messageApp } from '@Utils/Common';

const { messageEmailIsUnValid, messageFieldIsRequire } = messageApp;

export const signInUserSchema = yup.object().shape({
  email: yup.string().required(messageFieldIsRequire).email(messageEmailIsUnValid),
  password: yup.string().required(messageFieldIsRequire),
});
