import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyPhimService = {
  layDanhSachBanner(isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_BANNER;
    return AxiosClient.get(url, { headers: { isLoading, isLoadingPopup } });
  },

  layDanhSachPhim(maNhom, tenPhim, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_PHIM;
    return AxiosClient.get(url, {
      params: { maNhom, tenPhim },
      headers: { isLoading, isLoadingPopup },
    });
  },

  layDanhSachPhimPhanTrang(
    maNhom,
    tenPhim,
    soTrang,
    soPhanTuTrenTrang,
    isLoading = true,
    isLoadingPopup = false
  ) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_SACH_PHIM_PHAN_TRANG;
    return AxiosClient.get(url, {
      params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim },
      headers: { isLoading, isLoadingPopup },
    });
  },

  layDanhSachPhimTheoNgay(
    maNhom,
    tenPhim,
    soTrang,
    soPhanTuTrenTrang,
    tuNgay,
    denNgay,
    isLoading = true,
    isLoadingPopup = false
  ) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_DANH_PHIM_THEO_NGAY;
    return AxiosClient.get(url, {
      params: { maNhom, soPhanTuTrenTrang, soTrang, tenPhim, tuNgay, denNgay },
      headers: { isLoading, isLoadingPopup },
    });
  },

  layThongTinPhim(maPhim, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_LAY_THONG_TIN_PHIM;
    return AxiosClient.post(url, { params: { maPhim }, headers: { isLoading, isLoadingPopup } });
  },

  themPhimUpLoadHinh(formData, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_THEM_PHIM_UP_LOAD_HINH;
    return AxiosClient.post(url, formData, { headers: { isLoading, isLoadingPopup } });
  },

  capNhatPhimUpLoad(film, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_CAP_NHAT_PHIM_UPLOAD;
    return AxiosClient.post(url, film, { headers: { isLoading, isLoadingPopup } });
  },

  xoaPhim(maPhim, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_XOA_PHIM;
    return AxiosClient.delete(url, { params: { maPhim }, headers: { isLoading, isLoadingPopup } });
  },

  quanLyPhim(file, tenPhim, maNhom, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_XP;
    AxiosClient.post(url, file, {
      params: { tenPhim, maNhom },
      headers: { isLoading, isLoadingPopup },
    });
  },
  xoaPhimXp(maPhim, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHIM_XOA_PHIM_XP;
    return AxiosClient.delete(url, {
      params: { maPhim },
      headers: { isLoading, isLoadingPopup },
    });
  },
};
