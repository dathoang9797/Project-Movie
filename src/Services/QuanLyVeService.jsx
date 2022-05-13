import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyVeService = {
  layDanhSachVe(isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE;
    return AxiosClient.get(url, { headers: { isLoading  , isLoadingPopup }, timeout: 30000 });
  },

  layVeTheoID(idVe, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VE}/${idVe}`;
    return AxiosClient.get(url, { headers: { isLoading  , isLoadingPopup } });
  },

  layDanhSachVeTheoNguoiDung(userId, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE_THEO_NGUOI_DUNG;
    return AxiosClient.get(url, { params: { userId }, headers: { isLoading  , isLoadingPopup } });
  },

  layDanhSachVeTheoPhong(roomId, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE_THEO_PHONG;
    return AxiosClient.get(url, { params: { roomId }, headers: { isLoading  , isLoadingPopup } });
  },

  taoVe(ve, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE;
    return AxiosClient.post(url, ve, { headers: { isLoading  , isLoadingPopup } });
  },

  capNhatThongTinVe(idVe, ve, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VE}/${idVe}`;
    return AxiosClient.put(url, ve, { headers: { isLoading  , isLoadingPopup } });
  },

  xoaVe(idVe, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VE}/${idVe}`;
    return AxiosClient.delete(url, { headers: { isLoading  , isLoadingPopup } });
  },
};
