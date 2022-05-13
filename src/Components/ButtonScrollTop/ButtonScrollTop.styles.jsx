import tw, { styled } from 'twin.macro';
import { FaArrowUp } from 'react-icons/fa';

const LinkCSS = styled.a`
  ${tw`fixed right[0] -translate-x-1/2 border-solid border-0 bottom[15px] cursor-pointer rounded text-white h-10 line-height[40px] m-0 w-10 z-10  invisible opacity-0 background[var(--color-primary)] border-color[var(--color-primary)] transition-all duration-[0.3s]`};

  &:hover {
    ${tw`text-white box-shadow[-4px 4px 24px -10px var(--color-primary) !important] transition-all duration-[0.3s]`};
  }

  &.fade-in {
    ${tw`visible opacity-100 transition-all duration-[0.3s]`};
  }
`;

const FaArrowUpCSS = styled(FaArrowUp)`
  ${tw`text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`};
`;

export const ButtonScrollTopCSS = { FaArrowUpCSS, LinkCSS };
