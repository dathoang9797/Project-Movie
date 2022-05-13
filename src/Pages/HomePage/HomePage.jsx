import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from './Banner';
import Feature from './Feature';
import { HomePageCSS } from './HomePage.styles';
import ListCard from './ListCard';

function HomePage() {
  const { Container } = HomePageCSS;
  const { getDanhSachViTriAsync, getDanhSachProvinceAsync } = quanLyViTriThunk;
  const { getDanhSachPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    Promise.all([
      dispatch(getDanhSachViTriAsync()),
      dispatch(getDanhSachPhongChoThueAsync()),
      dispatch(getDanhSachProvinceAsync()),
    ]);
  }, [dispatch, getDanhSachPhongChoThueAsync, getDanhSachProvinceAsync, getDanhSachViTriAsync]);

  return (
    <Container>
      <Banner />
      <Feature />
      <ListCard />
      <ButtonScrollTop />
    </Container>
  );
}

export default HomePage;
