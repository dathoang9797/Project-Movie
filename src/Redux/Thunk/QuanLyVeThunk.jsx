import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyVeService } from '@Services/QuanLyVeService';
import { messageApp, capitalize } from '@Utils/Common';
import { sweetAlert } from '@Utils/Libs';

const { messageNetWorkErr, messageIdIsUnValid, messageDeleteTicketSuccess } = messageApp;

const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;

const getDanhSachVeAsync = createAsyncThunk(
  'quanLyVeReducer/getDanhSachVeAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyVeService.layDanhSachVe();

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

const getChiTietVeAsync = createAsyncThunk(
  'quanLyVeReducer/getChiTietVeAsync',
  async (idVe, { rejectWithValue }) => {
    const result = await quanLyVeService.layVeTheoID(idVe);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

const getDanhSachVeTheoNguoiDungAsync = createAsyncThunk(
  'quanLyVeReducer/getDanhSachVeTheoNguoiDungAsync',
  async (userId, { rejectWithValue }) => {
    const result = await quanLyVeService.layDanhSachVeTheoNguoiDung(userId);

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

const getDanhSachVeTheoPhongAsync = createAsyncThunk(
  'quanLyVeReducer/getDanhSachVeTheoPhongAsync',
  async (roomId, { rejectWithValue }) => {
    const result = await quanLyVeService.layDanhSachVeTheoPhong(roomId);

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

const xoaNhieuVeAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNhieuVeAsync',
  async (idTicketArr, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const promisesArr = idTicketArr.map((idVe) => quanLyVeService.xoaVe(idVe));
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

      await dispatch(getDanhSachVeAsync());
      sweetAlertSuccess(messageDeleteTicketSuccess);
    }
  }
);

const xoaVeAsync = createAsyncThunk(
  'quanLyVeReducer/xoaVeAsync',
  async (idTicket, { rejectWithValue, dispatch }) => {
    const confirmResult = await sweetAlertDelete();
    if (confirmResult.isConfirmed) {
      const result = await quanLyVeService.xoaVe(idTicket);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachVeAsync());
      sweetAlertSuccess(messageDeleteTicketSuccess);
    }
  }
);

export const quanLyVeThunk = {
  getDanhSachVeAsync,
  getChiTietVeAsync,
  getDanhSachVeTheoNguoiDungAsync,
  getDanhSachVeTheoPhongAsync,
  xoaVeAsync,
  xoaNhieuVeAsync,
};
