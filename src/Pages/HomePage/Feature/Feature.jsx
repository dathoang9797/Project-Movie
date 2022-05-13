import { Images } from '@Assets/Images';
import { quanLyViTriAction } from '@Redux/Reducers/QuanLyViTriSlice';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { removeSpace, removeUnicode } from '@Utils/Common';
import _ from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FeatureCSS } from './Feature.styles';

function Feature() {
  const { tphcm, haNoi, daNang, vungTau, canTho, phuQuoc, nhaTrang, hoiAn } = Images;
  const urlRoom = process.env.REACT_APP_LINK_ROOM;
  const {
    Container,
    FeatureHeader,
    GridContainer,
    GirdItem,
    GirdTitle,
    GridItemDesc,
    GirdItemTitle,
  } = FeatureCSS;

  const [next, setNext] = useState(false);
  const danhSachViTriByProvinceRef = useRef(null);
  const [citys, setCitys] = useState([
    { bgImage: tphcm, cityName: 'Hồ Chí Minh', rentals: 0 },
    { bgImage: haNoi, cityName: 'Hà Nội', rentals: 0 },
    { bgImage: daNang, cityName: 'Đà Nẵng', rentals: 0 },
    { bgImage: vungTau, cityName: 'Bà Rịa - Vũng Tàu', rentals: 0 },
    { bgImage: canTho, cityName: 'Cần Thơ', rentals: 0 },
    { bgImage: phuQuoc, cityName: 'Phú Quốc', rentals: 0 },
    { bgImage: nhaTrang, cityName: 'Nha Trang', rentals: 0 },
    { bgImage: hoiAn, cityName: 'Hội An', rentals: 0 },
  ]);
  const cityRef = useRef(citys);
  const dispatch = useDispatch();

  const { getDanhSachPhongChoThueTheoViTriAsync } = quanLyPhongChoThueThunk;

  const { setProvincesAction } = quanLyViTriAction;

  const { selectDanhSachViTriByProvince } = quanLyViTriSelector;
  const { selectDanhSachPhongChoThueTheoViTri } = quanLyPhongChoThueSelector;

  const danhSachViTriByProvince = useSelector(selectDanhSachViTriByProvince, _.isEqual);
  const danhSachPhongChoThueTheoViTri = useSelector(selectDanhSachPhongChoThueTheoViTri, _.isEqual);

  const handleRentalCity = useCallback(() => {
    if (!danhSachPhongChoThueTheoViTri.length) return;
    const cityUpdate = cityRef.current.map((city) => {
      const cityNameFormat = removeSpace(removeUnicode(city.cityName));
      const roomLength = danhSachPhongChoThueTheoViTri.filter((room) => {
        return removeSpace(removeUnicode(room.locationId.province)).includes(cityNameFormat);
      }).length;
      const valueUpdate = { ...city, rentals: roomLength };
      return valueUpdate;
    });
    setCitys(cityUpdate);
  }, [danhSachPhongChoThueTheoViTri]);

  useEffect(() => {
    const provinceArr = cityRef.current.map((city) => city.cityName);
    dispatch(setProvincesAction(provinceArr));
    danhSachViTriByProvinceRef.current = [];
    setNext(true);
  }, [dispatch, setProvincesAction]);

  useEffect(() => {
    if (!next) return;
    if (_.isEqual(danhSachViTriByProvinceRef.current, danhSachViTriByProvince)) return;
    danhSachViTriByProvinceRef.current = danhSachViTriByProvince;
    const idViTriArr = danhSachViTriByProvince.map((item) => item._id);
    const params = { idViTriArr, isLoading: false, isLoadingPopup: false };
    dispatch(getDanhSachPhongChoThueTheoViTriAsync(params));
  }, [danhSachViTriByProvince, dispatch, getDanhSachPhongChoThueTheoViTriAsync, next]);

  useEffect(() => {
    handleRentalCity();
  }, [handleRentalCity]);

  const renderCity = () => {
    return citys.map((city, index) => {
      return (
        <NavLink to={`${urlRoom}/Thành phố ${city.cityName}`} key={`${city}-${index}`}>
          <GirdItem image={city.bgImage}>
            <GirdItemTitle>{city.cityName}</GirdItemTitle>
            <GridItemDesc>{city.rentals} rental</GridItemDesc>
          </GirdItem>
        </NavLink>
      );
    });
  };

  return (
    <Container>
      <FeatureHeader>
        <GirdTitle>Khám phá những điểm đến gần đây</GirdTitle>
      </FeatureHeader>
      <GridContainer>{renderCity()}</GridContainer>
    </Container>
  );
}

export default React.memo(Feature);
