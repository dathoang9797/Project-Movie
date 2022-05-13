import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`dark:bg-gray-700 flex-col flex justify-start my-2`};
  ${tw`sm:text-sm sm:py-1 sm:px-10`};
  ${tw`md:text-base md:py-1 md:px-12 md:flex md:flex-row`};
  ${tw`lg:text-lg lg:py-2 lg:px-14`};
  ${tw`xl:text-xl xl:py-3 xl:px-16`};

  & button {
    ${tw`my-1 flex items-center justify-center  md:w-auto md:m-0 `}
  }

  & button.ant-btn[disabled] {
    ${tw`  background-color[rgba(209, 213, 219) !important] `};
  }
  
  & button:nth-child(2),
  & button.ant-btn[disabled] {
    ${tw`w-full margin-right[auto !important] md:margin-right[ 16px !important] md:w-auto`};
  }
`;

export const TabActionAdminCSS = {
  Container,
};
