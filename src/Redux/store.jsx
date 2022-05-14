import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import QuanLyNguoiDungReducer from '@Redux/Reducers/QuanLyNguoiDungSlice';
import LoadingReducer from '@Redux/Reducers/LoadingSlice';
import QuanLyPhongChoThueReducer from '@/Redux/Reducers/QuanLyPhimSlice';
import QuanLyVeReducer from '@/Redux/Reducers/QuanLyRapSlice';
import QuanLyViTriReducer from '@Redux/Reducers/QuanLyViTriSlice';
import QuanLyDanhGiaReducer from '@/Redux/Reducers/QuanLyDatVeSlice';
import SearchReducer from '@Redux/Reducers/SearchSlice';

export const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,
  QuanLyDanhGiaReducer,
  LoadingReducer,
  QuanLyPhongChoThueReducer,
  QuanLyVeReducer,
  QuanLyViTriReducer,
  SearchReducer,
});

const middlewaresConfig = process.env.NODE_ENV !== 'production' ? [logger] : [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewaresConfig),
  devTools: process.env.NODE_ENV !== 'production',
});
