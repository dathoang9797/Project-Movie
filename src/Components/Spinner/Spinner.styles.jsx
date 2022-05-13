import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`w-full h-full fixed bg-white top-0 left-0 z-[99999]`};
`;

const Ripple = styled.div`
  ${tw`w-[64px] h-[64px] relative bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`};

  div {
    ${tw`absolute border-4 opacity-100 border-[var(--color-primary)] rounded-[50%] animation[loader-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite] animation-fill-mode[forwards]`};
  }

  div:nth-child(2) {
    ${tw`animation-delay[-0.5s] color[var(--color-primary)]`};
  }
`;

export const SpinnerCSS = {
  Container,
  Ripple,
};
