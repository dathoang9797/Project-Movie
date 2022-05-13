import tw, { styled } from 'twin.macro';

const Container = tw.section`m-4 md:m-8 w-full`;

const FeatureHeader = styled.div`
  ${tw`container mx-auto p-4 mb-2 space-y-2 text-center `};
  h1 {
    ${tw`text-2xl md:text-4xl font-bold`};
  }
`;

const GridContainer = styled.div`
  ${tw` container  mx-auto grid justify-center px-0  gap-3 sm:grid-cols-1  md:grid-cols-3  xl:px-4 lg:grid-cols-4`}

  @media (max-width: 400px) {
    ${tw`max-w-[100%!important] block `};
  }
`;

const GirdItem = styled.div`
  ${tw`flex flex-col items-start p-4 h-64 rounded-lg bg-no-repeat bg-cover bg-center  relative`};
  background-image: ${(props) => `url(${props.image})`};
  transition: transform 0.5s cubic-bezier(0.05, 0.2, 0.1, 1),
    box-shadow 0.5s cubic-bezier(0.05, 0.2, 0.1, 1);

  &:hover {
    ${tw`box-shadow[0px 2px 70px 0px rgb(253 71 102 / 5%)] transform[translateY(-5px)]`};
  }

  @media (max-width: 400px) {
    ${tw`mb-3 `};
  }
`;

const GirdTitle = tw.h1`my-2  text-2xl font-semibold color[var(--color-text-dark)]`;

const GirdItemTitle = tw(GirdTitle)`text-white`;

const GridItemDesc = tw.p`text-sm text-white`;

export const FeatureCSS = {
  Container,
  FeatureHeader,
  GridContainer,
  GirdItem,
  GirdTitle,
  GirdItemTitle,
  GridItemDesc,
};
