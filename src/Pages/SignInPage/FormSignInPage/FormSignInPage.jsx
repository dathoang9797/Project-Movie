import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { userField } from '@Shared/Field/UserField';
import { signInUserSchema } from '@Shared/Schema/SignInSchema';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormSignInPageCSS } from './FormSignInPage.styles';

function FormSignInPage() {
  const [typeInput, setTypeInput] = useState('password');

  const dispatch = useDispatch();
  const { FormContainer, FormControl, FormButton } = Form;
  const { NotHaveAccountLink } = FormSignInPageCSS;
  const { signInField, renderFormUserField } = userField;

  const { setUserInfoAsync } = quanLyNguoiDungThunk;

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const formik = useFormik({
    initialValues: signInField,
    validationSchema: signInUserSchema,
    onSubmit: (values) => {
      dispatch(setUserInfoAsync(values));
    },
  });

  const { handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit}>
      {renderFormUserField(
        typeInput,
        signInField,
        errors,
        values,
        handleChange,
        handleChangeTypeInput,
        null,
        null,
        null
      )}
      <FormControl>
        <FormButton type='submit'>SIGNIN NOW</FormButton>
      </FormControl>
      <NotHaveAccountLink>
        <NavLink to={process.env.REACT_APP_LINK_SIGN_UP}>Bạn chưa có tài khoản ?</NavLink>
      </NotHaveAccountLink>
    </FormContainer>
  );
}

export default FormSignInPage;
