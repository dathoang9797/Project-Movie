import * as yup from 'yup';
import { messageApp } from '@Utils/Common';

const { messageFieldIsRequire } = messageApp;

export const editEvaluateSchema = yup.object().shape({
  content: yup.string().required(messageFieldIsRequire),
  _id: yup.string().required(messageFieldIsRequire),
});
