import tw, { styled } from 'twin.macro';

const Container = tw.div`mb-6 block `;

const Content = tw.div`
flex items-stretch justify-start flex-wrap w-[calc(100% + 16px)]
`;

const Item = styled.div`
  ${tw`relative w-full mx-0 px-[6px]`};

  @media (min-width: 1128px) {
    ${tw`px-2`};
  }

  @media (min-width: 950px) {
    ${tw`px-2`};
  }

  @media (min-width: 744px) {
    ${tw`px-2 width[41.6667%] margin-right[8.33333%]`};
  }

  @media (min-width: 375px) {
    ${tw`px-1.5`};
  }
`;

const ItemContent = styled.div`
  ${tw`mb-4 -webkit-box-pack[justify] -webkit-box-align[center] flex items-center justify-between w-full`};
  h1 {
    ${tw`w-full  overflow-hidden text-overflow[ellipsis] whitespace-normal`};
  }
`;

const ItemProcessContent = styled.div`
  ${tw` -webkit-box-align[center]-webkit-box-direction[normal] -webkit-box-orient[horizontal] flex flex-row items-center ml-3 width[75%]`}
  @media (min-width: 1128px) {
    ${tw`width[50%]`}
  }
`;

const ItemProcess = styled.div`
  ${tw`relative h-1 w-full mr-1 background-color[rgb(221, 221, 221)] rounded-sm`}
  & > span {
    ${tw`absolute left-0 top-0 bottom-0 w-full h-full background-color[var(--color-text-dark)] rounded-sm width[90%]`};
  }

  @media (min-width: 1128px) {
    ${tw`width[50% !important]`}
  }
`;

const ItemProcessScore = styled.span`
  ${tw`color[rgb(34, 34, 34)] font-semibold text-xs ml-1.5`}
`;

export const DetailReviewPointCSS = {
  Container,
  Content,
  Item,
  ItemContent,
  ItemProcessContent,
  ItemProcess,
  ItemProcessScore,
};
