import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  ${tw`h-[112px] py-3 flex flex-col bg-white shadow-none  text-base z-index[9999] fixed px-0  items-center w-full  z-20 justify-between box-shadow[rgba(0, 0, 0, 0.08) 0px 1px 12px] font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]`};
  ${tw`md:flex-row md:h-[60px] md:py-0 md:px-20`};
`;

const Logo = styled(NavLink)``;

export const HeaderPrimaryCSS = {
  Container,
  Logo,
};
