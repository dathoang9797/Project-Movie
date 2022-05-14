import { createSlice } from '@reduxjs/toolkit';
import { quanLyRapThunk } from '@/Redux/Thunk/QuanLyRapThunk';
import { showError } from '@Utils/Common';
import { nanoid } from '@reduxjs/toolkit';

const { getCumRapAsync, getThongTinLichChieuPhimAsync } = quanLyRapThunk;

const initialState = {
  filmDetail: {},
  heThongRapChieu: [],
};

const quanLyVeSlice = createSlice({
  name: 'quanLyRapReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThongTinLichChieuPhimAsync.fulfilled, (state, action) => {
      state.filmDetail = action.payload;
    });
    builder.addCase(getThongTinLichChieuPhimAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
    builder.addCase(getCumRapAsync.fulfilled, (state, action) => {
      state.heThongRapChieu = action.payload.map((htrc) => {
        htrc.lstCumRap = htrc.lstCumRap.map((cr) => {
          cr.danhSachPhim = cr.danhSachPhim.map((dp) => {
            dp = { ...dp, idDanhSachPhim: nanoid() };
            dp.lstLichChieuTheoPhim = dp.lstLichChieuTheoPhim.map((lc) => {
              return (lc = { ...lc, idLichChieuTheoPhim: nanoid() });
            });

            return dp;
          });
          return { ...cr, idCumRap: nanoid() };
        });
        return { ...htrc, idHeThongRapChieu: nanoid() };
      });
    });
    builder.addCase(getCumRapAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      }
    });
  },
});

export default quanLyVeSlice.reducer;
