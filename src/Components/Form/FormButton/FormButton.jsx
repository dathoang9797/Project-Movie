import tw, { styled } from 'twin.macro';
import { Mixins } from '@Assets/Styles/Abstracts/Mixins';

const FormButton = styled.button`
  ${tw`block w-full max-w-xs mx-auto  text-white rounded-lg px-2 py-2 font-semibold transition-all duration-300 bg-origin-border background-size[200% !important] filter[drop-shadow(22.9008px 11.4504px 68.7023px rgba(255, 56, 92, 0.1))] `}
  ${Mixins.backgroundLinearGradient(90)};
  &:focus {
    ${tw`outline-none shadow-none`}
  }

  &:hover {
    ${tw`text-white background-position[right center] box-shadow[0px 10px 15px 0px rgb(255 56 92 / 50%)]`};
  }
`;

export const FormButtonCSS = {
  FormButton,
};
