import React, { useMemo } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { BannerSelectCSS } from './BannerSelect.styles';
import { Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { useSelector } from 'react-redux';
import _ from 'lodash';

function BannerSelect() {
  const { BannerSelect, Container } = BannerSelectCSS;
  const urlRoom = process.env.REACT_APP_LINK_ROOM;
  const { selectorDanhSachProvinces } = quanLyViTriSelector;
  const danhSachProvince = useSelector(selectorDanhSachProvinces, _.isEqual);

  const handleItem = useMemo(() => {
    return danhSachProvince
      .map((province, index) => {
        return {
          label: (
            <>
              <NavLink to={`${urlRoom}/${province.province_name}`}>
                {province.province_name}
              </NavLink>
            </>
          ),
          key: `${index}`,
        };
      })
      .sort();
  }, [danhSachProvince, urlRoom]);

  const menu = <Menu items={handleItem} />;

  return (
    <Container>
      <BannerSelect overlay={menu} trigger={['click']} overlayClassName='dropdown-province'>
        <Space>
          All Locations <IoLocationSharp />
        </Space>
      </BannerSelect>
    </Container>
  );
}

export default React.memo(BannerSelect);
