import { Form } from 'antd';
import tw, { styled } from 'twin.macro';

const FormItem = styled(Form.Item)`
  .ant-form-item-explain-error {
    ${tw`relative top[5px]`}
  }

  .ant-form-item-control-input {
    min-height: auto;
  }

  &:focus-within svg {
    ${tw`transition-all duration-300`}
    color: var(--color-primary) !important;
  }
`;

const FormGroup = styled.div`
  ${tw`w-full px-3 relative`}
`;

const FormControl = styled.div`
  ${tw`flex  mb-1.5 w-full`}
`;

const FormContainer = styled(Form)``;

export const FormCSS = {
  FormGroup,
  FormItem,
  FormControl,
  FormContainer,
};
