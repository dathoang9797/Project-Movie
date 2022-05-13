import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyDanhGiaService = {
  layTatCaDanhGia(isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA_THEO_PHONG;
    return AxiosClient.get(url, { headers: { isLoading, isLoadingPopup } });
  },

  layDanhGiaTheoID(idDanhGia, isLoading = true, isLoadingPopup = false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA}/${idDanhGia}`;
    return AxiosClient.get(url, { headers: { isLoading, isLoadingPopup } });
  },

  taoDanhGia(idDanhGia, contentDanhGia, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA;
    const params = idDanhGia ? { idDanhGia } : {};
    return AxiosClient.post(url, contentDanhGia, {
      params,
      headers: { isLoading, isLoadingPopup },
    });
  },

  xoaDanhGia(idDanhGia, isLoading = true, isLoadingPopup = false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA}/${idDanhGia}`;
    return AxiosClient.delete(url, { headers: { isLoading, isLoadingPopup } });
  },

  capNhatDanhGia(idDanhGia, noiDungDanhGiaCapNhat, isLoading = true, isLoadingPopup = false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA}/${idDanhGia}`;
    return AxiosClient.put(url, noiDungDanhGiaCapNhat, { headers: { isLoading, isLoadingPopup } });
  },
};
