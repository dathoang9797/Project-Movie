import { createSlice } from '@reduxjs/toolkit';
import { quanLyPhimThunk } from '@/Redux/Thunk/QuanLyPhimThunk';
import { showError, showSuccess } from '@Utils/Common';
import { nanoid } from '@reduxjs/toolkit';

const {
  getFilmAsync,
  layThongTinPhimAsync,
  setCapNhatPhimUpLoadAsync,
  setThemPhimUpLoadHinhAsync,
  setXoaPhimThunk,
} = quanLyPhimThunk;

const initialState = {
  danhSachPhongChoThue: [],
  chiTietPhongChoThue: {},
  danhSachPhongChoThueTheoViTri: [],
  bookingRoom: {},
  totalPriceBooking: 0,
};

const quanLyPhimSlice = createSlice({
  name: 'quanLyPhongChoThueReducer',
  initialState,
  reducers: {
    getAllFilms: (state) => {
      state.arrFilm = state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu);
      state.dangChieu = false;
      state.sapChieu = false;
    },
    getFilmsSapChieu: (state) => {
      state.arrFilm = state.arrFilmDefault.filter((film) => film.sapChieu === state.sapChieu);
      state.dangChieu = false;
      state.sapChieu = true;
    },
    getFilmsDangChieu: (state) => {
      state.arrFilm = state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu);
      state.dangChieu = true;
      state.sapChieu = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmAsync.fulfilled, (state, action) => {
      state.arrFilm = action.payload;
      state.arrFilmDefault = action.payload;
    });

    builder.addCase(layThongTinPhimAsync.fulfilled, (state, action) => {
      state.thongTinPhim = { ...action.payload, idThongTinPhim: nanoid() };
    });
    builder.addCase(setThemPhimUpLoadHinhAsync.fulfilled, (state, action) => {
      showSuccess('Thêm phim thành công');
    });
    builder.addCase(setCapNhatPhimUpLoadAsync.fulfilled, (state, action) => {
      showSuccess('Cập nhật phim thành công');
    });
    builder.addCase(getFilmAsync.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        showError(action.payload);
        return;
      }

      if (action.payload) {
        showError(action.payload?.content);
        return;
      }
    });
    builder.addCase(setThemPhimUpLoadHinhAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(layThongTinPhimAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(setCapNhatPhimUpLoadAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(setXoaPhimThunk.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
  },
});

const {
  setBookingRoomAction,
  setTotalPriceBookingAction,
  setResetDanhSachPhongChoThueTheoViTriAction,
  setResetBookingRoomAction,
  setResetTotalPriceBookingAction,
} = quanLyPhimSlice.actions;

export const quanLyPhongChoThueAction = {
  setBookingRoomAction,
  setTotalPriceBookingAction,
  setResetDanhSachPhongChoThueTheoViTriAction,
  setResetBookingRoomAction,
  setResetTotalPriceBookingAction,
};

export default quanLyPhimSlice.reducer;
