import CardStats from '@Components/CardStats';
import { quanLyDanhGiaSelector } from '@Redux/Selector/QuanLyDanhGiaSelector';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyVeSelector } from '@Redux/Selector/QuanLyVeSelector';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyDanhGiaThunk } from '@Redux/Thunk/QuanLyDanhGiaThunk';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { quanLyVeThunk } from '@Redux/Thunk/QuanLyVeThunk';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import _ from 'lodash';
import React, { useLayoutEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GiTicket } from 'react-icons/gi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';
import { MdBedroomParent } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { DashBoardPageCSS } from './DashBoardPage.styles';

function DashBoardPage() {
  const dispatch = useDispatch();
  const { CardStatsContent, Container, Content, Item } = DashBoardPageCSS;

  const { selectDanhSachDanhGia } = quanLyDanhGiaSelector;
  const { selectDanhSachNguoiDung } = quanLyNguoiDungSelector;
  const { selectDanhSachPhongChoThue } = quanLyPhongChoThueSelector;
  const { selectDanhSachVe } = quanLyVeSelector;
  const { selectDanhSachViTri } = quanLyViTriSelector;
  
  const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;
  const { getDanhSachNguoiDungAsync } = quanLyNguoiDungThunk;
  const { getDanhSachPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { getDanhSachVeAsync } = quanLyVeThunk;
  const { getDanhSachViTriAsync } = quanLyViTriThunk;

  const danhSachDanhGia = useSelector(selectDanhSachDanhGia, _.isEqual);
  const danhSachNguoiDung = useSelector(selectDanhSachNguoiDung, _.isEqual);
  const danhSachPhongChoThue = useSelector(selectDanhSachPhongChoThue, _.isEqual);
  const danhSachVe = useSelector(selectDanhSachVe, _.isEqual);
  const danhSachViTri = useSelector(selectDanhSachViTri, _.isEqual);
  
  const totalDanhSachDanhGia = danhSachDanhGia.length;
  const totalDanhSachNguoiDung = danhSachNguoiDung.length;
  const totalDanhSachPhongChoThue = danhSachPhongChoThue.length;
  const totalDanhSachVe = danhSachVe.length;
  const totalDanhSachViTri = danhSachViTri.length;

  useLayoutEffect(() => {
    Promise.all([
      dispatch(getDanhSachDanhGiaAsync()),
      dispatch(getDanhSachNguoiDungAsync()),
      dispatch(getDanhSachPhongChoThueAsync()),
      dispatch(getDanhSachVeAsync()),
      dispatch(getDanhSachViTriAsync()),
    ]);
  }, [
    dispatch,
    getDanhSachDanhGiaAsync,
    getDanhSachNguoiDungAsync,
    getDanhSachPhongChoThueAsync,
    getDanhSachVeAsync,
    getDanhSachViTriAsync,
  ]);

  return (
    <Container>
      <Content>
        <Item>
          <CardStatsContent>
            <CardStats
              statSubtitle='USERS'
              statTitle={
                totalDanhSachNguoiDung > 1000
                  ? totalDanhSachNguoiDung.toLocaleString()
                  : totalDanhSachNguoiDung
              }
              StatIconName={HiOutlineUserGroup}
              statIconColor='bg-red-500'
            />
          </CardStatsContent>
          <CardStatsContent>
            <CardStats
              statSubtitle='ROOMS'
              statTitle={
                totalDanhSachPhongChoThue > 1000
                  ? totalDanhSachPhongChoThue.toLocaleString()
                  : totalDanhSachPhongChoThue
              }
              StatIconName={MdBedroomParent}
              statIconColor='bg-orange-500'
            />
          </CardStatsContent>
          <CardStatsContent>
            <CardStats
              statSubtitle='LOCATION'
              statTitle={
                totalDanhSachViTri > 1000 ? totalDanhSachViTri.toLocaleString() : totalDanhSachViTri
              }
              StatIconName={ImLocation2}
              statIconColor='bg-pink-500'
            />
          </CardStatsContent>
          <CardStatsContent>
            <CardStats
              statSubtitle='VALUATION'
              statTitle={
                totalDanhSachDanhGia > 1000
                  ? totalDanhSachDanhGia.toLocaleString()
                  : totalDanhSachDanhGia
              }
              StatIconName={AiFillLike}
              statIconColor='bg-blue-500'
            />
          </CardStatsContent>
          <CardStatsContent>
            <CardStats
              statSubtitle='TICKETS'
              statTitle={
                totalDanhSachVe > 1000 ? totalDanhSachVe.toLocaleString() : totalDanhSachVe
              }
              StatIconName={GiTicket}
              statIconColor='bg-gray-500'
            />
          </CardStatsContent>
        </Item>
      </Content>
    </Container>
  );
}

export default DashBoardPage;
