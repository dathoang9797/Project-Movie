import tw, { styled } from 'twin.macro';

const Text = styled.span`
  ${tw`line-height[20px] overflow-clip text-overflow[ellipsis] display[--webkit-box] -webkit-line-clamp[1] -webkit-box-orient[vertical] text-sm relative font-semibold`};
`;

const Button = styled.button`
  ${tw`cursor-pointer inline-block  relative text-center w-auto touch-action[manipulation] text-sm font-semibold rounded-lg outline-none px-0 py-2 border-none bg-transparent color[rgb(34, 34, 34)] underline transition-all duration-300 -webkit-tap-highlight-color[transparent] md:px-2`};
  
  &:hover {
    ${tw`border-none background[rgb(247, 247, 247)] color[rgb(0, 0, 0)]`};
  }
`;

const Container = styled.section`
  ${tw` m-auto  pt-6 `};
`;

const Icon = styled.span`
  ${tw` inline-flex mr-3 transform[translateY(calc((var(30px, 30px) - 24px) / 2)) ;]`};
  button {
    ${tw`bg-transparent border-none color[inherit] cursor-pointer block m-0 p-0 text-align[inherit] text-decoration[none] h-full w-full touch-action[manipulation]`};
    svg {
      ${tw`block h-6 w-6 fill[currentColor]`};
    }
  }
`;

const Heading = styled.span`
  ${tw`font-semibold text-xl lg:font-size[26px] `};
  h1 {
    ${tw`color[inherit] font-size[1em] font-weight[inherit] line-height[inherit] m-0 p-0 inline`};
  }
`;

const Desc = styled.div`
  ${tw`-webkit-box-pack[justify] -webkit-box-align[end] items-start flex flex-col justify-start 
   md:flex-row md:justify-between md:items-center
  `};
`;

const DescLeft = styled.div`
  ${tw`flex flex-wrap items-center  mt-0`};
`;

const DescLeftFirst = styled.span`
  ${tw`-webkit-box-align[center ] min-width[0px ] margin-top[8px ] align-items[center ]display[inline-flex] color[rgb(34, 34, 34)]`};
  & > span:first-child {
    ${tw`-webkit-box-align[center] color[var(--color-primary)] 
      items-center inline-flex  mr-1 min-width[14px]`}
  }
  & > span:last-child {
    ${tw`text-sm pl-1 font-semibold underline`}
  }
`;

const DescLeftSecond = styled.span`
  ${tw`color[rgb(113, 113, 113)] font-weight[400] margin[8px 8px 0px]`}
`;

const DescLeftThird = styled.span`
  ${tw`-webkit-box-align[center ] min-width[0px ] margin-top[8px ] align-items[center ]display[inline-flex] color[rgb(113, 113, 113)]`};
`;

const DescRight = styled.div`
  ${tw`block h-7`};
`;

const DescRightContent = styled.div`
  ${tw`flex justify-end -webkit-box-pack[end]`}
  div:first-child {
    ${tw`mr-2 md:mr-5`}
  }
`;

const DescRightContentItem = styled.div`
  ${tw`color[rgb(34, 34, 34)] -webkit-box-align[center] flex items-center`}
  span {
    ${tw`mr-2 `}
    svg {
      ${tw` h-4 w-4 `};
    }
  }
`;

export const DetailTitleCSS = {
  Text,
  Button,
  Container,
  Icon,
  Heading,
  Desc,
  DescLeft,
  DescLeftFirst,
  DescLeftSecond,
  DescLeftThird,
  DescRight,
  DescRightContent,
  DescRightContentItem,
};
