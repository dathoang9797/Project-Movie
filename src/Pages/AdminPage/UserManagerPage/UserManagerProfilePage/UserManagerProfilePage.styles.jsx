import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`container mx-auto my-5 p-5`}
`;

const Content = styled.div`
  ${tw`w-full  mx-2`}
`;

const Desc = styled.div`
  ${tw`bg-white p-3 border-t-4 border-green-400`}
  border-color: var(--color-primary);
`;

const Img = styled.div`
  ${tw`overflow-hidden`}
  img {
    ${tw`  m-auto rounded-full w-52 h-52`}
  }
`;

const About = styled.div`
  ${tw` border-t-1 bg-white p-3 shadow-sm rounded-sm`}
`;

const Grid = styled.div`
  ${tw`text-gray-700 grid md:grid-cols-2 text-sm`}
`;

const GridContent = styled.div`
  ${tw`flex  items-center`}
`;

const GridKey = styled.div`
  ${tw`px-4 py-2 font-semibold`}
`;

const GridItem = styled.div`
  ${tw`px-4 py-2 break-words`}
`;

export const UserManagerProfileCSS = {
  Container,
  Content,
  Desc,
  Img,
  About,
  Grid,
  GridContent,
  GridKey,
  GridItem,
};
