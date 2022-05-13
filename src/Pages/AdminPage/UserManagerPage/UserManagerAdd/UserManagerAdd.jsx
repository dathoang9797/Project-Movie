import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { userField } from '@Shared/Field/UserField';
import { addUserSchema } from '@Shared/Schema/AddUserSchema';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function UserManagerFormAdd({ handleOk }) {
  const [typeInput, setTypeInput] = useState('password');
  
  const dispatch = useDispatch();
  const { addUserField, renderFormUserField } = userField;
  const { FormContainer, FormControl, FormButton } = Form;
  
  const { taoNguoiDungAsync } = quanLyNguoiDungThunk;

  const handleSubmitAddUser = async (values, { resetForm }) => {
    const result = await dispatch(taoNguoiDungAsync(values));
    if (result.error) return;
    resetForm({ values: { ...addUserField, type: process.env.REACT_APP_NGUOI_DUNG_CLIENT } });
    handleOk();
  };

  const formik = useFormik({
    initialValues: { ...addUserField, type: process.env.REACT_APP_NGUOI_DUNG_CLIENT },
    validationSchema: addUserSchema,
    onSubmit: handleSubmitAddUser,
  });
  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const handleChangeDatePicker = async (date) => {
    if (!date) return;
    const ngaySinh = moment(date).format('MM/DD/YYYY');
    await setFieldValue('birthday', ngaySinh);
  };

  const handleChangeSwitch = async (checked) => {
    await setFieldValue('gender', checked);
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('type', value);
  };

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      {renderFormUserField(
        typeInput,
        addUserField,
        errors,
        values,
        handleChange,
        handleChangeTypeInput,
        handleChangeDatePicker,
        handleChangeSelect,
        handleChangeSwitch
      )}
      <FormControl>
        <FormButton type='submit'>ADD USER</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default UserManagerFormAdd;
