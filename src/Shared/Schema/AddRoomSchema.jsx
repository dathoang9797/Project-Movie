import * as yup from 'yup';
import { messageApp } from '@Utils/Common';

const { messageNameRoomShouldNotEmpty, messageFieldIsRequire } = messageApp;

export const addRoomSchema = yup.object().shape({
  name: yup.string().required(messageNameRoomShouldNotEmpty),
  description: yup.string().required(messageFieldIsRequire),
  guests: yup.number().required(messageFieldIsRequire),
  bedRoom: yup.number().required(messageFieldIsRequire),
  bath: yup.number().required(messageFieldIsRequire),
  price: yup.number().required(messageFieldIsRequire),
  elevator: yup.boolean().required(messageFieldIsRequire),
  hotTub: yup.boolean().required(messageFieldIsRequire),
  pool: yup.boolean().required(messageFieldIsRequire),
  indoorFireplace: yup.boolean().required(messageFieldIsRequire),
  dryer: yup.boolean().required(messageFieldIsRequire),
  gym: yup.boolean().required(messageFieldIsRequire),
  kitchen: yup.boolean().required(messageFieldIsRequire),
  wifi: yup.boolean().required(messageFieldIsRequire),
  heating: yup.boolean().required(messageFieldIsRequire),
  cableTV: yup.boolean().required(messageFieldIsRequire),
  locationId:yup.string().required(messageFieldIsRequire),
});
