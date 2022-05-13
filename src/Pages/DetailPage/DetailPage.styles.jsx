import tw, { styled } from 'twin.macro';

const Container = styled.main`
  ${tw`relative m-auto px-10  pt-24 color[var(--color-text-dark)] font-weight[400 ] font-size[16px ] line-height[20px ] font-family[ Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]`};

  @media (min-width: 375px) {
    ${tw`px-6`};
  }

  @media (min-width: 744px) {
    ${tw`px-10`};
  }

  @media (min-width: 1128px) {
    ${tw`px-20`};
  }
`;

export const DetailPageCSS = {
  Container,
};
