import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { quanLyPhongChoThueService } from '@Services/QuanLyPhongChoThueService';
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

const getDanhSachPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyPhongChoThueService.layTatCaPhongChoThue();

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue(messageIdIsUnValid);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

const getDanhSachPhongChoThueTheoViTriAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueTheoViTriAsync',
  async ({ idViTriArr, isLoading, isLoadingPopup }, { rejectWithValue }) => {
    const promiseArr = idViTriArr.map((idViTri) =>
      quanLyPhongChoThueService.layPhongChoThueTheoViTri(idViTri, isLoading, isLoadingPopup)
    );
    const result = await Promise.all(promiseArr);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue(messageIdIsUnValid);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result.flat();
  }
);

const xoaNhieuPhongAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNhieuPhongAsync',
  async (idNguoiDungArr, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const promiseArr = idNguoiDungArr.map((idNguoiDung) =>
        quanLyPhongChoThueService.xoaPhongChoThue(idNguoiDung)
      );
      const result = await Promise.all(promiseArr);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachPhongChoThueAsync());
      sweetAlertSuccess(messageDeleteRoomSuccess);
    }
  }
);

const xoaPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/xoaPhongChoThueAsync',
  async (idRoom, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const result = await quanLyPhongChoThueService.xoaPhongChoThue(idRoom);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachPhongChoThueAsync());
      sweetAlertSuccess(messageDeleteRoomSuccess);
    }
  }
);

const taoPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/taoPhongChoThueAsync',
  async (phongChoThue, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const danhSachPhongChoThue = state.QuanLyPhongChoThueReducer.danhSachPhongChoThue;
    const { name } = phongChoThue;

    if (danhSachPhongChoThue.filter((item) => item.name === name).length === 0) {
      const result = await quanLyPhongChoThueService.taoPhongChoThue(phongChoThue);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachPhongChoThueAsync());
      showSuccess(messageRegisterSucceed);
      return;
    }
    return rejectWithValue(messageNameRoomIsExits);
  }
);

const getChiTietPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getChiTietPhongChoThueAsync',
  async (idPhongChoThue, { rejectWithValue }) => {
    const result = await quanLyPhongChoThueService.layPhongChoThueTheoID(idPhongChoThue);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

const capNhatPhongChoThueAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatPhongChoThueAsync',
  async ({ idRoom, noiDungCapNhat }, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhongChoThueService.capNhatThongTinPhongChoThue(
      idRoom,
      noiDungCapNhat
    );

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageUpdateFailed);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    showSuccess(messageUpdateSuccess);
    history.goBack();
  }
);

const datPhongPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/datPhongPhongChoThueAsync',
  async ({ dateBooking, isLoading, isLoadingPopup }, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhongChoThueService.datPhongChoThue(
      dateBooking,
      isLoading,
      isLoadingPopup
    );
    const urlRoom = process.env.REACT_APP_LINK_ROOM;
    const cityName = localService.getCityName();
    const { sweetAlertConfirmContinueOrNot } = sweetAlert;
    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageFailBooking);
    }

    if ('message' in result && !('userDetail' in result)) {
      return rejectWithValue(capitalize(result.message));
    }

    const userInfo = localService.getUserInfo();
    const updateUserInfo = { ...userInfo, ...result.userDetail };
    localService.setUserInfo(updateUserInfo);
    showSuccess(capitalize(capitalize(result.message)));
    const confirmResult = await sweetAlertConfirmContinueOrNot();
    if (confirmResult.isConfirmed) return;
    history.push(`${urlRoom}/${cityName}`);
  }
);

export const quanLyPhongChoThueThunk = {
  getDanhSachPhongChoThueAsync,
  getDanhSachPhongChoThueTheoViTriAsync,
  xoaPhongChoThueAsync,
  taoPhongChoThueAsync,
  xoaNhieuPhongAsync,
  getChiTietPhongChoThueAsync,
  capNhatPhongChoThueAsync,
  datPhongPhongChoThueAsync,
};
