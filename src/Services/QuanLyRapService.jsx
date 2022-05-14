import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyRapService = {
  layThongTinHeThongRap(maHeThongRap, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_HE_THONG_RAP;
    return AxiosClient.get(url, {
      params: { maHeThongRap },
      headers: { isLoading, isLoadingPopup },
      timeout: 30000,
    });
  },

  layThongTinCumRapTheoHeThong(maHeThongRap, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG;
    return AxiosClient.get(url, {
      params: { maHeThongRap },
      headers: { isLoading, isLoadingPopup },
    });
  },

  layThongTinLichChieuHeThongRap(maHeThongRap, maNhom, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP;
    return AxiosClient.get(url, {
      params: { maHeThongRap, maNhom },
      headers: { isLoading, isLoadingPopup },
    });
  },

  layThongTinLichChieuPhim(maPhim, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_RAP_LAY_THONG_TIN_LICH_CHIEU_PHIM;
    return AxiosClient.get(url, {
      params: { maPhim },
      headers: { isLoading, isLoadingPopup },
    });
  },
};
