import tw, { styled } from 'twin.macro';
import { Mixins } from '@Assets/Styles/Abstracts/Mixins';

const { backgroundLinearGradient } = Mixins;

const MenuItem = styled.section`
  ${tw`xl:flex-grow xl:flex-shrink-0 xl:flex-basis[0%] px-3 `};

  &:not(:last-child) {
    ${tw`xl:pb-0 xl:m-0 xl:border-0 pb-6 mb-6 border-b-1 md:pb-3 border-color[rgb(221, 221, 221) !important]`};
  }

  div {
    ${tw`text-sm font-bold color[rgb(34, 34, 34) !important]`};

    h1 {
      ${tw`my-0 text-base`};
    }
  }

  ul {
    ${tw`xl:block xl:mx-0 md:flex md:flex-wrap md:mx-0 list-none m-0 p-0`};
    li {
      ${tw`transition-all duration-300 py-2 md:flex-basis[33.3%] `};
      a {
        ${tw`text-sm transition-all duration-300 relative  text-decoration[none] font-family[inherit] font-style[inherit] font-variant[inherit] outline-none py-2  color[rgb(34, 34, 34)] `};

        &:after {
          ${tw`transition-all duration-300 content absolute left-0 bottom-0 w-0 h-[3px]`};
          ${backgroundLinearGradient(114.58)};
        }
      }

      &:hover a {
        color: var(--color-primary);
        &:after {
          ${tw`w-full`};
        }
      }
    }
  }
`;
const CopyRight = styled.div`
  ${tw`flex justify-center items-center mt-0 flex-col xl:flex-row`};
  span,
  a {
    ${tw`mr-4 transition-all  duration-300  md:pb-0.5`};
    color: rgb(34, 34, 34);
    &:hover {
      color: var(--color-primary);
      &:after {
        width: 100%;
      }
    }
  }
`;
const Social = styled.div`
  ${tw`flex justify-center items-center `};
  span,
  a {
    ${tw`mr-4 transition-all  duration-300 color[rgb(34, 34, 34)]`};
    &:hover {
      color: var(--color-primary);
    }
    & span {
      ${tw`text-xl mr-0`};
    }
    &:hover span {
      color: var(--color-primary);
    }
  }
`;

const Bottom = styled.div`
  ${tw`px-0 m-auto py-6  flex justify-between items-center flex-col-reverse relative`};
  ${tw`xl:flex-grow  xl:flex-row md:px-20`};
  &:after {
    ${tw`w-[calc(100% - 160px)] border-t-1 border-gray-300 content absolute py-10`}
  }
`;

const Top = styled.div`
  ${tw`container -webkit-box-direction[normal !important] -webkit-box-orient[horizontal !important] px-0`};
  ${tw`sm:mr-0 sm:max-w-full`};
  ${tw`md:flex md:flex-direction[column] md:py-10`};
  ${tw`xl:flex  xl:flex-row xl:py-12  xl:m-auto`};
`;

const Container = styled.footer`
  ${tw`bg-gray-100 text-left py-8`};
  ${tw`xl:py-0 xl:text-center`};
`;

export const FooterCSS = {
  Container,
  Bottom,
  Top,
  MenuItem,
  CopyRight,
  Social,
};
