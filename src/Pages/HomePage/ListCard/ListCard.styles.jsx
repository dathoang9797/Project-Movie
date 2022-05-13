import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';

const Container = tw.div`container mx-auto mt-8 mb-8`;

const TitleContainer = tw.div`grid-cols-12 text-center mb-8`;

const TitleHeader = tw.h1`mb-1 text-gray-900 text-2xl md:text-4xl`;

const CardContainer = tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 `;

const CardItem = styled(NavLink)`
  ${tw`  cursor-pointer text-center relative flex flex-col word-wrap[break-word] min-w-0 bg-white border-none rounded-lg border-1  background-clip[border-box]  overflow-hidden transition-transform`};
  &:not(:last-child) {
    ${tw` mb-4 md:mb-0`}
  }
  &:hover {
    ${tw`scale-105 duration-500 color[#484848]`};
  }
  img {
    ${tw`w-full h-full object-fill rounded-lg`}
  }
`;
const CardHeading = styled.h1`
  ${tw`text-lg font-semibold mt-3`};
`;

const CardDesc = styled.p`
  ${tw`text-sm font-normal mt-1`}
`;

const CardPrice = styled.span`
  ${tw`text-sm font-normal mt-1`}
`;

export const ListCardCSS = {
  Container,
  TitleContainer,
  TitleHeader,
  CardContainer,
  CardItem,
  CardHeading,
  CardDesc,
  CardPrice,
};
