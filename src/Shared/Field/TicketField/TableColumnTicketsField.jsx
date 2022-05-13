import moment from 'moment';
import { sortValue } from '@Utils/Common';

export const tableColumnsTicketField = [
  {
    title: 'Mã Vé',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'Mã Vé',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Mã Vé',
      };
    },
  },
  {
    title: 'Người đặt',
    dataIndex: ['userId', 'name'],
    key: 'name',
    sorter: (valueA, valueB) => sortValue(valueA?.userId?.name, valueB?.userId?.name, 'userIdName'),
    onCell: (record) => {
      return {
        'data-label': 'Người đặt',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Người đặt',
      };
    },
  },
  {
    title: 'Tổng số vé',
    dataIndex: ['userId', 'tickets'],
    key: 'tickets',
    render: (text, record, index) => {
      if (!record.userId?.tickets || !record.userId.tickets.length) {
        return 0;
      }
      return record.userId.tickets.length;
    },
    sorter: (valueA, valueB) =>
      sortValue(valueA?.userId?.tickets, valueB?.userId?.tickets, 'userIdTickets'),

    onCell: (record) => {
      return {
        'data-label': 'Content',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Content',
      };
    },
  },
  {
    title: 'Tên phòng',
    dataIndex: ['roomId', 'name'],
    key: 'room',
    sorter: (valueA, valueB) => sortValue(valueA?.roomId?.name, valueB?.roomId?.name, 'roomIdName'),
    onCell: (record) => {
      return {
        'data-label': 'Ngày tạo vé',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Ngày tạo vé',
      };
    },
  },
  {
    title: 'CheckIn',
    dataIndex: 'checkIn',
    key: 'checkIn',
    render: (text, record, index) => moment(record.checkIn).format('DD/MM/YYYY'),
    onCell: (record) => {
      return {
        'data-label': 'CheckIn',
      };
    },
    sorter: (valueA, valueB) => sortValue(valueA?.checkIn, valueB?.checkIn, 'checkIn'),
  },
  {
    title: 'CheckOut',
    dataIndex: 'checkOut',
    key: 'checkOut',
    render: (text, record, index) => moment(record.checkOut).format('DD/MM/YYYY'),
    onCell: (record) => {
      return {
        'data-label': 'CheckOut',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'CheckOut',
      };
    },
    sorter: (valueA, valueB) => sortValue(valueA?.checkOut, valueB?.checkOut, 'checkOut'),
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    onCell: (record) => {
      return {
        'data-label': 'Thao tác',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Thao tác',
      };
    },
  },
];
