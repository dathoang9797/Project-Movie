import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { quanLyPhimService } from '@/Services/QuanLyPhimService';
import { messageApp, showSuccess, capitalize } from '@Utils/Common';
import { history, sweetAlert } from '@Utils/Libs';
import _ from 'lodash';

const {
  messageNetWorkErr,
  messageRegisterSucceed,
  messageIdIsUnValid,
  messageNameRoomIsExits,
  messageUpdateFailed,
  messageUpdateSuccess,
  messageFailBooking,
  messageDeleteRoomSuccess,
} = messageApp;

const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;

const getFilmAsync = createAsyncThunk(
  'quanLyPhimReducer/getFilmAsync',
  async (params, { rejectWithValue }) => {
    if (!params || !params.tenPhim?.trim().length) {
      const result = await quanLyPhimService.layDanhSachPhim();
      if (typeof result.content === 'string') {
        return rejectWithValue(result.content);
      }
      if ('content' in result.content) {
        return rejectWithValue(result.content);
      }
      return result.content;
    }

    const { maNhom, tenPhim } = params;
    const result = await quanLyPhimService.layDanhSachPhim(maNhom, tenPhim);
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    if ('content' in result.content) {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

const layThongTinPhimAsync = createAsyncThunk(
  'quanLyPhimReducer/layThongTinPhim',
  async (maPhim, { rejectWithValue }) => {
    const result = await quanLyPhimService.layThongTinPhim(maPhim);
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

const setThemPhimUpLoadHinhAsync = createAsyncThunk(
  'quanLyPhimReducer/themPhimUpLoadHinh',
  async (formData, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhimService.themPhimUpLoadHinh(formData);
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    await dispatch(getFilmAsync());
    History.push(process.env.REACT_APP_LINK_ADMIN_FILMS);
    return result.content;
  }
);

const setCapNhatPhimUpLoadAsync = createAsyncThunk(
  'quanLyPhimReducer/capNhatPhimUpLoad',
  async (formData, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhimService.capNhatPhimUpLoad(formData);
    if (typeof result.content === 'string') {
      return rejectWithValue(`${result.content} ${result.message}`);
    }
    await dispatch(getFilmAsync());
    History.push(process.env.REACT_APP_LINK_ADMIN_FILMS);
    return result.content;
  }
);

const setXoaPhimThunk = createAsyncThunk(
  'quanLyPhimReducer/xoaPhim',
  async (maPhim, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhimService.xoaPhim(maPhim);
    if (result.statusCode !== 200) {
      return rejectWithValue(`${result.content}`);
    }
    await dispatch(getFilmAsync());
    sweetAlertSuccess(messageDeleteRoomSuccess);
  }
);

export const quanLyPhimThunk = {
  getFilmAsync,
  layThongTinPhimAsync,
  setThemPhimUpLoadHinhAsync,
  setCapNhatPhimUpLoadAsync,
  setXoaPhimThunk,
};
