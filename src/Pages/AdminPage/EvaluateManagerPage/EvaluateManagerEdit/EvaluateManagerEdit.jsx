import Form from '@Components/Form';
import { quanLyDanhGiaThunk } from '@Redux/Thunk/QuanLyDanhGiaThunk';
import { evaluateField } from '@Shared/Field/EvaluateField';
import { editEvaluateSchema } from '@Shared/Schema/EditEvaluateSchema';
import { useFormik } from 'formik';
import React, { useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { showWarning, messageApp } from '@Utils/Common';

function EvaluateManagerEdit(props) {
  const dispatch = useDispatch();
  const { editEvaluateField } = evaluateField;
  const { FormContainer, FormControl, FormGroup, FormItem, FormInput, FormButton } = Form;
  const { danhSachDanhGia, idDanhGia, handleOk } = props;
  const { messageNoDifferent } = messageApp;

  const chiTietDanhGia = useMemo(
    () => danhSachDanhGia.find((danhGia) => danhGia._id === idDanhGia),
    [danhSachDanhGia, idDanhGia]
  );

  const initialValues = useMemo(() => {
    return {
      ...editEvaluateField,
      ..._.omit(chiTietDanhGia, ['deleteAt', 'created_at', 'deleteAt', 'updatedAt', '__v']),
    };
  }, [chiTietDanhGia, editEvaluateField]);

  const refChiTietDanhGia = useRef(initialValues);

  const { capNhatDanhGiaAsync } = quanLyDanhGiaThunk;

  const handleSubmitEditEvaluate = async (valuesUpDate, { resetForm }) => {
    const content = _.omit(values, ['_id']);
    const params = { idEvaluate: values._id, content };
    if (_.isEqual(valuesUpDate, refChiTietDanhGia.current)) {
      showWarning(messageNoDifferent);
      return;
    }
    const result = await dispatch(capNhatDanhGiaAsync(params));
    if (result.error) return;
    handleOk();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: editEvaluateSchema,
    onSubmit: handleSubmitEditEvaluate,
  });

  const { handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      <FormControl>
        <FormGroup>
          <FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.content : ''}
          >
            <FormInput
              type='text'
              placeholder=' '
              name='content'
              onChange={handleChange}
              childrenProps='Your Content '
              value={values.content}
            />
          </FormItem>
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormButton type='submit'>UPDATE EVALUATE</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default EvaluateManagerEdit;
