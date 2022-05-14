import { VectorSVG } from '@Assets/Svgs';
import ButtonScrollTop from '@Components/ButtonScrollTop';
import UploadImageProfile from '@Components/UploadImageProfile';
import ModalHoc from '@HOC/ModalHoc';
import { quanLyVeSelector } from '@Redux/Selector/QuanLyVeSelector';
import { quanLyVeThunk } from '@/Redux/Thunk/QuanLyRapThunk';
import { localService } from '@Services/LocalStorageService';
import { messageApp, showWarning } from '@Utils/Common';
import _ from 'lodash';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ProfilePageCSS } from './ProfilePage.styles';
import ProfileTicket from './ProfileTicket/ProfileTicket';
import ProfileUpdate from './ProfileUpdate';

function ProfilePage(props) {
  const dispatch = useDispatch();
  const { showModal, handlePropsContentModal, handleContentModal } = props;
  const userInfo = localService.getUserInfo();
  const { avatar, token, name, email, address, birthday, gender, phone, _id } = userInfo;
  const fieldProfileUpdate = { name, email, address, birthday, gender, phone, _id };
  const { AccountSVG } = VectorSVG;
  const [imgRoom, setImgRoom] = useState('' || avatar);
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const { getDanhSachVeTheoNguoiDungAsync } = quanLyVeThunk;
  const { selectDanhSachVeTheoNguoiDung } = quanLyVeSelector;
  const danhSachVeTheoNguoiDung = useSelector(selectDanhSachVeTheoNguoiDung, _.isEqual);
  const { messageUserNotLogin } = messageApp;

  useLayoutEffect(() => {
    dispatch(getDanhSachVeTheoNguoiDungAsync(_id));
  }, [_id, dispatch, getDanhSachVeTheoNguoiDungAsync]);

  const {
    Container,
    ContentLeft,
    CardImage,
    CardBody,
    CardTitle,
    CardIconShield,
    CardText,
    CardButton,
    CardConfirm,
    CardConfirmTitle,
    CardConfirmText,
    ContentRight,
    CardTitleUploadImage,
    CardTextUnderline,
  } = ProfilePageCSS;

  const handleShowModalProfile = () => {
    handleContentModal(ProfileUpdate);
    handlePropsContentModal({ fieldProfileUpdate });
    showModal();
  };

  useEffect(() => {
    if (!userInfo) {
      setTimeout(() => {
        showWarning(messageUserNotLogin);
      }, 500);
    }
  }, [messageUserNotLogin, userInfo]);

  return !userInfo ? (
    <Redirect to={urlHome} />
  ) : (
    <Container>
      <ContentLeft>
        <CardImage>{imgRoom ? <img src={imgRoom} alt={imgRoom} /> : <AccountSVG />}</CardImage>
        <UploadImageProfile setImgRoom={setImgRoom} token={token} userInfo={userInfo}>
          <CardTitleUploadImage>Cập nhật ảnh</CardTitleUploadImage>
        </UploadImageProfile>
        <CardBody>
          <CardIconShield />
          <CardTitle>Xác minh danh tính</CardTitle>
          <CardText>Xác thực danh tính của bạn với huy hiệu xác minh danh tính</CardText>
          <CardButton type='button'>Nhận huy hiệu</CardButton>
          <CardConfirm>
            <CardConfirmTitle>{email} Đã xác nhận</CardConfirmTitle>
            <div>
              <BsCheckLg />
              <CardConfirmText>Địa chỉ mail</CardConfirmText>
            </div>
          </CardConfirm>
        </CardBody>
      </ContentLeft>
      <ContentRight>
        <CardTitle>Xin chào, tôi là {name}</CardTitle>
        <CardText>Bắt đầu tham gia vào 2021</CardText>
        <CardTextUnderline onClick={handleShowModalProfile}>Chỉnh sửa hồ sơ</CardTextUnderline>
        <br />
        {/* <CardTextUnderline onClick={handleShowModalTicket} className='mb-2'>
          Xem danh sách vé
        </CardTextUnderline> */}
        <CardTitle>
          <i className='fa fa-star'></i>0 đánh giá
        </CardTitle>
        <CardTextUnderline>Đánh giá của bạn</CardTextUnderline>
        <ProfileTicket danhSachVeTheoNguoiDung={danhSachVeTheoNguoiDung} />
      </ContentRight>
      <ButtonScrollTop />
    </Container>
  );
}

export default ModalHoc(ProfilePage);
