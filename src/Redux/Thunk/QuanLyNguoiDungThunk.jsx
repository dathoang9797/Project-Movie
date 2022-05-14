import { messageApp, showSuccess } from '@Utils/Common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { quanLyNguoiDungService } from '@Services/QuanLyNguoiDungService';
import { xacThucNguoiDungService } from '@Services/XacThucNguoiDungService';
import _ from 'lodash';
import { history, sweetAlert } from '@Utils/Libs';
import { capitalize } from '@Utils/Common';
import { quanLyNguoiDungAction } from '@Redux/Reducers/QuanLyNguoiDungSlice';

const {
  messageLoginFailed,
  messageNameOrEmailIsExits,
  messageNetWorkErr,
  messageRegisterFailed,
  messageRegisterSucceed,
  messageUpdateSuccess,
  messageUpdateFailed,
  messageDeleteUserSuccess,
} = messageApp;

const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;

const setUserInfoAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/setUserInfoAsync',
  async (ThongTinDangNhapVM, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.dangNhap(ThongTinDangNhapVM);

    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }

    localService.setUserInfo(result.content);
    History.goBack();
    return result.content;
  }
);

const setThongTinNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/setThongTinNguoiDungAsync',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.thongTinTaiKhoan();
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }

    return result.content;
  }
);

const getDanhSachNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getDanhSachNguoiDungAsync',
  async (_, { rejectWithValue }) => {
    const maNhom = process.env.REACT_APP_MA_NHOM_GP01;
    const result = await quanLyNguoiDungService.layDanhSachNguoiDung(maNhom);
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

const getChiTietNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getChiTietNguoiDungAsync',
  async (taiKhoan, { rejectWithValue }) => {
    console.log({ taiKhoan });
    const result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan);
    console.log({ result });
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

const setXoaNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/setXoaNguoiDungAsync',
  async (taiKhoan, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
    if (result.statusCode !== 200) {
      return rejectWithValue(result.content);
    }
    showSuccess(result.content);
  }
);

export const quanLyNguoiDungThunk = {
  setUserInfoAsync,
  setThongTinNguoiDungAsync,
  getDanhSachNguoiDungAsync,
  setXoaNguoiDungAsync,
  getChiTietNguoiDungAsync,
};
