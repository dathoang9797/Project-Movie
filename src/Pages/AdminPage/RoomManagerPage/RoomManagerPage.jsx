import { TableCSS } from '@Components';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { nanoid } from '@reduxjs/toolkit';
import { roomField } from '@Shared/Field/RoomField';
import { handleDataTable } from '@Utils/Common';
import { history } from '@Utils/Libs';
import _ from 'lodash';
import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomManagerAdd from './RoomManagerAdd';
import ModalHoc from '@HOC/ModalHoc';

function RoomManagerPage(props) {
  const dispatch = useDispatch();
  const urlRoomEdit = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_EDIT;
  const urlRoomProfile = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_PROFILE;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { Table } = TableCSS;
  const { showModal, handleContentModal } = props;
  const { tableColumnsRoomField } = roomField;
  const idTable = useMemo(() => nanoid(), []);

  const {
    getDanhSachPhongChoThueAsync,
    xoaPhongChoThueAsync,
    xoaNhieuPhongAsync,
    getChiTietPhongChoThueAsync,
  } = quanLyPhongChoThueThunk;

  const { getDanhSachViTriAsync } = quanLyViTriThunk;

  const { selectDanhSachPhongFilter } = quanLyPhongChoThueSelector;

  const danhSachPhongChoThue = useSelector(selectDanhSachPhongFilter, _.isEqual);

  const handleRefreshDataThunk = useMemo(
    () => [getDanhSachViTriAsync, getDanhSachPhongChoThueAsync],
    [getDanhSachViTriAsync, getDanhSachPhongChoThueAsync]
  );

  useLayoutEffect(() => {
    Promise.all([dispatch(getDanhSachPhongChoThueAsync()), dispatch(getDanhSachViTriAsync())]);
  }, [dispatch, getDanhSachPhongChoThueAsync, getDanhSachViTriAsync]);

  const handleGetDetailRoom = async (idNguoiDung) => {
    await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
    history.push(urlRoomEdit);
  };

  const handleGetProfileRoom = async (idNguoiDung) => {
    await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
    history.push(urlRoomProfile);
  };

  const handleDeleteRoom = (idRoom) => {
    dispatch(xoaPhongChoThueAsync(idRoom));
    setSelectedRowKeys([]);
  };

  const renderDataTable = () => {
    const propsFieldAction = {
      handleGetProfileItem: handleGetProfileRoom,
      handleUpdateItem: handleGetDetailRoom,
      handleDeleteItem: handleDeleteRoom,
    };
    return handleDataTable(danhSachPhongChoThue, propsFieldAction);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleShowModal = useCallback(() => {
    handleContentModal(RoomManagerAdd);
    showModal();
  }, [handleContentModal, showModal]);

  return (
    <>
      <TabActionsAdmin
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuPhongAsync}
        handleRefreshDataThunk={handleRefreshDataThunk}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm Phòng'
        showModal={handleShowModal}
      />

      <Table
        columns={tableColumnsRoomField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </>
  );
}

export default ModalHoc(RoomManagerPage);
