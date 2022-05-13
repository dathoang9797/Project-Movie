import moment from 'moment';
import { sortValue } from '@Utils/Common';

export const tableColumnsEvaluateField = [
  {
    title: 'Mã Đánh Giá',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'Mã Đánh Giá',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Mã Đánh Giá',
      };
    },
  },
  {
    title: 'Nội Dung',
    dataIndex: 'content',
    key: 'content',
    sorter: (valueA, valueB) => sortValue(valueA?.content, valueB?.content, 'content'),
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
    title: 'Ngày tạo đánh giá',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (text, record, index) => moment(record.created_at).format('DD/MM/YYYY'),
    sorter: (valueA, valueB) => sortValue(valueA?.created_at, valueB?.created_at, 'created_at'),
    onCell: (record) => {
      return {
        'data-label': 'Ngày tạo đánh giá',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Ngày tạo đánh giá',
      };
    },
  },
  {
    title: 'Ngày cập nhật đánh giá',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (text, record, index) => moment(record.updatedAt).format('DD/MM/YYYY'),
    onCell: (record) => {
      return {
        'data-label': 'Ngày cập nhật đánh giá',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Ngày cập nhật đánh giá',
      };
    },
    sorter: (valueA, valueB) => sortValue(valueA?.updatedAt, valueB?.updatedAt, 'updatedAt'),
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
