import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyRapService } from '@/Services/QuanLyRapService';
import { messageApp, capitalize } from '@Utils/Common';
import { sweetAlert } from '@Utils/Libs';

const { messageNetWorkErr, messageIdIsUnValid, messageDeleteTicketSuccess } = messageApp;

const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;

const getCumRapAsync = createAsyncThunk(
  'quanLyRapReducer/getCumRapAsync',
  async (_, { rejectWithValue }) => {
    const groupId = process.env.REACT_APP_MA_NHOM_GP01;
    const result = await quanLyRapService.layThongTinLichChieuHeThongRap(undefined, groupId);

    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

const getThongTinLichChieuPhimAsync = createAsyncThunk(
  'quanLyRapReducer/getThongTinLichChieuPhimAsync',
  async (maPhim, { rejectWithValue }) => {
    const result = await quanLyRapService.layThongTinLichChieuPhim(maPhim);
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

const getThongTinHeThongRapAsync = createAsyncThunk(
  'quanLyRapReducer/getThongTinHeThongRapAsync',
  async (maPhim, { rejectWithValue }) => {
    const result = await quanLyRapService.layThongTinLichChieuPhim(maPhim);
    if (typeof result.content === 'string') {
      return rejectWithValue(result.content);
    }
    return result.content;
  }
);

export const quanLyRapThunk = {
  getCumRapAsync,
  getThongTinLichChieuPhimAsync,
  getThongTinHeThongRapAsync,
};
