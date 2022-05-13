import { TableCSS } from '@Components';
import ModalHoc from '@HOC/ModalHoc';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyDanhGiaSelector } from '@Redux/Selector/QuanLyDanhGiaSelector';
import { quanLyDanhGiaThunk } from '@Redux/Thunk/QuanLyDanhGiaThunk';
import { nanoid } from '@reduxjs/toolkit';
import { evaluateField } from '@Shared/Field/EvaluateField';
import { handleDataTable } from '@Utils/Common';
import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import EvaluateManagerAdd from './EvaluateManagerAdd';
import EvaluateManagerEdit from './EvaluateManagerEdit';

function EvaluateManagerPage(props) {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const idTable = useMemo(() => nanoid(), []);

  const { showModal, handlePropsContentModal, handleContentModal } = props;
  const { tableColumnsEvaluateField } = evaluateField;
  const { Table } = TableCSS;

  const { selectDanhSachDanhGiaFilter } = quanLyDanhGiaSelector;

  const { getDanhSachDanhGiaAsync, xoadanhGiaAsync, xoaNhieuDanhGiaAsync } = quanLyDanhGiaThunk;

  const danhSachDanhGia = useSelector(selectDanhSachDanhGiaFilter, shallowEqual);

  const handleRefreshDataThunk = useMemo(
    () => [getDanhSachDanhGiaAsync],
    [getDanhSachDanhGiaAsync]
  );

  useLayoutEffect(() => {
    dispatch(getDanhSachDanhGiaAsync());
  }, [dispatch, getDanhSachDanhGiaAsync]);

  const handleDeleteEvaluate = (idEvaluate) => {
    dispatch(xoadanhGiaAsync(idEvaluate));
  };

  const handleUpdateModal = (idRoom) => {
    handlePropsContentModal({ danhSachDanhGia, idDanhGia: idRoom });
    handleContentModal(EvaluateManagerEdit);
    showModal();
  };

  const renderDataTable = () => {
    const propsFieldAction = {
      handleGetProfileItem: null,
      handleDeleteItem: handleDeleteEvaluate,
      handleUpdateItem: handleUpdateModal,
    };
    return handleDataTable(danhSachDanhGia, propsFieldAction);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleShowModal = useCallback(() => {
    handleContentModal(EvaluateManagerAdd);
    showModal();
  }, [handleContentModal, showModal]);

  return (
    <>
      <TabActionsAdmin
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuDanhGiaAsync}
        handleRefreshDataThunk={handleRefreshDataThunk}
        showModal={handleShowModal}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm Đánh Giá'
      />
      <Table
        columns={tableColumnsEvaluateField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </>
  );
}

export default ModalHoc(EvaluateManagerPage);
