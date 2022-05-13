import { InputNumber as InputNumberAnt } from 'antd';
import tw, { styled } from 'twin.macro';

const InputNumber = styled(InputNumberAnt)`
  &.ant-input-number:hover {
    ${tw` border-color[var(--color-primary) ]`}
  }

  &.ant-input-number-focused {
    ${tw` border-color[var(--color-primary) ]`}
    box-shadow: 0 0 0 2px rgb(var(--color-primary-rgb-without-semi-colon) / 20%);
  }

  svg {
    ${tw`color[var(--color-primary) ]`}
  }
`;

export const FormInputNumberCSS = {
  InputNumber,
};
