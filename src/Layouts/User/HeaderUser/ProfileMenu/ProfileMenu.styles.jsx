import tw, { styled } from 'twin.macro';
import { Popover } from 'antd';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  ${tw`inline-flex justify-center items-center font-family[ Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif] md:mt-0 mt-4 `}
`;

const BecomeHost = styled.a`
  ${tw` border-none flex justify-center items-center py-2.5 px-4 cursor-pointer text-decoration[none] h-[42px] border-radius[22px] transition-all duration-300 color[var(--color-text-dark) !important] `}
  &:hover {
    ${tw`background-color[var(--color-medium)] color[var(--color-primary)]`};
  }
`;

const ChooseLanguage = styled.button`
  ${tw`bg-transparent border-0 cursor-pointer m-0 text-align[inherit] p-3 transition-colors duration-[250] inline-block appearance-none overflow-visible text-decoration[none]  user-select[none] outline-none text-sm font-semibold relative whitespace-nowrap z-10`};
  &:before {
    ${tw`left-[-3px] right-[-3px] bottom-0 content absolute top-0 z-0 rounded-3xl`};
  }
  div {
    ${tw`flex relative z-10 h-4 w-4 items-center`};
  }
`;

const UserProfile = styled(Popover)`
  ${tw`border-1 border-color[#ddd] color[var(--color-text-dark)] cursor-pointer inline-flex  m-0 text-align[inherit]   duration-[250] appearance-none overflow-visible text-decoration[none] padding[5px 5px 5px 12px !important] h-[42px]  user-select[auto !important] items-center outline-none bg-white   border-radius[21px] align-middle	transition-shadow  relative  z-10 `};
`;
const BurgerMenu = styled.div`
  img {
    ${tw`w-4 h-4`}
  }
`;

const AccountMenu = styled.div`
  ${tw`color[#717171] flex[0 0 30px] ml-3 overflow-hidden relative w-8 h-8  z-10`};
  img {
    ${tw`w-8 h-8 rounded-full`};
  }
`;

const PopupItemUserProfile = styled(NavLink)`
  ${tw`pl-1 block text-sm w-full font-normal cursor-pointer padding[0.5rem 1.5rem]  whitespace-nowrap bg-transparent border-0 text-align[inherit] color[#212529] hover:color[#212529]`};
  &:first-child {
    ${tw`color[var(--color-text-dark)] font-semibold`};
  }
  &:hover {
    ${tw`color[#16181b] text-decoration[none] background-color[#f8f9fa] outline-none border-none transition-colors duration-300 rounded-2xl`}
  }
`;

const ButtonLogout = styled.button`
  ${tw`pl-1 block text-sm w-full font-normal cursor-pointer padding[0.5rem 1.5rem]  whitespace-nowrap bg-transparent border-0 text-align[inherit] color[#212529] hover:color[#212529]`};
  &:first-child {
    ${tw`color[var(--color-text-dark)] font-semibold`};
  }
  &:hover {
    ${tw`color[#16181b] text-decoration[none] background-color[#f8f9fa] outline-none border-none transition-colors duration-300 rounded-2xl`}
  }
`;

export const ProfileMenuCSS = {
  Container,
  BecomeHost,
  PopupItemUserProfile,
  ChooseLanguage,
  UserProfile,
  BurgerMenu,
  AccountMenu,
  ButtonLogout,
};
