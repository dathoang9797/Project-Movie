import React from 'react';
import { FooterCSS } from '@Layouts/User/FooterUser/FooterUser.styles';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { MdAttachMoney } from 'react-icons/md';

function FooterUser() {
  const date = new Date();
  const { Container, MenuItem, Top, Bottom, CopyRight, Social } = FooterCSS;
  
  return (
    <Container>
      <Top>
        <MenuItem>
          <div>
            <h1>Hỗ trợ</h1>
          </div>

          <ul>
            <li>
              <a href='#!'>Trung tâm trợ giúp</a>
            </li>
            <li>
              <a href='#!'>Thông tin an toàn</a>
            </li>
            <li>
              <a href='#!'>Các tùy chọn hủy</a>
            </li>
            <li>
              <a href='#!'>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
            </li>
            <li>
              <a href='#!'>Hỗ trợ người khuyết tật</a>
            </li>
            <li>
              <a href='#!'>Báo cáo lo ngại của hàng xóm</a>
            </li>
          </ul>
        </MenuItem>
        <MenuItem>
          <div>
            <h1>Cộng đồng</h1>
          </div>
          <ul>
            <li>
              <a href='#!'>Airbnb.org: nhà ở cứu trợ</a>
            </li>
            <li>
              <a href='#!'>Hỗ trợ dân tị nạn Afghanistan</a>
            </li>
            <li>
              <a href='#!'>Chống phân biệt đối xử</a>
            </li>
          </ul>
        </MenuItem>
        <MenuItem>
          <div>
            <h1>Đón tiếp khách</h1>
          </div>

          <ul>
            <li>
              <a href='#!'>Thử đón tiếp khách</a>
            </li>
            <li>
              <a href='#!'>AirCover: bảo vệ cho Host</a>
            </li>
            <li>
              <a href='#!'>Xem tài nguyên đón tiếp khách</a>
            </li>
            <li>
              <a href='#!'>Truy cập diễn đàn cộng đồng</a>
            </li>
            <li>
              <a href='#!'>Đón tiếp khách có trách nhiệm</a>
            </li>
          </ul>
        </MenuItem>
        <MenuItem>
          <div>
            <h1>Giới thiệu</h1>
          </div>
          <ul>
            <li>
              <a href='#!'>Trang tin tức</a>
            </li>
            <li>
              <a href='#!'>Tìm hiểu các tính năng mới</a>
            </li>
            <li>
              <a href='#!'>Thư ngỏ từ các nhà sáng lập</a>
            </li>
            <li>
              <a href='#!'>Cơ hội nghề nghiệp</a>
            </li>
            <li>
              <a href='#!'>Nhà đầu tư</a>
            </li>
            <li>
              <a href='#!'>Airbnb Luxe</a>
            </li>
          </ul>
        </MenuItem>
      </Top>
      <Bottom>
        <CopyRight>
          <span>© {date.getFullYear()} Copyright</span>
          <div>
            <a href='/terms/privacy_policy'>Quyền riêng tư</a>
            <a href='/terms'>Điều khoản</a>
            <a href='/sitemaps/v2'>Sơ đồ trang web</a>
          </div>
        </CopyRight>
        <Social>
          <a href='/terms/privacy_policy' className='flex justify-center items-center'>
            <HiOutlineGlobeAlt className='text-base mr-1' /> Tiếng Việt (VN)
          </a>
          <a href='/terms' className='flex justify-center items-center'>
            <MdAttachMoney className='text-base ' />
            USD
          </a>
          <a href='/sitemaps/v2'>
            <FacebookOutlined />
          </a>
          <a href='/sitemaps/v2'>
            <TwitterOutlined />
          </a>
          <a href='/sitemaps/v2'>
            <InstagramOutlined />
          </a>
        </Social>
      </Bottom>
    </Container>
  );
}

export default React.memo(FooterUser);
