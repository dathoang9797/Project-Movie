import { createSelector } from '@reduxjs/toolkit';
import { filterSearchValue } from '@Utils/Common';

const selectUserInfo = (state) => state.QuanLyNguoiDungReducer.userInfo;

const selectDanhSachNguoiDung = (state) => state.QuanLyNguoiDungReducer.danhSachNguoiDung;

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectChiTietNguoiDung = (state) => state.QuanLyNguoiDungReducer.chiTietNguoiDung;

const selectDanhSachNguoiDungFilter = createSelector(
  selectDanhSachNguoiDung,
  selectSearchValue,
  (danhSachNguoiDung, searchValue) => {
    if (!searchValue.length) return danhSachNguoiDung;
    const keyTypeFilterUser = process.env.REACT_APP_KEY_FILTER_USER_LIST;
    const searchValueFormat = searchValue.trim().toLowerCase();
    const cloneDanhSachNguoiDung = [...danhSachNguoiDung];
    return filterSearchValue(searchValueFormat, cloneDanhSachNguoiDung, keyTypeFilterUser);
  }
);

export const quanLyNguoiDungSelector = {
  selectUserInfo,
  selectDanhSachNguoiDung,
  selectChiTietNguoiDung,
  selectDanhSachNguoiDungFilter,
};
