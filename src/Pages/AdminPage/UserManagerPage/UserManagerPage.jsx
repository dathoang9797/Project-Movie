import { TableCSS } from '@Components/Table';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { nanoid } from '@reduxjs/toolkit';
import { userField } from '@Shared/Field/UserField';
import { handleDataTable } from '@Utils/Common';
import { history } from '@Utils/Libs';
import _ from 'lodash';
import React, { useLayoutEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserManagerAdd from './UserManagerAdd';
import ModalHoc from '@HOC/ModalHoc';

function UserManagerPage(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dispatch = useDispatch();
  const idTable = useMemo(() => nanoid(), []);
  const urlUserEdit = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT;
  const urlUserProfile = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE;
  const { tableColumnsUserField } = userField;
  const { Table } = TableCSS;
  const { showModal, handleContentModal } = props;

  const { selectDanhSachNguoiDungFilter } = quanLyNguoiDungSelector;

  const { getDanhSachNguoiDungAsync, xoaNhieuNguoiDungAsync } = quanLyNguoiDungThunk;
  const { xoaNguoiDungAsync, getChiTietNguoiDungAsync } = quanLyNguoiDungThunk;

  const danhSachNguoiDung = useSelector(selectDanhSachNguoiDungFilter, _.isEqual);

  const handleRefreshDataThunk = useMemo(
    () => [getDanhSachNguoiDungAsync],
    [getDanhSachNguoiDungAsync]
  );
  useLayoutEffect(() => {
    dispatch(getDanhSachNguoiDungAsync());
  }, [dispatch, getDanhSachNguoiDungAsync]);

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleGetDetailUser = async (idNguoiDung) => {
    await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
    history.push(urlUserEdit);
  };

  const handleDeleteUser = async (idNguoiDung) => {
    dispatch(xoaNguoiDungAsync(idNguoiDung));
    setSelectedRowKeys([]);
  };

  const handleGetProfileUser = async (idNguoiDung) => {
    await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
    history.push(urlUserProfile);
  };

  const renderDataTable = () => {
    const propsFieldAction = {
      handleGetProfileItem: handleGetProfileUser,
      handleUpdateItem: handleGetDetailUser,
      handleDeleteItem: handleDeleteUser,
    };
    return handleDataTable(danhSachNguoiDung, propsFieldAction);
  };

  const handleShowModal = useCallback(() => {
    handleContentModal(UserManagerAdd);
    showModal();
  }, [handleContentModal, showModal]);

  return (
    <>
      <TabActionsAdmin
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuNguoiDungAsync}
        handleRefreshDataThunk={handleRefreshDataThunk}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm quản trị viên'
        showModal={handleShowModal}
      />

      <Table
        columns={tableColumnsUserField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </>
  );
}

export default ModalHoc(UserManagerPage);
