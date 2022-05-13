import tw, { styled } from 'twin.macro';
import FormInput from '@Components/Form/FormInput';

const Container = styled.div`
  ${tw`flex justify-center   flex-auto h-8 w-full mt-4`};
  ${tw`md:mt-0 md:flex-1 `};
`;

const Content = styled.div`
  ${tw`relative w-full max-w-xl mr-0 md:mr-6 `};
`;

const Item = styled.div`
  ${tw`absolute inset-y-0 flex items-center pl-2 w-full  h-8 md:h-auto`};

  &:focus-within svg {
    ${tw`transition-all duration-300 color[var(--color-primary) !important]`};
  }
  svg {
    ${tw`text-[#9e9e9e]`};
  }
`;

const Input = styled(FormInput)``;

export const SearchAdminCSS = {
  Container,
  Content,
  Item,
  Input,
};
