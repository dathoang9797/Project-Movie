import tw, { styled } from 'twin.macro';

const Container = styled.section`
  ${tw`relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg`};
`;

const Content = styled.div`
  ${tw`flex-auto p-4`};
`;

const Item = styled.div`
  ${tw`flex flex-wrap`};
`;

const ItemTitle = styled.div`
  ${tw`relative w-full pr-4 max-w-full flex-grow flex-1`};
  h1 {
    ${tw`text-gray-400 uppercase font-bold text-xs`};
  }

  span {
    ${tw`font-semibold text-xl text-gray-700`}
  }
`;

const ItemIcon = styled.div`
  ${tw`relative w-auto pl-4 flex-initial`};
  div {
    ${({ statIconColor }) => {
      switch (statIconColor) {
        case 'bg-red-500':
          return tw`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500
          `;
        case 'bg-orange-500':
          return tw`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500`;

        case 'bg-pink-500':
          return tw`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500
          `;
        case 'bg-blue-500':
          return tw`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500
          `;

        default:
          return tw`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-500`;
      }
    }};
  }
`;

const Paragraph = styled.p`
  ${tw`text-sm text-gray-400 mt-4`}
  svg {
    ${tw`inline-block`}
  }
`;

export const CartStatsCSS = {
  Container,
  Content,
  Item,
  ItemTitle,
  ItemIcon,
  Paragraph,
};
