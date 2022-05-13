import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';

const WrapHeader = tw.div`relative w-full shadow-none  z-index[9999]  text-base  bg-white `;

const Container = styled.div`
  ${tw`h-[112px] py-3 flex flex-col bg-white   items-center w-full  z-20 justify-between box-shadow[rgba(0, 0, 0, 0.08) 0px 1px 12px] font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif px-0]`};
  ${tw`md:flex-row md:h-[60px] md:py-0 md:px-20`};

  &.cloned {
    ${tw`position[fixed !important] top-0 w-full z-index[99999] box-shadow[0 0 12px 0 rgb(0 0 0 / 12%)] text-base`};
  }

  &.cloned.sticky {
    ${tw`opacity-100 visible transform[translate(0, 0) scale(1)] transition-all duration-300`}
  }

  &.cloned.unsticky {
    ${tw`opacity-100 invisible transform[translate(0, -100%) scale(1)] transition-all duration-300 pointer-events-none`}
  }
`;

const Logo = styled(NavLink)``;

export const HeaderStickyCSS = {
  WrapHeader,
  Container,
  Logo,
};
