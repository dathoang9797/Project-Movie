import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`text-gray-600  mx-auto font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]`};
`;

const Content = styled.div`
  ${tw`flex flex-wrap -m-2`};
`;

const Item = styled.div`
  ${tw`p-2 lg:w-1/2 w-full `};
`;

const ImageUser = styled.div`
  ${tw`flex items-center  p-4 `};
  img {
    ${tw`w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 `};
  }
  div {
    ${tw`flex-grow `};
    h1 {
      ${tw`text-base font-semibold p-0 m-0 color[var(--color-text-dark)]`}
    }
    p {
      ${tw`text-sm text-gray-400 font-medium`};
    }
  }
`;

const Paragraph = styled.p`
  ${tw`text-base font-normal color[var(--color-text-dark)] px-4`};
`;

export const DetailReviewRatingCSS = {
  Container,
  Content,
  Item,
  ImageUser,
  Paragraph,
};
