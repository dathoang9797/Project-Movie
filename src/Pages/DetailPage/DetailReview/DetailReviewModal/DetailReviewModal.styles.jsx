import tw, { styled } from 'twin.macro';
import { DetailReviewRatingCSS } from '@Pages/DetailPage/DetailReview/DetailReviewRating/DetailReviewRating.styles';
import { DetailReviewPointCSS } from '@Pages/DetailPage/DetailReview/DetailReviewPoint/DetailReviewPoint.styles';

const {
  Item: ItemPointCSS,
  ItemProcessContent: ItemPointProcessContent,
  ItemProcess: ItemPointProcess,
} = DetailReviewPointCSS;

const { Item: ItemRatingCSS } = DetailReviewRatingCSS;

const Container = styled.div`
  ${tw`-webkit-box-pack[start] -webkit-box-align[stretch] flex items-stretch justify-start flex-wrap width[calc(100% + 12px)] margin-left[-6px] margin-right[-6px] h-full`};

  @media (min-width: 744px) {
    ${tw`width[calc(100% + 12px)] margin-left[-8px] margin-right[-8px]`};
  }
`;

const ContentLeft = styled.div`
  ${tw`relative w-full h-full mx-0 px-1.5 `}

  ${ItemPointCSS},${ItemPointProcessContent},${ItemPointProcess} {
    width: 100% !important;
  }
  ${ItemPointCSS} {
    ${tw`mr-[5.33333%]`}
  }

  @media (min-width: 375px) {
    ${tw`px-1.5`};
  }

  @media (min-width: 744px) {
    ${tw`px-2`};
  }

  @media (min-width: 950px) {
    ${tw`px-2`};
  }

  @media (min-width: 1128px) {
    ${tw`sticky px-2 width[33.3333%] margin-right[8.33333%]`};
  }
`;

const ContentRight = styled.div`
  ${tw`relative w-full h-full mx-0 px-1.5 overflow-y-auto`};

  @media (min-width: 375px) {
    ${tw`px-1.5`};
  }

  @media (min-width: 744px) {
    ${tw`px-2`};
  }

  @media (min-width: 950px) {
    ${tw`px-2`};
  }

  @media (min-width: 1128px) {
    ${tw`px-2 width[58.3333%]`};
  }

  ${ItemRatingCSS} {
    ${tw`p-0 w-full`};
  }
`;

export const DetailReviewModalCSS = {
  Container,
  ContentLeft,
  ContentRight,
};
