import tw, { styled } from 'twin.macro';

const Container = tw.div`
  display[--webkit-box] flex items-stretch justify-start flex-col w-full mx-auto -webkit-box-align[stretch] -webkit-box-pack[start]
  xl:flex-wrap xl:flex-row
`;

const ContentLeft = styled.div`
  ${tw`  w-full mx-auto`};
  ${tw`xl:relative xl:width[58.333333333333336%] xl:mx-0`};
`;

const ContentRight = styled.div`
  ${tw` w-full ml-[8.332%] mx-auto`};
  ${tw`xl:relative xl:width[33.333333333333336%] xl:mr-0`};
`;

export const DetailBookingCSS = {
  Container,
  ContentLeft,
  ContentRight,
};
