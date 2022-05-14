import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyNguoiDungService = {
  dangNhap(noiDungDangNhap, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_DANG_NHAP;
    return AxiosClient.post(url, noiDungDangNhap, { headers: { isLoading, isLoadingPopup } });
  },

  dangKy(noiDungDangKy, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_DANG_KY;
    return AxiosClient.post(url, noiDungDangKy, { headers: { isLoading, isLoadingPopup } });
  },

  layDanhSachLoaiNguoiDung(isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_LOAI_NGUOI_DUNG;
    return AxiosClient.get(url, { headers: { isLoading, isLoadingPopup } });
  },

  layDanhSachNguoiDung(maNhom, tuKhoa = '', isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_NGUOI_DUNG;
    return AxiosClient.get(url, {
      params: { maNhom, tuKhoa },
      headers: { isLoading, isLoadingPopup },
    });
  },

  layDanhSachNguoiDungPhanTrang(
    maNhom,
    tuKhoa,
    soTrang,
    soPhanTuTrenTrang,
    isLoading = true,
    isLoadingPopup = false
  ) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG;
    return AxiosClient.get(url, {
      params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
      headers: { isLoading, isLoadingPopup },
    });
  },

  timKiemNguoiDung(maNhom, tuKhoa, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_TIM_KIEM_NGUOI_DUNG;
    return AxiosClient.get(url, {
      params: { maNhom, tuKhoa },
      headers: { isLoading, isLoadingPopup },
    });
  },

  timKiemNguoiDungPhanTrang(
    maNhom,
    tuKhoa,
    soTrang,
    soPhanTuTrenTrang,
    isLoading = true,
    isLoadingPopup = false
  ) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_TIM_KIEM_NGUOI_DUNG_PHAN_TRANG;
    return AxiosClient.get(url, {
      params: { maNhom, tuKhoa, soTrang, soPhanTuTrenTrang },
      headers: { isLoading, isLoadingPopup },
    });
  },

  thongTinTaiKhoan(isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_THONG_TIN_TAI_KHOAN;
    return AxiosClient.post(url, { headers: { isLoading, isLoadingPopup } });
  },

  layThongTinNguoiDung(taiKhoan, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_LAY_THONG_TIN_NGUOI_DUNG;
    return AxiosClient.post(url, null, {
      params: { taiKhoan },
      headers: { isLoading, isLoadingPopup },
    });
  },

  themNguoiDung(noiDung, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_THEM_NGUOI_DUNG;
    return AxiosClient.post(url, noiDung, { headers: { isLoading, isLoadingPopup } });
  },

  capNhatThongTinNguoiDung(noiDung, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_CAP_NHAT_THONG_TIN_NGUOI_DUNG;
    return AxiosClient.put(url, noiDung, { headers: { isLoading, isLoadingPopup } });
  },

  xoaNguoiDung(taiKhoan, isLoading = true, isLoadingPopup = false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_XOA_NGUOI_DUNG;
    return AxiosClient.delete(url, {
      params: { taiKhoan },
      headers: { isLoading, isLoadingPopup },
    });
  },
};
