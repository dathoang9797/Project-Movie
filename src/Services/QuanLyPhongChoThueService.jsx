import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyPhongChoThueService = {
  layTatCaPhongChoThue(isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
    return AxiosClient.get(url, { headers: { isLoading  , isLoadingPopup } });
  },

  layPhongChoThueTheoViTri(locationId, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
    return AxiosClient.get(url, { params: { locationId }, headers: { isLoading  , isLoadingPopup } });
  },

  layPhongChoThueTheoID(idRoom, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE}/${idRoom}`;
    return AxiosClient.get(url, { headers: { isLoading  , isLoadingPopup } });
  },

  taoPhongChoThue(phongChoThue, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
    return AxiosClient.post(url, phongChoThue, { headers: { isLoading  , isLoadingPopup } });
  },

  datPhongChoThue(datPhongChoThue, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_DAT_PHONG;
    return AxiosClient.post(url, datPhongChoThue, { headers: { isLoading  , isLoadingPopup } });
  },

  capNhatHinhAnhPhongChoThue(idRoom, formData, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_CAP_NHAT_ANH}/${idRoom}`;
    return AxiosClient.post(url, formData, { headers: { isLoading  , isLoadingPopup } });
  },

  capNhatThongTinPhongChoThue(idRoom, phongChoThue, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE}/${idRoom}`;
    return AxiosClient.put(url, phongChoThue, { headers: { isLoading  , isLoadingPopup } });
  },

  xoaPhongChoThue(idRoom, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE}/${idRoom}`;
    return AxiosClient.delete(url, { headers: { isLoading  , isLoadingPopup } });
  },
};
