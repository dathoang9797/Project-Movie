import * as yup from 'yup';
import { messageApp } from '@Utils/Common';

const { messageFieldIsRequire } = messageApp;

export const addEvaluateSchema = yup.object().shape({
  content: yup.string().required(messageFieldIsRequire),
});
