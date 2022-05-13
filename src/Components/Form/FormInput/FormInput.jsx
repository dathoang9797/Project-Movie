import React from 'react';
import { FormInputCSS } from './FormInput.styles';

function FormInput(props) {
  const { childrenProps, ...rest } = props;
  const { FormInput, FormLabel, FormFieldSet, FormLegend, FormSpan } = FormInputCSS;
  return (
    <>
      <FormInput {...rest} />
      <FormLabel>{childrenProps}</FormLabel>
      <FormFieldSet>
        <FormLegend>
          <FormSpan>{childrenProps}</FormSpan>
        </FormLegend>
      </FormFieldSet>
    </>
  );
}

export default React.memo(FormInput);
