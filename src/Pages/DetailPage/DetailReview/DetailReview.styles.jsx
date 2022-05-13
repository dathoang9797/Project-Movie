import tw, { styled } from 'twin.macro';

const Container = tw.div`
  h-full w-full m-auto
`;

const Content = tw.div`
py-12 border-top-color[rgb(221, 221, 221)] border-t-1 border-solid
`;

const ButtonOpen = styled.button`
  ${tw` mt-10 text-center rounded-lg border-1 border-solid py-[14px] px-6 transition-shadow duration-300 border-color[var(--color-text-dark)] color[var(--color-text-dark)] bg-white font-semibold`};
  &:hover {
    ${tw`underline cursor-pointer border-black bg-white`};
  }
`;

export const DetailReviewCSS = {
  Container,
  Content,
  ButtonOpen,
};
