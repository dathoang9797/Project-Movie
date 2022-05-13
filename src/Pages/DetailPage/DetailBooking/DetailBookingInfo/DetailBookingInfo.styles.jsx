import tw, { styled } from 'twin.macro';

const Container = tw.div`pt-12 pb-6`;

const Header = tw.div` flex`;

const HeaderDesc = styled.div`
  flex: 0 1 100%;
  div {
    ${tw`color[rgb(34, 34, 34)] font-semibold text-2xl mb-2`};
    h2 {
      ${tw`color[inherit] text-base font-weight[inherit] line-height[inherit] m-0 p-0`};
    }
  }
  ol {
    ${tw`m-0 p-0`};
    li:nth-of-type(1n) {
      ${tw`inline-block`};
    }
    li:last-child{
      ${tw`mb-4`};
    }
  }
`;

const HeaderImage = styled.div`
  ${tw`ml-4 mb-4`};
  ${tw`md:mb-0`};
  div {
    ${tw`font-size[28px] h-14 w-14 block relative`};
  }
`;

const HeaderButton = styled.button`
  ${tw`font-size[inherit] font-family[inherit] font-weight[inherit] font-style[inherit]font-variant[inherit] line-height[inherit] color[inherit] underline appearance-none bg-transparent border-0 cursor-pointer m-0 p-0 select-none block h-full relative w-full -webkit-tap-highlight-color[transparent] outline-none border-radius[50%]`};
  &:after {
    ${tw`absolute content inset-0 h-full w-full left-0 top-0 block pointer-events-none border-radius[50%] border[0px solid rgb(0, 0, 0)]`};
  }
`;

const HeaderImageContent = styled.div`
  ${tw`h-14 w-14 block relative border-radius[50%] background[rgb(221, 221, 221)] overflow-hidden`}
  div {
    ${tw`inline-block align-bottom h-full w-full min-height[1px] background-position[50% 50%] bg-no-repeat`};
    img {
      ${tw`object-cover h-full w-full static`};
    }

    & > div {
      ${tw`bg-cover inline-block bg-none align-bottom h-full w-full background-position[50% 50%] bg-repeat`};
    }
  }
`;

const DetailContent = tw.div`
  border-t-1 border-solid border-color[rgb(221, 221, 221)] py-8
`;

const DetailItem = tw.div`
 flex mb-6
`;

const DetailIcon = tw.div`
  flex-shrink-0 min-width[24px]
`;

const DetailDesc = styled.div`
  ${tw`ml-4`}
  h1 {
    ${tw`color[rgb(34, 34, 34)] font-semibold text-base mb-1`};
  }
  span {
    ${tw`color[rgb(113, 113, 113)] font-normal text-sm`}
  }
`;

const DetailCancelDay = tw.div`
  mb-6 flex animation-name[show-opacity] animation-timing-function[ease] animation-duration[0.5s]
`;

const DetailParagraph = tw.div`
  border-top[1px solid rgb(221, 221, 221)] pt-8 pb-12
`;

const DetailParagraphItem = tw.div`
  overflow-hidden leading-6  text-overflow[ellipsis] display[-webkit-box] -webkit-line-clamp[6] -webkit-box-orient[vertical]
`;

const DetailParagraphItemShowMore = styled.div`
  ${tw`mt-4`};
  button {
    ${tw`rounded cursor-pointer m-0 py-0 text-center  border-solid border-color[#000] background-color[d3d3d3] border-0 transition-all duration-300 underline`};
    &:hover {
      ${tw`text-black`};
    }
    span {
      ${tw`inline-flex align-bottom flex-row items-center font-semibold`};
      & > :last-child {
        ${tw`ml-1`};
        svg {
          ${tw`h-3 w-3 block fill[var(--color-text-dark)]`};
        }
      }
    }
  }
`;

export const DetailBookingInfoCSS = {
  Container,
  Header,
  HeaderDesc,
  HeaderImage,
  HeaderButton,
  HeaderImageContent,
  DetailContent,
  DetailItem,
  DetailDesc,
  DetailIcon,
  DetailCancelDay,
  DetailParagraph,
  DetailParagraphItem,
  DetailParagraphItemShowMore,
};
