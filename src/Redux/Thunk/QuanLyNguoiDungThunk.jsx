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
  async (ThongTinDangNhap, { rejectWithValue }) => {
    const result = await xacThucNguoiDungService.dangNhap(ThongTinDangNhap);
    const urlHome = process.env.REACT_APP_LINK_HOME;

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageLoginFailed);
    }

    if (!('user' in result)) {
      return rejectWithValue(capitalize(result.message));
    }

    if ('message' in result && !('user' in result)) {
      return rejectWithValue(messageLoginFailed);
    }

    showSuccess(capitalize(result.message));
    result.user.token = result.token;
    localService.setUserInfo(result.user);
    history.push(urlHome);
    return result.user;
  }
);

const setRegisterUserInfoAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/setRegisterUserInfoAsync',
  async (ThongTinDangKy, { rejectWithValue, dispatch, getState }) => {
    const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
    const state = getState();
    const danhSachNguoiDung = state.QuanLyNguoiDungReducer.danhSachNguoiDung;
    const { email } = ThongTinDangKy;

    if (danhSachNguoiDung.filter((item) => item.email === email).length === 0) {
      const result = await xacThucNguoiDungService.dangKy(ThongTinDangKy);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if (_.isEmpty(result)) {
        return rejectWithValue(messageRegisterFailed);
      }

      if (typeof result === 'string') {
        return rejectWithValue(result);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      showSuccess(messageRegisterSucceed);
      history.push(urlSignIn);
      return;
    }
    return rejectWithValue(messageNameOrEmailIsExits);
  }
);

const getDanhSachNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getDanhSachNguoiDungAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.layTatCaNguoiDung();

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

const xoaNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNguoiDungAsync',
  async (idNguoiDung, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const result = await quanLyNguoiDungService.xoaNguoiDung(idNguoiDung);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if (typeof result === 'string') {
        return rejectWithValue(result);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachNguoiDungAsync());
      sweetAlertSuccess(messageDeleteUserSuccess);
    }
  }
);

const xoaNhieuNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNhieuNguoiDungAsync',
  async (idNguoiDungArr, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const promisesArr = idNguoiDungArr.map((idNguoiDung) =>
        quanLyNguoiDungService.xoaNguoiDung(idNguoiDung)
      );
      const result = await Promise.all(promisesArr);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if (typeof result === 'string') {
        return rejectWithValue(result);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachNguoiDungAsync());
      sweetAlertSuccess(messageDeleteUserSuccess);
    }
  }
);

const capNhatNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatNguoiDungAsync',
  async ({ idNguoiDung, noiDungCapNhat }, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.capNhatNguoiDung(idNguoiDung, noiDungCapNhat);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageUpdateFailed);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    showSuccess(messageUpdateSuccess);
    history.goBack();
  }
);

const capNhatProfileAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatProfileAsync',
  async (
    { idNguoiDung, noiDungCapNhat, isLoading, isLoadingPopup },
    { rejectWithValue, dispatch }
  ) => {
    const result = await quanLyNguoiDungService.capNhatNguoiDung(
      idNguoiDung,
      noiDungCapNhat,
      isLoading,
      isLoadingPopup
    );
    const { updateUserInfo } = quanLyNguoiDungAction;
    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageUpdateFailed);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }
    const userInfo = localService.getUserInfo();
    const userUpdate = { ...userInfo, ...result };
    localService.setUserInfo(userUpdate);
    dispatch(updateUserInfo(userUpdate));
    showSuccess(messageUpdateSuccess);
  }
);

const taoNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/taoNguoiDungAsync',
  async (nguoiDung, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const danhSachNguoiDung = state.QuanLyNguoiDungReducer.danhSachNguoiDung;
    const { email } = nguoiDung;

    if (danhSachNguoiDung.filter((item) => item.email === email).length === 0) {
      const result = await quanLyNguoiDungService.taoNguoiDung(nguoiDung);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if (typeof result === 'string') {
        return rejectWithValue(result);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachNguoiDungAsync());

      showSuccess(messageRegisterSucceed);
      return;
    }
    return rejectWithValue(messageNameOrEmailIsExits);
  }
);

const getChiTietNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getChiTietNguoiDungAsync',
  async (idNguoiDung, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.layNguoiDungTheoID(idNguoiDung);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

export const quanLyNguoiDungThunk = {
  setUserInfoAsync,
  setRegisterUserInfoAsync,
  getDanhSachNguoiDungAsync,
  xoaNguoiDungAsync,
  capNhatNguoiDungAsync,
  getChiTietNguoiDungAsync,
  taoNguoiDungAsync,
  xoaNhieuNguoiDungAsync,
  capNhatProfileAsync,
};
