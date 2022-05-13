import { createSelector } from '@reduxjs/toolkit';
import { filterSearchValue } from '@Utils/Common';

const selectDanhSachVe = (state) => state.QuanLyVeReducer.danhSachVe;

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectDanhSachVeTheoNguoiDung = (state) => state.QuanLyVeReducer.danhSachVeTheoNguoiDung;

const selectDanhSachVeFilter = createSelector(
  selectDanhSachVe,
  selectSearchValue,
  (danhSachVe, searchValue) => {
    if (!searchValue.length) return danhSachVe;
    const keyTypeFilterTicket = process.env.REACT_APP_KEY_FILTER_TICKET_LIST;
    const searchValueFormat = searchValue.trim().toLowerCase();
    const cloneDanhSachVe = [...danhSachVe];
    return filterSearchValue(searchValueFormat, cloneDanhSachVe, keyTypeFilterTicket);
  }
);

export const quanLyVeSelector = {
  selectDanhSachVe,
  selectDanhSachVeFilter,
  selectDanhSachVeTheoNguoiDung,
};
