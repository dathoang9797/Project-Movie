import { editLocationSchema } from '@Shared/Schema/EditLocationSchema';
import { showWarning } from '@Utils/Common';
import Form from '@Components/Form';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { locationField } from '@Shared/Field/LocationField';
import { messageApp } from '@Utils/Common';
import { useFormik } from 'formik';
import _ from 'lodash';
import React, { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LocationManagerEditCSS } from './LocationManagerEditPage.styles';

function LocationMangerEditPage() {
  const dispatch = useDispatch();
  const urlLocationsManager = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER;
  const { editLocationField, renderFormLocationField } = locationField;
  const { messageNoDifferent } = messageApp;
  const { Container } = LocationManagerEditCSS;
  const { FormContainer, FormControl, FormButton } = Form;
  const { capNhatViTriAsync } = quanLyViTriThunk;
  const { selectChiTietViTri, selectorDanhSachProvinces } = quanLyViTriSelector;
  const chiTietViTri = useSelector(selectChiTietViTri, _.isEqual);
  const isHasChiTietViTri = useMemo(() => _.isEmpty(chiTietViTri), [chiTietViTri]);
  const initialValues = useMemo(() => {
    return {
      ...editLocationField,
      ..._.omit(chiTietViTri, ['__v', 'deleteAt', 'image']),
    };
  }, [chiTietViTri, editLocationField]);
  const refChiTietNguoiDung = useRef(initialValues);
  const danhSachProvinces = useSelector(selectorDanhSachProvinces, _.isEqual);

  const handleSubmitEditLocation = (valuesUpDate) => {
    const noiDungCapNhat = _.omit(valuesUpDate, ['_id']);
    const idLocation = valuesUpDate._id;
    if (_.isEqual(valuesUpDate, refChiTietNguoiDung.current)) {
      showWarning(messageNoDifferent);
      return;
    }
    const params = { idLocation, noiDungCapNhat };
    dispatch(capNhatViTriAsync(params));
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('province', value);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: editLocationSchema,
    onSubmit: handleSubmitEditLocation,
  });

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return isHasChiTietViTri ? (
    <Redirect to={urlLocationsManager} />
  ) : (
    <Container>
      <FormContainer onFinish={handleSubmit} size='small'>
        {renderFormLocationField(
          editLocationField,
          danhSachProvinces,
          errors,
          values,
          handleChange,
          handleInputNumber,
          handleChangeSelect
        )}
        <FormControl>
          <FormButton type='submit'>EDIT LOCATION</FormButton>
        </FormControl>
      </FormContainer>
    </Container>
  );
}

export default LocationMangerEditPage;
