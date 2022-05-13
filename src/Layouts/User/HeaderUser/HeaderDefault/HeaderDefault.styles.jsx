import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';
import { ProfileMenuCSS } from '@Layouts/User/HeaderUser/ProfileMenu/ProfileMenu.styles';

const { BecomeHost, ChooseLanguage, UserProfile } = ProfileMenuCSS;

const WrapHeader = tw.div`absolute w-full shadow-none border-bottom[1px solid rgba(255,255,255,.15)] z-index[9999]  text-base background[rgba(51,51,51,0)] `;

const Container = styled.div`
  ${tw`h-[112px] py-3 px-0 flex flex-col items-center w-full  z-20 justify-between box-shadow[rgba(0, 0, 0, 0.08) 0px 1px 12px] font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]`};
  ${tw`md:flex-row md:h-[80px] md:py-0 md:px-20`}
  ${BecomeHost} {
    ${tw`color[white !important] transition-colors duration-300`}
    &:hover {
      ${tw`background-color[var(--color-primary)] transition-colors duration-300`};
    }
  }

  ${ChooseLanguage} div {
    svg {
      ${tw`stroke[#fff !important]`};
    }
  }

  ${UserProfile} {
    ${tw`transition-colors duration-300`}
    &:hover {
      ${tw`background-color[var(--color-primary)] text-white border-color[var(--color-primary)] transition-colors duration-300`};
    }
    &:hover svg {
      ${tw`fill[rgb(255, 255, 255) !important] transition-colors duration-300`};
    }
  }
`;

const Logo = styled(NavLink)``;

export const HeaderDefaultCSS = {
  WrapHeader,
  Container,
  Logo,
};
