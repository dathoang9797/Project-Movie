import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyViTriService = {
  layTatCaViTri(isLoading =true , isLoadingPopup) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
    return AxiosClient.get(url, { headers: { isLoading  , isLoadingPopup } });
  },

  layViTriTheoTenThanhPho(location, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
    return AxiosClient.get(url, { params: { location }, headers: { isLoading  , isLoadingPopup } });
  },

  layViTriTheoID(idViTri, isLoading =true , isLoadingPopup=false) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VI_TRI}/${idViTri}`;
    return AxiosClient.get(url, { headers: { isLoading  , isLoadingPopup } });
  },

  layViTriTheoDanhGia(valueate, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI_DANH_GIA;
    return AxiosClient.get(url, { params: { valueate }, headers: { isLoading  , isLoadingPopup } });
  },

  taoViTri(viTri, isLoading =true , isLoadingPopup=false) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
    return AxiosClient.post(url, viTri, { headers: { isLoading  , isLoadingPopup } });
  },

  capNhatAnhChoViTri(idViTri, formData, isLoading =true , isLoadingPopup=false) {
    const url = `${ process.env.REACT_APP_LINK_QUAN_LY_VI_TRI_CAP_NHAT_ANH}/${idViTri}`
    return AxiosClient.post(url, formData, { headers: { isLoading  , isLoadingPopup } });
  },

  capNhatThongTinViTri(idViTri, viTri, isLoading =true , isLoadingPopup=false) {
     const url = `${process.env.REACT_APP_LINK_QUAN_LY_VI_TRI}/${idViTri}`;
    return AxiosClient.put(url, viTri, { headers: { isLoading  , isLoadingPopup } });
  },

  xoaViTri(idViTri, isLoading =true , isLoadingPopup=false) {
     const url = `${process.env.REACT_APP_LINK_QUAN_LY_VI_TRI}/${idViTri}`;
    return AxiosClient.delete(url, { headers: { isLoading  , isLoadingPopup } });
  },
};
