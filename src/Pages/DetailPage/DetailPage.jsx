import { localService } from '@/Services/LocalStorageService';
import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyDanhGiaSelector, quanLyPhongChoThueSelector } from '@Redux/Selector';
import { quanLyDanhGiaThunk, quanLyPhongChoThueThunk } from '@Redux/Thunk';
import { messageApp, showWarning } from '@Utils/Common';
import _ from 'lodash';
import React, { useEffect, useLayoutEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import DetailBooking from './DetailBooking';
import DetailGridImages from './DetailGridImages';
import DetailMap from './DetailMap';
import { DetailPageCSS } from './DetailPage.styles';
import DetailReview from './DetailReview';
import DetailTitle from './DetailTitle';

function DetailPage() {
  const { Container } = DetailPageCSS;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const userInfo = localService.getUserInfo();
  const { messageUserNotLogin } = messageApp;

  const dispatch = useDispatch();
  const { idRoom } = useParams();

  const { selectDanhSachDanhGia } = quanLyDanhGiaSelector;
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;

  const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;
  const { getChiTietPhongChoThueAsync } = quanLyPhongChoThueThunk;

  const danhSachDanhGia = useSelector(selectDanhSachDanhGia, shallowEqual);
  const chiTietPhong = useSelector(selectChiTietPhongChoThue, _.isEqual);
  const { name, image } = chiTietPhong;

  useLayoutEffect(() => {
    Promise.all([
      dispatch(getDanhSachDanhGiaAsync()),
      dispatch(getChiTietPhongChoThueAsync(idRoom)),
    ]);
  }, [dispatch, getChiTietPhongChoThueAsync, getDanhSachDanhGiaAsync, idRoom]);

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
      <DetailTitle name={name} />
      <DetailGridImages image={image} />
      <DetailBooking chiTietPhong={chiTietPhong} />
      <DetailReview danhSachDanhGia={danhSachDanhGia} />
      <DetailMap name={name} />
      <ButtonScrollTop />
    </Container>
  );
}

export default DetailPage;
