import { TableCSS } from '@Components';
import ModalHoc from '@HOC/ModalHoc';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyVeSelector } from '@Redux/Selector/QuanLyVeSelector';
import { quanLyVeThunk } from '@Redux/Thunk/QuanLyVeThunk';
import { nanoid } from '@reduxjs/toolkit';
import { ticketField } from '@Shared/Field/TicketField';
import { handleDataTable } from '@Utils/Common';
import _ from 'lodash';
import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TicketManagerAdd from './TicketManagerAdd';
import TicketManagerEdit from './TicketManagerEdit';

function TicketManagerPage(props) {
  const dispatch = useDispatch();
  const { selectDanhSachVeFilter } = quanLyVeSelector;
  const { getDanhSachVeAsync, xoaVeAsync, xoaNhieuVeAsync } = quanLyVeThunk;
  const { tableColumnsTicketField } = ticketField;
  const idTable = useMemo(() => nanoid(), []);
  const danhSachVe = useSelector(selectDanhSachVeFilter, _.isEqual);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { Table } = TableCSS;
  const { showModal, handlePropsContentModal, handleContentModal } = props;
  const handleRefreshDataThunk = useMemo(
    () => [getDanhSachVeAsync],
    [getDanhSachVeAsync]
  );
    

  useLayoutEffect(() => {
    dispatch(getDanhSachVeAsync());
  }, [dispatch, getDanhSachVeAsync]);

  const handleDeleteTicket = (idVe) => {
    dispatch(xoaVeAsync(idVe));
  };

  const handleUpdateModal = (idVe) => {
    handlePropsContentModal({ danhSachVe, idVe });
    handleContentModal(TicketManagerEdit);
    showModal();
  };

  const renderDataTable = () => {
    const propsFieldAction = {
      handleGetProfileItem: null,
      handleUpdateItem: handleUpdateModal,
      handleDeleteItem: handleDeleteTicket,
    };
    return handleDataTable(danhSachVe, propsFieldAction);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleShowModal = useCallback(() => {
    handleContentModal(TicketManagerAdd);
    showModal();
  }, [handleContentModal, showModal]);

  return (
    <>
      <TabActionsAdmin
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuVeAsync}
        handleRefreshDataThunk={handleRefreshDataThunk}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm Vé'
        showModal={handleShowModal}
      />
      <Table
        columns={tableColumnsTicketField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </>
  );
}

export default ModalHoc(TicketManagerPage);
