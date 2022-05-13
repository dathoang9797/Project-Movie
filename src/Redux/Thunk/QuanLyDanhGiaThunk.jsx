import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyDanhGiaService } from '@Services/QuanLyDanhGiaService';
import { messageApp, capitalize, showSuccess } from '@Utils/Common';
import { sweetAlert } from '@Utils/Libs';

const {
  messageNetWorkErr,
  messageEvaluateSuccess,
  messageIdIsUnValid,
  messageDeleteEvaluateSuccess,
  messageUpdateEvaluateSuccess,
} = messageApp;

const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;

const getDanhSachDanhGiaAsync = createAsyncThunk(
  'quanLyDanhGiaReducer/getDanhSachDanhGiaAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyDanhGiaService.layTatCaDanhGia();

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

const xoadanhGiaAsync = createAsyncThunk(
  'quanLydanhGIaReducer/xoadanhGIaAsync',
  async (idRoom, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const result = await quanLyDanhGiaService.xoaDanhGia(idRoom);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachDanhGiaAsync());
      sweetAlertSuccess(messageDeleteEvaluateSuccess);
    }
  }
);

const xoaNhieuDanhGiaAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNhieuDanhGiaAsync',
  async (idDanhGiaArr, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const promiseArr = idDanhGiaArr.map((idDanhGia) =>
        quanLyDanhGiaService.xoaDanhGia(idDanhGia)
      );
      const result = await Promise.all(promiseArr);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachDanhGiaAsync());
      sweetAlertSuccess(messageDeleteEvaluateSuccess);
    }
  }
);

const taoDanhGiaAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/taoDanhGiaAsync',
  async ({ idEvaluate, content }, { rejectWithValue, dispatch }) => {
    const result = await quanLyDanhGiaService.taoDanhGia(idEvaluate, content);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(messageIdIsUnValid);
    }

    if ('message' in result && !('errors' in result)) {
      return rejectWithValue(capitalize(result.message));
    }

    await dispatch(getDanhSachDanhGiaAsync());
    showSuccess(messageEvaluateSuccess);
  }
);

const capNhatDanhGiaAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatDanhGiaAsync',
  async ({ idEvaluate, content }, { rejectWithValue, dispatch }) => {
    const result = await quanLyDanhGiaService.capNhatDanhGia(idEvaluate, content);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(messageIdIsUnValid);
    }

    if ('message' in result && !('errors' in result)) {
      return rejectWithValue(capitalize(result.message));
    }

    await dispatch(getDanhSachDanhGiaAsync());
    showSuccess(messageUpdateEvaluateSuccess);
  }
);

export const quanLyDanhGiaThunk = {
  getDanhSachDanhGiaAsync,
  xoadanhGiaAsync,
  xoaNhieuDanhGiaAsync,
  taoDanhGiaAsync,
  capNhatDanhGiaAsync,
};
