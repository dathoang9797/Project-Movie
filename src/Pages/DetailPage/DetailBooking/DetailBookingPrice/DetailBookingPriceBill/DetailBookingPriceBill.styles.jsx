import tw, { styled } from 'twin.macro';
import { ButtonCSS } from '@Components/Button';
import { SpinnerMapCSS } from '@Components/SpinnerMap/SpinnerMap.styles';

const { Primary } = ButtonCSS;
const { Container: ContainerSpinnerMap } = SpinnerMapCSS;

const Container = styled.div`
  ${tw` flex-shrink-0 font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]`};
  ${ContainerSpinnerMap} {
    ${tw`relative`}
  }
  ul {
    ${tw`-webkit-box-direction[normal] -webkit-box-orient[vertical] -webkit-box-align[center] 
    color[rgb(34, 34, 34)] font-normal text-sm items-center flex flex-col list-none
    margin[8px 0px 0px] p-0 text-center
    `};
    li {
      ${tw`mt-2 whitespace-normal`};
    }
  }
`;

const Button = styled(Primary)`
  ${tw`cursor-pointer text-center text-decoration[none] touch-action[manipulation] text-base font-semibold rounded-lg outline-none w-full h-full padding[14px 24px] m-auto`};
`;

const Bill = styled.div`
  ${tw`mt-6`};
`;

const BillItemFirst = styled.div`
  ${tw`pt-0 text-sm color[rgb(113, 113, 113)] font-normal py-2`};

  div {
    ${tw`-webkit-box-pack[justify] text-base color[rgb(34, 34, 34)] font-normal pb-3 flex flex-nowrap justify-between`};
    &:last-child {
      ${tw`mb-0`};
    }
    span:first-child {
      ${tw`order-1`};
      div {
        ${tw`inline-flex relative`}
        button {
          ${tw`font-size[inherit] font-family[inherit] font-style[inherit] font-variant[inherit] line-height[inherit] appearance-none bg-transparent border-none cursor-pointer m-0 p-0 user-select[auto] color[rgb(113, 113, 113)] text-decoration[underline 1px] border-radius[4px] font-normal outline-none`};
          p {
            ${tw`color[rgb(34, 34, 34)] text-left`};
          }
        }
      }
    }

    span:last-child {
      ${tw`order-2 whitespace-normal`}
    }
  }
`;

const BillItemSecond = tw.div`
 text-sm  color['rgb(113, 113, 113)'] font-normal pb-2 border-top[1px solid rgb(221, 221, 221)] mt-2 pt-4
`;

const BillTax = styled.div`
  ${tw`-webkit-box-pack[justify] text-base color[rgb(34, 34, 34)] font-semibold pb-3 flex flex-nowrap justify-between`};
  p:first-child {
    ${tw`order-1`};
  }
  p:last-child {
    ${tw`order-2 whitespace-normal`};
  }
`;

export const DetailBookingPriceBillCSS = {
  Container,
  Button,
  Bill,
  BillItemFirst,
  BillItemSecond,
  BillTax,
};
