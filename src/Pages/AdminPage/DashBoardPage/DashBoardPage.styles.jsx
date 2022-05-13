import tw from 'twin.macro';

const Container = tw.section`
 relative bg-gray-200  md:pt-14 pb-14 pt-12
`;

const Content = tw.div`
 px-2 md:px-8 mx-auto w-full
`;

const Item = tw.div`
 flex flex-wrap
`;

const CardStatsContent = tw.div`
 w-full md:w-6/12  lg:w-6/12 xl:w-[20%] px-2
`;

export const DashBoardPageCSS = {
  Container,
  Content,
  Item,
  CardStatsContent,
};
