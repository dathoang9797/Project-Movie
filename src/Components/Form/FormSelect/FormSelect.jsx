import tw, { styled } from 'twin.macro';
import { Select } from 'antd';

const { Option } = Select;

const FormSelect = styled(Select)`
  ${tw`rounded-[10px] py-1`}

  &.ant-select {
    ${tw`border-gray-500 border-2 border-solid w-3/5`}
  }

  .ant-select-selection-item,
  .ant-select-arrow {
    ${tw` color[var(--color-text-dark)]`}
  }
`;

const FormOption = styled(Option)``;

export const FormSelectCSS = { FormSelect, FormOption };
