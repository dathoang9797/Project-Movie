import Form from '@Components/Form';
import { quanLyDanhGiaThunk } from '@Redux/Thunk/QuanLyDanhGiaThunk';
import { evaluateField } from '@Shared/Field/EvaluateField';
import { addEvaluateSchema } from '@Shared/Schema/AddEvaluateSchema';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

function EvaluateManagerAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { taoDanhGiaAsync } = quanLyDanhGiaThunk;
  const { addEvaluateField } = evaluateField;
  const { FormContainer, FormControl, FormGroup, FormItem, FormInput, FormButton } = Form;

  const handleSubmitAddEvaluate = async (values, { resetForm }) => {
    const params = { idEvaluate: null, content: values };
    const result = await dispatch(taoDanhGiaAsync(params));
    if (result.error) return;
    resetForm({ values: addEvaluateField });
    handleOk();
  };

  const formik = useFormik({
    initialValues: addEvaluateField,
    validationSchema: addEvaluateSchema,
    onSubmit: handleSubmitAddEvaluate,
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
        <FormButton type='submit'>ADD EVALUATE</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default EvaluateManagerAdd;
