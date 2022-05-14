import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyDatVeService = {
  layDanhSachPhongVe(maLichChieu, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DAT_VE_LAY_DANH_SACH_PHONG_VE;
    return AxiosClient.get(url, {
      params: { maLichChieu },
      headers: { isLoading, isLoadingPopup },
    });
  },

  datVe(danhSachVe, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DAT_VE_DAT_VE;
    return AxiosClient.post(url, danhSachVe, { headers: { isLoading, isLoadingPopup } });
  },

  taoLichChieu(lich, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DAT_VE_TAO_LICH_CHIEU;
    return AxiosClient.post(url, lich, { headers: { isLoading, isLoadingPopup } });
  },
};
