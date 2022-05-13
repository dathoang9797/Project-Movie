import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import SpinnerDot from '@Components/SpinnerDot';
import { localService } from '@Services/LocalStorageService';
import { showError, showSuccess } from '@Utils/Common';
import { Button, Upload } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useLocation } from 'react-router-dom';
import { UpLoadImageTableCSS } from './UpLoadImageTable.styles';

function UpLoadImage({ idRoom, imageProp }) {
  const userInfo = localService.getUserInfo();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [imgRoom, setImgRoom] = useState(imageProp);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const urlLocation = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER;
  const urlRoom = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const urlAirBnb = process.env.REACT_APP_BASE_URL_AIRBNB;
  const tokenCyberSoft = process.env.REACT_APP_TOKEN_CYBERSOFT;
  const tokenUser = userInfo.token;
  const headerReq = {
    tokenByClass: tokenCyberSoft,
    token: tokenUser,
  };
  const { Container, LoadingContentCSS, LoadingOutlinedCSS } = UpLoadImageTableCSS;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyName = useCallback(() => {
    if (pathname === urlLocation) {
      return process.env.REACT_APP_KEY_NAME_FORM_DATA_LOCATION;
    }

    if (pathname === urlRoom) {
      return process.env.REACT_APP_KEY_NAME_FORM_DATA_ROOM;
    }
  }, [pathname, urlLocation, urlRoom]);

  const handleUrlUploadImage = useCallback(() => {
    if (pathname === urlLocation) {
      return process.env.REACT_APP_LINK_QUAN_LY_VI_TRI_CAP_NHAT_ANH;
    }

    if (pathname === urlRoom) {
      return process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_CAP_NHAT_ANH;
    }
  }, [pathname, urlLocation, urlRoom]);

  const beforeUpload = useCallback((file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      showError('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      showError('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }, []);

  const getBase64 = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }, []);

  const handleChange = useCallback(
    async (info) => {
      const { status, name, originFileObj } = info.file;
      if (info.file.status === 'uploading') {
        setLoading(true);
        return;
      }
      if (status === 'done') {
        const baseImg64 = await getBase64(originFileObj);
        setImgRoom(baseImg64);
        setLoading(false);
        showSuccess(`${name} File Update Thành Công`);
        return;
      }

      if (status === 'error') {
        showError(`${name} File Update  Thất Bại`);
        setLoading(false);
      }
    },
    [getBase64]
  );

  return (
    <Container>
      <Upload
        listType={imgRoom ? 'picture' : 'picture-card'}
        showUploadList={false}
        onChange={handleChange}
        className='avatar-uploader'
        beforeUpload={beforeUpload}
        accept='image/x-png, image/gif, image/jpeg'
        
        action={`${urlAirBnb}${handleUrlUploadImage()}/${idRoom}`}
        headers={headerReq}
        name={handleKeyName()}
      >
        {imgRoom ? (
          <>
            <LazyLoadImage
              src={imgRoom}
              alt={imgRoom}
              placeholder={<SpinnerDot />}
              scrollPosition={scrollPosition}
            />
            {loading ? (
              <LoadingContentCSS>
                <LoadingOutlinedCSS />
              </LoadingContentCSS>
            ) : (
              <Button icon={<UploadOutlined />}>Click to Update</Button>
            )}
          </>
        ) : (
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        )}
      </Upload>
    </Container>
  );
}

export default trackWindowScroll(UpLoadImage);
