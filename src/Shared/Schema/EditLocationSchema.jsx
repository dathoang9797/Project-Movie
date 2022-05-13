import * as yup from 'yup';
import { messageApp } from '@Utils/Common';

const { messageNameLocationShouldNotEmpty, messageFieldIsRequire } = messageApp;

export const editLocationSchema = yup.object().shape({
  _id: yup.string().required(messageFieldIsRequire),
  name: yup.string().required(messageNameLocationShouldNotEmpty),
  province: yup.string().required(messageFieldIsRequire),
  country: yup.string().required(messageFieldIsRequire),
  valueate: yup.string().required(messageFieldIsRequire),
});
