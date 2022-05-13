import { Mixins } from '@Assets/Styles/Abstracts/Mixins';
import { NavLink } from 'react-router-dom';
import tw, { css, styled } from 'twin.macro';

const NavLinkCSS = css`
  ${tw`block w-full max-w-xs mx-auto  text-white rounded-lg px-2 py-2 font-semibold transition-all duration-300 bg-origin-border background-size[400% !important] filter[drop-shadow(22.9008px 11.4504px 68.7023px rgba(255, 56, 92, 0.1))] `};
  ${Mixins.backgroundLinearGradient(90)};

  &:focus {
    ${tw`outline-none shadow-none border-color[transparent] background[transparent] text-white`};
  }

  &:hover {
    ${tw`text-white background-position[right center] box-shadow[0px 10px 15px 0px rgb(255 56 92 / 50%)]  border-color[transparent]`};
  }
`;

const Container = styled.section`
  ${tw`flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100`};
`;

const Content = styled.div`
  ${tw`container flex flex-col items-center justify-center px-5 mx-auto my-8`};
`;

const Item = styled.div`
  ${tw`max-w-lg text-center`};
  h1 {
    ${tw`mb-8 font-extrabold text-9xl dark:text-gray-600`}
    & > span {
      ${tw`sr-only`}
    }
  }
  p:nth-child(2) {
    ${tw`text-2xl font-semibold md:text-3xl`}
  }

  p:nth-child(3) {
    ${tw`mt-4 mb-8 dark:text-gray-400`}
  }
`;

const NavLinkNotFound = styled(NavLink)`
  ${NavLinkCSS};
`;

export const NotFoundCSS = {
  NavLinkNotFound,
  Container,
  Content,
  Item,
};
