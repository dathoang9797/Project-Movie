import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { userField } from '@Shared/Field/UserField';
import { updateProfileSchema } from '@Shared/Schema/UpdateProfileSchema';
import { messageApp, showWarning } from '@Utils/Common';
import { useFormik } from 'formik';
import _ from 'lodash';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSelector } from '@Redux/Selector/LoadingSelect';
import SpinnerDot from '@Components/SpinnerDot';

function ProfileUpdate({ handleOk, fieldProfileUpdate }) {
  const [typeInput, setTypeInput] = useState('password');
  const dispatch = useDispatch();

  const { updateProfileField, renderFormUserField } = userField;
  const initialValues = { ...updateProfileField, ...fieldProfileUpdate };
  const { messageNoDifferent } = messageApp;
  const { FormContainer, FormControl, FormButton } = Form;

  const { capNhatProfileAsync } = quanLyNguoiDungThunk;

  const { selectIsLoadingPopupState } = loadingSelector;

  const isLoadingPopup = useSelector(selectIsLoadingPopupState);

  const refChiTietNguoiDung = useRef(initialValues);

  const handleSubmitEditUser = async (valuesUpDate) => {
    const noiDungCapNhat = _.omit(valuesUpDate, ['_id']);
    const idNguoiDung = valuesUpDate._id;
    if (_.isEqual(valuesUpDate, refChiTietNguoiDung.current)) {
      showWarning(messageNoDifferent);
      return;
    }
    const params = { idNguoiDung, noiDungCapNhat, isLoading: false, isLoadingPopup: true };
    await dispatch(capNhatProfileAsync(params));
    handleOk();
  };

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

  const handleChangeSelect = async (value) => {
    await setFieldValue('type', value);
  };

  const handleChangeSwitch = async (checked) => {
    await setFieldValue('gender', checked);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: updateProfileSchema,
    onSubmit: handleSubmitEditUser,
  });

  const { setFieldValue, handleSubmit, handleChange, values, errors } = formik;

  return (
    <>
      {isLoadingPopup ? (
        <SpinnerDot />
      ) : (
        <FormContainer onFinish={handleSubmit}>
          {renderFormUserField(
            typeInput,
            updateProfileField,
            errors,
            values,
            handleChange,
            handleChangeTypeInput,
            handleChangeDatePicker,
            handleChangeSelect,
            handleChangeSwitch
          )}
          <FormControl>
            <FormButton type='submit'>UPDATE NOW</FormButton>
          </FormControl>
        </FormContainer>
      )}
    </>
  );
}

export default ProfileUpdate;
