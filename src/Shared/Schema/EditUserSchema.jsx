import * as yup from 'yup';
import { messageApp } from '@Utils/Common';

const { messageEmailIsUnValid, messageFieldIsRequire, messageNameUserShouldNotEmpty } = messageApp;

export const editUserSchema = yup.object().shape({
  _id: yup.string().required(messageFieldIsRequire),
  name: yup.string().required(messageNameUserShouldNotEmpty),
  email: yup.string().required(messageFieldIsRequire).email(messageEmailIsUnValid),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]{10,11}$/),
  address: yup.string().required(messageFieldIsRequire),
  birthday: yup.string().required(messageFieldIsRequire),
  type: yup.string().required(messageFieldIsRequire),
  gender: yup.boolean().required(messageFieldIsRequire),
});
