import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`h-10 flex-row background-color[white !important]  rounded-lg inline-flex items-center justify-center transition-all duration-300 z-10 absolute mt-6 top-[15%] left-1/2 -translate-x-1/2`};
  &:hover {
    ${tw`background-color[rgb(247, 247, 247) !important]`};
  }
`;

const SpinnerMapButton = styled.button`
  ${tw`inline-flex items-center justify-center h-full w-full  bg-none border-2 border-transparent py-0 px-3.5  color[rgb(34, 34, 34) !important] rounded-lg outline-none `};

  & > div {
    ${tw`-webkit-box-pack[center] -webkit-box-align[center] flex items-center justify-center h-full  w-10`};
    span {
      & > span:first-child {
        ${tw`background-color[var(--color-text-dark)] w-2 h-2 mx-0.5 rounded-[100%] inline-block animation-name[spinner-search] animation-duration[ 0.8s] animation-iteration-count[infinite] animation-timing-function[linear] animation-fill-mode[both] animation-delay[-0.3s] align-middle`};
      }

      & ~ span:nth-child(2) {
        ${tw`background-color[var(--color-text-dark)] w-2 h-2 mx-0.5 rounded-[100%] inline-block animation-name[spinner-search] animation-duration[ 0.8s] animation-iteration-count[infinite] animation-timing-function[linear] animation-fill-mode[both] animation-delay[-0.15s] align-middle`};
      }

      & ~ span:last-child {
        ${tw`background-color[var(--color-text-dark)] w-2 h-2 mx-0.5 rounded-[100%] inline-block animation-name[spinner-search] animation-duration[ 0.8s] animation-iteration-count[infinite] animation-timing-function[linear] animation-fill-mode[both]  align-middle`};
      }
    }
  }
`;

export const SpinnerMapCSS = {
  Container,
  SpinnerMapButton,
};
