import tw, { styled } from 'twin.macro';

const Container = tw.div`
  relative  rounded-lg bg-white  font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif] 
`;

const Content = tw.div`
  flex relative w-full

`;

const Item = styled.div`
  ${tw`w-full flex[1 1 0%] inset[0px 0px -1px] z-20`};
  &:after {
    ${tw`content absolute top-0 left-0 w-full h-full border[1px solid #b0b0b0] border-radius[8px 8px 0px 0px !important] border-b-0 z-index[-1]`};
    ${(props) => (props.isOpen ? tw`border[2px solid var(--color-text-dark)!important]  ` : '')};
  }
`;

const Button = tw.button`
  relative flex w-full m-0 border-none border-transparent bg-transparent text-black rounded-none shadow-none cursor-pointer p-0 text-left`;

const CheckIn = styled.div`
  ${tw`relative p-0  flex[1 1 0%] overflow-hidden`};

  h1 {
    ${tw`absolute top-3 left-3 right-3 p-0 m-0 pointer-events-none font-size[10px] line-height[12px]
    color[rgb(34, 34, 34)] uppercase font-extrabold max-w-full overflow-hidden text-overflow[ellipsis] whitespace-nowrap
    `};
  }
  span {
    ${tw`min-height[56px] w-full  border-none outline-none m-0 padding[26px 12px 10px] bg-transparent color[inherit] font-family[inherit] text-sm font-weight[inherit] appearance-none overflow-hidden text-overflow[ellipsis] whitespace-nowrap block`}
  }
`;

const CheckOut = styled(CheckIn)`
  border-left: 1px solid rgb(176, 176, 176);
`;

const Title = styled.div`
  ${tw`-webkit-box-align[start] -webkit-box-pack[justify] flex justify-between items-start pb-4`}
`;

const Heading = styled.div`
  ${tw`order-1 pb-6 color[var(--color-text-dark)] font-semibold text-2xl`};
  h1 {
    ${tw`m-0 p-0`};
  }
  div {
    ${tw`color[#717171] font-normal text-sm`};
    p {
      ${tw` line-height[18px] overflow-hidden display[-webkit-box] -webkit-line-clamp[2]-webkit-box-orient[vertical] h-9`};
    }
  }
`;

export const DetailBookingPriceDateModalCSS = {
  Container,
  Content,
  Item,
  Button,
  CheckIn,
  CheckOut,
  Title,
  Heading,
};
