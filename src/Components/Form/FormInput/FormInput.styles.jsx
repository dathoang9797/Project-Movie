import tw, { styled } from 'twin.macro';
import { Input } from 'antd';

const FormSpan = styled.span`
  ${tw`inline-block text-sm relative top-0 -translate-y-1/2`}
`;

const FormLegend = styled.legend`
  ${tw` block   p-0 max-w-0 invisible transition-all duration-300 width[auto !important] h-1`};
`;

const FormFieldSet = styled.fieldset`
  ${tw`text-left absolute bottom-0 right-0 top-0 left-0 m-0 pointer-events-none overflow-hidden border-gray-500 border-2 border-solid padding[0 30px] rounded-[10px] `}
`;

const FormLabel = styled.label`
  ${tw`transition-all duration-300 absolute top-1/2 -translate-y-1/2 text-sm cursor-text m-0 left[40px] text-[rgba(0, 0, 0, 0.5)]`}
`;

const FormInput = styled(Input)`
  ${tw`w-full h-full pr-3 rounded-lg   relative z-10 transition duration-300 bg-transparent border-0 outline-none outline-offset[0] pl-3 md:pl-10 py-2
  `}

  &.ant-input:focus,
  &.ant-input-focused,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus {
    ${tw`border-transparent  bg-transparent shadow-none border-r-0 outline-none`}
  }
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    ${tw` border-transparent bg-transparent`}
  }

  &.ant-input:hover {
    ${tw` border-transparent bg-transparent`}
  }

  &:focus ~ fieldset,
  &:not(:placeholder-shown) ~ fieldset,
  &:-webkit-autofill ~ fieldset {
    ${tw` border-2 border-solid `};
    border-color: var(--color-primary);
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label,
  &:-webkit-autofill ~ label {
    ${tw`absolute top-0 left-0 block transition-all duration-300  pointer-events-none -translate-y-1/2  px-[42px] color[var(--color-primary)]`};
    ${tw`text-[10px] line-height[12px]`};
    ${tw`md:text-xs`};
  }

  &:focus ~ fieldset legend,
  &:not(:placeholder-shown) ~ fieldset legend,
  &:-webkit-autofill ~ fieldset legend {
    ${tw`px-2.5 width[inherit] max-w-full`}
  }

  & ~ label,
  & ~ fieldset span {
    ${tw`font-size[10px !important] line-height[12px !important] text-[#9e9e9e]`};
    ${tw`md:font-size[0.75rem !important] lg:line-height[1rem !important]`};
  }
`;

export const FormInputCSS = {
  FormSpan,
  FormLegend,
  FormFieldSet,
  FormLabel,
  FormInput,
};
