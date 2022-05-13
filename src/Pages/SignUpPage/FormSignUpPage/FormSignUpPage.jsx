import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { signUpUserSchema } from '@Shared/Schema/SignUpSchema';
import { userField } from '@Shared/Field/UserField';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormSignUpPage() {
  const dispatch = useDispatch();
  const { signUpField, renderFormUserField } = userField;
  const { setRegisterUserInfoAsync } = quanLyNguoiDungThunk;
  const [typeInput, setTypeInput] = useState('password');

  const handleSubmitRegister = (values) => dispatch(setRegisterUserInfoAsync(values));

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const handleChangeDatePicker = async (date) => {
    if (!date) return;
    const birthDay = moment(date).format('MM/DD/YYYY');
    await setFieldValue('birthday', birthDay);
  };

  const handleChangeSwitch = async (checked) => {
    await setFieldValue('gender', checked);
  };

  const formik = useFormik({
    initialValues: signUpField,
    validationSchema: signUpUserSchema,
    onSubmit: handleSubmitRegister,
  });

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <Form.FormContainer onFinish={handleSubmit}>
      {renderFormUserField(
        typeInput,
        signUpField,
        errors,
        values,
        handleChange,
        handleChangeTypeInput,
        handleChangeDatePicker,
        null,
        handleChangeSwitch
      )}

      <Form.FormControl>
        <Form.FormButton type='submit'>SIGNUP NOW</Form.FormButton>
      </Form.FormControl>
    </Form.FormContainer>
  );
}

export default FormSignUpPage;
