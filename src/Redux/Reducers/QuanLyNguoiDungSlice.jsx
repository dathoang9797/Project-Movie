import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { createSlice } from '@reduxjs/toolkit';
import { showError } from '@Utils/Common';
import { nanoid } from '@reduxjs/toolkit';

const {
  setThongTinNguoiDungAsync,
  setUserInfoAsync,
  getDanhSachNguoiDungAsync,
  setXoaNguoiDungAsync,
  getChiTietNguoiDungAsync,
} = quanLyNguoiDungThunk;

const initialState = {
  userInfo: {},
  danhSachNguoiDung: [],
  chiTietNguoiDung: {},
};

const quanLyNguoiDungSlice = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserInfoAsync.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(setUserInfoAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(setThongTinNguoiDungAsync.fulfilled, (state, action) => {
      state.thongTinNguoiDung.thongTinDatVe?.map((thongTinNguoiDung) => {
        thongTinNguoiDung.idNguoiDung = nanoid();
        thongTinNguoiDung.danhSachGhe.map((gheND) => {
          gheND.idDanhSachNguoiDung = nanoid();
        });
        return thongTinNguoiDung;
      });
      state.thongTinNguoiDung = action.payload;
    });
    builder.addCase(setThongTinNguoiDungAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(getDanhSachNguoiDungAsync.fulfilled, (state, action) => {
      state.danhSachNguoiDung = action.payload;
    });
    builder.addCase(getDanhSachNguoiDungAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(setXoaNguoiDungAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(getChiTietNguoiDungAsync.fulfilled, (state, action) => {
      state.chiTietNguoiDung = action.payload;
    });
    builder.addCase(getChiTietNguoiDungAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
  },
});
const { setSearchValue, updateUserInfo } = quanLyNguoiDungSlice.actions;

export const quanLyNguoiDungAction = { setSearchValue, updateUserInfo };

export default quanLyNguoiDungSlice.reducer;
