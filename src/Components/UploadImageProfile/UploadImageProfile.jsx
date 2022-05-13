import SpinnerDot from '@Components/SpinnerDot';
import { quanLyNguoiDungAction } from '@Redux/Reducers/QuanLyNguoiDungSlice';
import { localService } from '@Services/LocalStorageService';
import { showError, showSuccess } from '@Utils/Common';
import { Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function UploadImageProfile({ children, setImgRoom, token, userInfo }) {
  const dispatch = useDispatch();
  const { updateUserInfo } = quanLyNguoiDungAction;
  const [loading, setLoading] = useState(false);
  const urlAirBnb = process.env.REACT_APP_BASE_URL_AIRBNB;
  const tokenCyberSoft = process.env.REACT_APP_TOKEN_CYBERSOFT;
  const urlUploadAvatar = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_UPLOAD_AVATAR;
  const tokenUser = token;
  const headerReq = {
    tokenByClass: tokenCyberSoft,
    token: tokenUser,
  };
  const keyNameUpload = process.env.REACT_APP_KEY_NAME_FORM_DATA_USER;

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      showError('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      showError('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = async (info) => {
    const { status, name, originFileObj } = info.file;
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (status === 'done') {
      const baseImg64 = await getBase64(originFileObj);
      setImgRoom(baseImg64);
      setLoading(false);
      userInfo.avatar = baseImg64;
      localService.setUserInfo(userInfo);
      dispatch(updateUserInfo(userInfo));
      showSuccess(`${name} File Update Thành Công`);
      return;
    }

    if (status === 'error') {
      showError(`${name} File Update  Thất Bại`);
      setLoading(false);
    }
  };

  return (
    <Upload
      showUploadList={false}
      onChange={handleChange}
      beforeUpload={beforeUpload}
      accept='image/x-png, image/gif, image/jpeg'
      action={`${urlAirBnb}${urlUploadAvatar}`}
      headers={headerReq}
      name={keyNameUpload}
    >
      {loading ? <SpinnerDot /> : children}
    </Upload>
  );
}

export default UploadImageProfile;
