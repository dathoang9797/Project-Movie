import { createSlice } from '@reduxjs/toolkit';
import { quanLyDatVeThunk } from '@/Redux/Thunk/QuanLyDatVeThunk';
import { showError } from '@Utils/Common';
import { localService } from '@Services/LocalStorageService';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  chiTietPhongVe: {
    danhSachGhe: [],
    thongTinPhim: {},
  },
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  tabActive: '1',
};

const { getDanhSachPhongVeAsync, setDatGheAsync, setDatveAsync } = quanLyDatVeThunk;

const quanLyDatVeSlice = createSlice({
  name: 'quanLyDatVeReducer',
  initialState,
  reducers: {
    setDatVeHoanTat: (state) => {
      state.danhSachGheDangDat = [];
    },
    setChuyenTab: (state, action) => {
      state.tabActive = action.payload.toString();
    },
    setDanhSachGheKhachDat: (state, action) => {
      state.danhSachGheKhachDat = action.payload.map((gheKhachDat) => ({
        ...gheKhachDat,
      }));
    },
    setDatGhe: (state, action) => {
      const index = state.danhSachGheDangDat.findIndex((ghe) => ghe.maGhe === action.payload.maGhe);
      if (index !== -1) {
        state.danhSachGheDangDat = state.danhSachGheDangDat.filter(
          (ghe) => ghe.maGhe !== action.payload.maGhe
        );
      } else {
        const userInfo = localService.getUserInfo();
        state.danhSachGheDangDat.push({
          ...action.payload,
          status: `user-${userInfo?.taiKhoan}`,
          taiKhoanNguoiDat: userInfo?.taiKhoan ?? null,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setDatGheAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(getDanhSachPhongVeAsync.fulfilled, (state, action) => {
      state.chiTietPhongVe = action.payload;
      state.chiTietPhongVe.danhSachGhe = state.chiTietPhongVe.danhSachGhe.map((ghe) => ({
        ...ghe,
        status: '',
        idGhe: nanoid(),
      }));
      state.chiTietPhongVe.thongTinPhim.idThongTinVePhim = nanoid();
    });
    builder.addCase(getDanhSachPhongVeAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
  },
});

const { setChuyenTab, setDanhSachGheKhachDat, setDatGhe, setDatVeHoanTat } = quanLyDatVeSlice.actions;

export const quanLyDatVeAction = {
  setChuyenTab,
  setDanhSachGheKhachDat,
  setDatGhe,
  setDatVeHoanTat,
};

export default quanLyDatVeSlice.reducer;
