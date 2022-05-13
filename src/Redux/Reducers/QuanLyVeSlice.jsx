import { createSlice } from '@reduxjs/toolkit';
import { quanLyVeThunk } from '@Redux/Thunk/QuanLyVeThunk';
import { showError } from '@Utils/Common';

const {
  getDanhSachVeAsync,
  getChiTietVeAsync,
  getDanhSachVeTheoNguoiDungAsync,
  getDanhSachVeTheoPhongAsync,
  xoaVeAsync,
} = quanLyVeThunk;

const initialState = {
  danhSachVe: [],
  chiTietVe: {},
  danhSachVeTheoNguoiDung: [],
  danhSachVeTheoPhong: [],
};

const quanLyVeSlice = createSlice({
  name: 'quanLyVeReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDanhSachVeAsync.fulfilled, (state, action) => {
      state.danhSachVe = action.payload;
    });
    builder.addCase(getDanhSachVeAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getChiTietVeAsync.fulfilled, (state, action) => {
      state.chiTietVe = action.payload;
    });
    builder.addCase(getChiTietVeAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getDanhSachVeTheoNguoiDungAsync.fulfilled, (state, action) => {
      state.danhSachVeTheoNguoiDung = action.payload;
    });
    builder.addCase(getDanhSachVeTheoNguoiDungAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getDanhSachVeTheoPhongAsync.fulfilled, (state, action) => {
      state.danhSachVeTheoPhong = action.payload;
    });
    builder.addCase(getDanhSachVeTheoPhongAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaVeAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

export default quanLyVeSlice.reducer;
