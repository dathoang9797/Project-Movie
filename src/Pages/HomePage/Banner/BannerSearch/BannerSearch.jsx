import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { filterSearchValue } from '@Utils/Common';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { BannerSearchCSS } from './BannerSearch.styles';
import { useHistory } from 'react-router-dom';

function BannerSearch() {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [danhSachViTriFilter, setDanhSachViTriFilter] = useState([]);
  const spacePressedRef = useRef(false);
  const urlRoom = process.env.REACT_APP_LINK_ROOM;
  const keyTypeFilterLocation = process.env.REACT_APP_KEY_FILTER_LOCATION_LIST;
  const history = useHistory();
  const tpHcm = 'Thành phố hồ chí minh';
  const {
    PopupSearchGoAnyWhere,
    PopupItemProvince,
    PopupItemProvinceImage,
    PopupItemProvinceName,
    SearchInput,
    Container,
    ContainerPopover,
  } = BannerSearchCSS;

  const { selectDanhSachViTri } = quanLyViTriSelector;

  const danhSachViTri = useSelector(selectDanhSachViTri, _.isEqual);

  useEffect(() => {
    const handleOnScroll = () => {
      setVisibleSearch(false);
      setSearchValue('');
    };
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, []);

  const handleRenderListProvince = () => {
    return danhSachViTriFilter.map((item, index) => {
      const { name, image, province, _id } = item;
      return (
        <PopupItemProvince
          key={`PopupItemProvince-${_id}-${index}`}
          to={`${urlRoom}/${province}`}
          onClick={() => {
            setVisibleSearch(false);
            setSearchValue('');
          }}
        >
          <PopupItemProvinceImage>
            {!image ? <GrLocation /> : <img src={image} alt={image} />}
          </PopupItemProvinceImage>
          <PopupItemProvinceName>
            <p>{name}</p>
          </PopupItemProvinceName>
        </PopupItemProvince>
      );
    });
  };

  const contentPopupSearch = (
    <PopupSearchGoAnyWhere>
      {!danhSachViTriFilter.length ? (
        <>
          <p>Đi bất cứ đâu, bất cứ lúc nào</p>
          <button onClick={() => history.push(`${urlRoom}/${tpHcm}`)}>
            <span>Tôi Linh Hoạt</span>
            <BsChevronRight />
          </button>
        </>
      ) : (
        handleRenderListProvince()
      )}
    </PopupSearchGoAnyWhere>
  );

  const handleChange = (e) => {
    const { value } = e.target;
    const danhSachViTriFilter = filterSearchValue(value, danhSachViTri, keyTypeFilterLocation);
    if (!value.trim().length) {
      setDanhSachViTriFilter([]);
      setSearchValue(value);
      return;
    }
    setDanhSachViTriFilter(danhSachViTriFilter);
    setSearchValue(value);
    setVisibleSearch(true);
  };

  const handleVisibleChange = (isVisible) => {
    if (spacePressedRef.current) {
      setVisibleSearch(true);
      spacePressedRef.current = false;
    } else {
      setVisibleSearch(isVisible);
    }
  };

  const handleKeyUp = (event) => {
    if (event.which === 32) {
      spacePressedRef.current = true;
    }
  };

  return (
    <ContainerPopover
      trigger='click'
      visible={visibleSearch}
      onVisibleChange={handleVisibleChange}
      placement='bottom'
      overlayClassName='wrapper-search-popup'
      content={contentPopupSearch}
      align={{ offset: [0, 20] }}
    >
      <Container>
        <SearchInput
          type='text'
          placeholder='What are you looking for ?'
          onChange={handleChange}
          value={searchValue}
          onKeyUp={handleKeyUp}
        />
      </Container>
    </ContainerPopover>
  );
}

export default React.memo(BannerSearch);
