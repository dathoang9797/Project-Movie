import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyNguoiDungService = {
  layTatCaNguoiDung(isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG;
    return AxiosClient.get(url, { headers: { isLoading, isLoadingPopup } });
  },

  layNguoiDungTheoID(idNguoiDung, isLoading = true, isLoadingPopup = false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG}/${idNguoiDung}`;
    return AxiosClient.get(url, { headers: { isLoading, isLoadingPopup } });
  },

  layNguoiDungPhanTrang(skip = 0, limit = 10, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_PHAN_TRANG;
    return AxiosClient.get(url, {
      params: { skip, limit },
      headers: { isLoading, isLoadingPopup },
    });
  },

  xoaNguoiDung(idNguoiDung, isLoading = true, isLoadingPopup = false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG}/${idNguoiDung}`;
    return AxiosClient.delete(url, { headers: { isLoading, isLoadingPopup } });
  },

  capNhatNguoiDung(idNguoiDung, nguoiDungCapNhat, isLoading = true, isLoadingPopup = false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG}/${idNguoiDung}`;
    return AxiosClient.put(url, nguoiDungCapNhat, { headers: { isLoading, isLoadingPopup } });
  },

  taoNguoiDung(nguoiDung, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG;
    return AxiosClient.post(url, nguoiDung, { headers: { isLoading, isLoadingPopup } });
  },

  capNhatAnhDaiDienNguoiDung(formData, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_UPLOAD_AVATAR;
    return AxiosClient.post(url, formData, { headers: { isLoading, isLoadingPopup } });
  },
};
