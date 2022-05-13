import { DatePicker } from 'antd';
import tw, { styled } from 'twin.macro';

const FormDatePicker = styled(DatePicker)`
  ${tw`w-[80%] py-1`}
  &.ant-picker-status-error.ant-picker,
  &.ant-picker-status-error.ant-picker:not([disabled]):hover {
    ${tw`border-gray-500 border-2 border-solid rounded-lg bg-transparent`};
  }

  &.ant-picker-status-error.ant-picker-focused,
  &.ant-picker-status-error.ant-picker:focus {
    box-shadow: none;
    outline: 0;
    ${tw` border-2 border-solid`};
    border-color: var(--color-primary);
  }

  .ant-picker-input-placeholder > input {
    color: var(--color-text-dark);
  }

  input::placeholder {
    color: var(--color-text-dark);
  }

  .ant-picker-suffix,
  .ant-picker-clear {
    color: var(--color-text-dark);
  }
`;

export const FormDateCSS = {
  FormDatePicker,
};
