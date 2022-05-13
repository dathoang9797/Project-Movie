import { Tag, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { sortValue } from '@Utils/Common';

export const tableColumnsUserField = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'STT',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'STT',
      };
    },
  },
  {
    title: 'Họ Tên',
    dataIndex: 'name',
    key: 'name',
    sortDirections: ['ascend', 'descend'],
    sorter: (valueA, valueB) => sortValue(valueA?.name, valueB?.name, 'name'),
    onCell: (record) => {
      return {
        'data-label': 'Họ Tên',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Họ Tên',
      };
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sortDirections: ['ascend', 'descend'],
    sorter: (valueA, valueB) => sortValue(valueA?.email, valueB?.email, 'email'),
    onCell: (record) => {
      return {
        'data-label': 'Email',
      };
    },
    onHeaderCell: () => {
      return {
        'data-label': 'Email',
      };
    },
  },
  {
    title: 'Hình Ảnh',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (text, record, index) => {
      if (!record.avatar) {
        return <Avatar icon={<UserOutlined />} />;
      }
      return <Avatar src={record.avatar} alt={record.avatar} />;
    },
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
        return record.avatar;
      }
      return !record.avatar;
    },
  },
  {
    title: 'Loại Tài Khoản',
    dataIndex: 'type',
    key: 'type',
    render: (text, record) => {
      if (record.type === process.env.REACT_APP_NGUOI_DUNG_ADMIN) {
        return (
          <Tag color={'green'} className='m-0 sm:text-xs md:text-xs lg:text-xs xl:text-sm'>
            Quản Trị
          </Tag>
        );
      }
      return (
        <Tag color={'blue'} className='m-0 sm:text-xs md:text-xs lg:text-xs xl:text-sm'>
          Khách Hàng
        </Tag>
      );
    },
    sortDirections: ['ascend', 'descend'],
    sorter: (valueA, valueB) => sortValue(valueA?.type, valueB?.type, 'type'),
    onCell: (record) => {
      return {
        'data-label': 'Loại Tài Khoản',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Loại Tài Khoản',
      };
    },
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
