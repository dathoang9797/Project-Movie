import UpLoadImageTable from '@Components/UpLoadImageTable';
import { sortValue } from '@Utils/Common';

export const tableColumnsLocationField = [
  {
    title: 'Mã Vị Trí',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'Mã Vị Trí',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Mã Vị Trí',
      };
    },
  },
  {
    title: 'Tên Vị Trí',
    dataIndex: 'name',
    key: 'name',
    sorter:  (valueA, valueB) => sortValue(valueA?.name, valueB?.name, 'nameLocation'),
    onCell: (record) => {
      return {
        'data-label': 'Tên phòng',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Tên phòng',
      };
    },
  },
  {
    title: 'Hình Ảnh',
    dataIndex: 'image',
    key: 'image',

    onCell: (record) => {
      return {
        'data-label': 'Hình Ảnh',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Hình Ảnh',
      };
    },
    filters: [
      {
        text: 'Có hình',
        value: 'Có hình',
      },
      {
        text: 'Chưa có hình',
        value: 'Chưa có hình',
      },
    ],
    onFilter: (value, record) => {
      if (value === 'Có hình') {
        return record.image;
      }
      return !record.image;
    },
    render: (text, record, index) => {
      return <UpLoadImageTable key={record._id} idRoom={record._id} imageProp={record.image} />;
    },
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    sorter:  (valueA, valueB) => sortValue(valueA?.country, valueB?.country, 'country'),
    onCell: (record) => {
      return {
        'data-label': 'Country',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Country',
      };
    },
  },
  {
    title: 'Province',
    dataIndex: 'province',
    key: 'province',
    onCell: (record) => {
      return {
        'data-label': 'Province',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Province',
      };
    },
    sorter: (valueA, valueB) => sortValue(valueA?.province, valueB?.province, 'province'),
  },
  {
    title: 'Valueate',
    dataIndex: 'valueate',
    key: 'valueate',
    onCell: (record) => {
      return {
        'data-label': 'Valueate',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Valueate',
      };
    },
    sorter: (a, b) => a.valueate - b.valueate,
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
