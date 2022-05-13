import tw, { styled } from 'twin.macro';

const Container = tw.div`
flex flex-row flex-wrap -webkit-box-align[baseline] -webkit-box-pack[justify] -webkit-box-direction[normal] -webkit-box-orient[horizontal] justify-between items-baseline mb-6
`;

const PricingContainer = tw.div`
  -webkit-box-align[ flex-start]
  -webkit-box-direction[normal]
  -webkit-box-orient[vertical]
  flex flex-col items-start  text-base 
`;

const PricingContent = styled.div`
  ${tw`-webkit-box-pack[ flex-start] -webkit-box-align[baseline] items-baseline color[rgb(34, 34, 34)] flex font-normal justify-start flex-wrap`};

  & > span:first-child {
    ${tw`color[rgb(113, 113, 113)] line-through font-semibold`};
  }
  & > span:nth-child(2) {
    ${tw`font-semibold`};
  }
  & > span:last-child {
    ${tw`font-normal whitespace-nowrap text-sm`};
  }

  & ~ span {
    ${tw`border-0 p-0 clip[rect(0 0 0 0)] clip-path[inset(100%)] height[1px] width[1px] overflow-clip absolute whitespace-nowrap`};
  }
`;

const PricingEvaluate = styled.div`
  ${tw`mt-2`}
  div {
    ${tw`-webkit-box-align[baseline] items-center flex text-sm`};
    & > span:first-child {
      ${tw`text-xs text-center color[var(--color-primary)]`};
    }
    & > span:nth-child(2) {
      ${tw`color[rgb(34, 34, 34)] pl-1 font-semibold`};
    }
    a {
      ${tw`font-size[inherit] font-family[inherit]  font-weight[inherit]   font-style[inherit] font-variant[inherit] line-height[inherit] color[rgb(34, 34, 34)] text-decoration[none]  outline-none`}

      span {
        ${tw`pl-1 font-semibold text-decoration[underline] color[rgb(34, 34, 34)]`}
      }
    }
  }
`;

export const DetailBookingPriceHeaderCSS = {
  Container,
  PricingContainer,
  PricingContent,
  PricingEvaluate,
};
