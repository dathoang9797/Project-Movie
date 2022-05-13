import React from 'react';
import Form from '@Components/Form';
import { locationField } from '@Shared/Field/LocationField';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { useFormik } from 'formik';
import { addLocationSchema } from '@Shared/Schema/AddLocationSchema';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import _ from 'lodash';

function LocationManagerAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { taoviTriAsync } = quanLyViTriThunk;
  const { addLocationField, renderFormLocationField } = locationField;
  const { FormContainer, FormControl, FormButton } = Form;
  const { selectorDanhSachProvinces } = quanLyViTriSelector;
  const danhSachProvinces = useSelector(selectorDanhSachProvinces, _.isEqual);

  const handleSubmitAddLocation = async (values, { resetForm }) => {
    const result = await dispatch(taoviTriAsync(values));
    if (result.error) return;
    resetForm({ values: addLocationField });
    handleOk();
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('province', value);
  };

  const formik = useFormik({
    initialValues: {...addLocationField, province: danhSachProvinces[0].province_name},
    validationSchema: addLocationSchema,
    onSubmit: handleSubmitAddLocation,
  });

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      {renderFormLocationField(
        addLocationField,
        danhSachProvinces,
        errors,
        values,
        handleChange,
        handleInputNumber,
        handleChangeSelect
      )}
      <FormControl>
        <FormButton type='submit'>ADD LOCATION</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default LocationManagerAdd;
