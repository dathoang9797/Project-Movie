import tw, { styled } from 'twin.macro';

const Container = tw.div`
py-12 border-top[1px solid rgb(221, 221, 221)]
`;

const Heading = styled.div`
  ${tw`pb-6 color[var(--color-text-dark)] text-2xl font-semibold`};
  h2 {
    ${tw`m-0 p-0`};
  }
`;

const IconContent = styled.div`
  ${tw`-webkit-box-pack[start] -webkit-box-align[stretch] flex items-stretch justify-start flex-wrap width[calc(100% + 12px)] margin-left[-6px] margin-right[-6px] h-full`};

  @media (min-width: 744px) {
    ${tw`width[calc(100% + 16px)] margin-left[-8px] margin-right[-8px]`};
  }
`;

const IconContentItem = styled.div`
  ${tw`relative w-full mx-0 px-1.5`}

 

  @media (min-width: 744px) {
    ${tw`px-2 width[30% !important]`}
  }

  @media (min-width: 1128px) {
    ${tw`width[30% !important] margin-left[8px !important] margin-right[8px !important]`};
  }
`;

const IconContentItemDesc = styled.div`
  ${tw`flex justify-end flex-row-reverse pb-4 -webkit-box-pack[end]`};

  div {
    ${tw`mr-4 ml-0 min-width[24px]`};

    svg {
      ${tw`block h-5 w-5 fill-current`};
    }
  }
  @media (min-width: 744px) {
    ${tw`-webkit-box-pack[end] justify-end flex-row-reverse   max-width[83.33333333333334%]`};
  }
`;

export const DetailBookingUtilityCSS = {
  Container,
  Heading,
  IconContent,
  IconContentItem,
  IconContentItemDesc,
};
