import tw, { styled } from 'twin.macro';
import { Switch } from 'antd';

const FormSwitch = styled(Switch)`
  &.ant-switch {
    ${tw`bg-gray-500 `}
  }

  &.ant-switch-checked {
    background-color: var(--color-primary);
  }

  &.ant-switch-checked:focus {
    box-shadow: 0 0 0 2px var(--color-primary);
  }
`;

export const FromSwitchCSS = {
  FormSwitch,
};
