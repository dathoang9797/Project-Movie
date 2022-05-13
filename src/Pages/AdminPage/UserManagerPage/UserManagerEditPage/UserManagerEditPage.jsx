import { showWarning } from '@Utils/Common';
import Form from '@Components/Form';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { userField } from '@Shared/Field/UserField';
import { editUserSchema } from '@Shared/Schema/EditUserSchema';
import { messageApp } from '@Utils/Common';
import { useFormik } from 'formik';
import _ from 'lodash';
import moment from 'moment';
import React, { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { UserManagerEditCSS } from './UserManagerEditPage.styles';

function UserManagerEdit() {
  const dispatch = useDispatch();
  const urlUserManager = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const { editUserField, renderFormUserField } = userField;
  const { messageNoDifferent } = messageApp;
  const { FormContainer, FormControl, FormButton } = Form;

  const { selectChiTietNguoiDung } = quanLyNguoiDungSelector;

  const { capNhatNguoiDungAsync } = quanLyNguoiDungThunk;

  const chiTietNguoiDung = useSelector(selectChiTietNguoiDung, _.isEqual);

  const isHasChiTietNguoiDung = useMemo(() => _.isEmpty(chiTietNguoiDung), [chiTietNguoiDung]);
  const initialValues = useMemo(() => {
    return {
      ...editUserField,
      ..._.omit(chiTietNguoiDung, ['__v', 'tickets', 'password', 'deleteAt', 'avatar']),
    };
  }, [chiTietNguoiDung, editUserField]);
  
  const refChiTietNguoiDung = useRef(initialValues);

  const handleSubmitEditUser = (valuesUpDate) => {
    const noiDungCapNhat = _.omit(valuesUpDate, ['_id']);
    const idNguoiDung = valuesUpDate._id;
    if (_.isEqual(valuesUpDate, refChiTietNguoiDung.current)) {
      showWarning(messageNoDifferent);
      return;
    }
    const params = { idNguoiDung, noiDungCapNhat };
    dispatch(capNhatNguoiDungAsync(params));
  };

  const handleChangeDatePicker = async (date) => {
    if (!date) return;
    const ngaySinh = moment(date).format('MM/DD/YYYY');
    await setFieldValue('birthday', ngaySinh);
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('type', value);
  };

  const handleChangeSwitch = async (checked) => {
    await setFieldValue('gender', checked);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: editUserSchema,
    onSubmit: handleSubmitEditUser,
  });

  const { setFieldValue, handleSubmit, handleChange, values, errors } = formik;

  return isHasChiTietNguoiDung ? (
    <Redirect to={urlUserManager} />
  ) : (
    <UserManagerEditCSS.Container>
      <FormContainer onFinish={handleSubmit}>
        {renderFormUserField(
          null,
          editUserField,
          errors,
          values,
          handleChange,
          null,
          handleChangeDatePicker,
          handleChangeSelect,
          handleChangeSwitch
        )}
        <FormControl>
          <FormButton type='submit'>UPDATE NOW</FormButton>
        </FormControl>
      </FormContainer>
    </UserManagerEditCSS.Container>
  );
}

export default UserManagerEdit;
