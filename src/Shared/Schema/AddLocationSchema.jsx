import * as yup from 'yup';
import { messageApp } from '@Utils/Common';

const { messageFieldIsRequire } = messageApp;

export const addLocationSchema = yup.object().shape({
  name: yup.string().required(messageFieldIsRequire),
  province: yup.string().required(messageFieldIsRequire),
  country: yup.string().required(messageFieldIsRequire),
  valueate: yup.string().required(messageFieldIsRequire),
});
