import tw, { styled } from 'twin.macro';

const ContentRight = styled.div`
  ${tw`w-full py-10 px-5 m-0`};
  ${tw`md:w-1/2 md:px-10`};
`;

const ContentLeft = styled.div`
  ${tw`hidden w-1/2 bg-indigo-500 py-10 px-10`};
  ${tw` md:block`};
  background: var(--color-primary);
`;

const Content = styled.div`
  ${tw`w-full`};
  ${tw`md:flex`};
`;

const Form = styled.div`
  max-width: 1000px;
  ${tw`bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden`};
  input {
    ${tw`pl-10 md:pl-10`}
  }
`;

const Container = styled.div`
  ${tw`min-w-full min-h-screen bg-gray-400  flex items-center justify-center px-5 pb-10 pt-36`};
  ${tw`md:pt-20  md:px-10`};

`;

export const SignUpCSS = {
  Container,
  Form,
  Content,
  ContentLeft,
  ContentRight,
};
