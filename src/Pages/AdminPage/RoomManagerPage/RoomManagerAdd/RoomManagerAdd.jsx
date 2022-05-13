import Form from '@Components/Form';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { roomField } from '@Shared/Field/RoomField';
import { addRoomSchema } from '@Shared/Schema/AddRoomSchema';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { sortValue } from '@Utils/Common';

function RoomManagerAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { addRoomField, renderFormRoomField } = roomField;
  const { FormContainer, FormControl, FormButton } = Form;

  const { taoPhongChoThueAsync } = quanLyPhongChoThueThunk;

  const { selectDanhSachViTri } = quanLyViTriSelector;

  const danhSachViTri = useSelector(selectDanhSachViTri, _.isEqual);

  const cloneDanhSachViTri = [...danhSachViTri];
  const sortDanhSachViTri = cloneDanhSachViTri.sort(sortValue);

  const handleSubmitAddRoom = async (values, { resetForm }) => {
    const result = await dispatch(taoPhongChoThueAsync(values));
    if (result.error) return;
    resetForm({ values: addRoomField });
    handleOk();
  };

  const handleChangeSwitch = (field) => {
    return async (checked) => await setFieldValue(field, checked);
  };

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('locationId', value);
  };

  const formik = useFormik({
    initialValues: { ...addRoomField, locationId: sortDanhSachViTri[0]._id },
    validationSchema: addRoomSchema,
    onSubmit: handleSubmitAddRoom,
  });

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      {renderFormRoomField(
        addRoomField,
        sortDanhSachViTri,
        errors,
        values,
        handleChange,
        handleInputNumber,
        handleChangeSwitch,
        handleChangeSelect
      )}
      <FormControl>
        <FormButton type='submit'>ADD ROOM</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default RoomManagerAdd;
