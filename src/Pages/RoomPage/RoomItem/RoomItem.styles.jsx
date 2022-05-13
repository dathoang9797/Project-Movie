import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';



const Container = styled(NavLink)`
  ${tw`font-family[Circular] border-t-1 border-color[#ebebeb] py-6 flex flex-col  transition-all duration-300`}
  ${tw`md:flex-row md:flex`};
  .greyText {
    ${tw`text-sm color[var(--color-text-light)]`}
  }

  &:hover {
    ${tw`color[var(--color-primary)]`}
  }
`;

const Rating = styled.div`
  ${tw`flex mt-auto items-center justify-center`}
  svg {
    ${tw`w-3.5 mr-1`}
  }
`;

const PriceNight = styled.div`
  ${tw`font-size[18px] font-bold `}
`;

const Price = styled.div`
  ${tw`text-right flex flex-col`}
`;

const Title = styled.div`
  ${tw`flex justify-between text-justify font-semibold mb-2.5`}
  button {
    ${tw`w-8 h-8 bg-none outline-none relative flex items-center justify-center border-none p-0 cursor-pointer`}

    &:after {
      ${tw`opacity-0 background-color[var(--color-medium)] absolute w-12 h-12 border-radius[50%] content z-index[-1] transition-all duration-300`}
    }
    &:hover:after {
      ${tw`opacity-100`}
    }
  }
  h2 {
    ${tw`mt-2`};
  }
`;

const Desc = styled.div`
  span {
    ${tw`block mb-1.5`}
  }
`;

const Detail = styled.div`
  ${tw`flex justify-between mt-auto`}
`;

const Content = styled.div`
  ${tw`w-full pl-4 flex flex-col  mt-3`}
  ${tw`md:w-[calc(100% - 300px)] md:mt-0`}
`;

const Image = styled.div`
  ${tw`w-full height[300px] border-radius[10px] overflow-hidden relative`};
  ${tw`md:width[300px] md:h-auto`}

  ${Container}:hover & button {
    ${tw`opacity-70`};
  }

  &::before {
    ${tw`absolute content['SUPERHOST'] bg-white box-shadow[0px 2px 4px rgba(0, 0, 0, 0.18)] rounded py-1 px-2 top-2.5 left-2.5 letter-spacing[0.48px] text-xs  uppercase`};
  }
  button {
    ${tw`absolute top-1/2 w-8 h-8 bg-white border-radius[50%] overflow-hidden p-0 flex justify-center items-center border-none transition-all duration-300 cursor-pointer opacity-0 -translate-y-1/2`};
  }

  button:hover {
    ${tw`opacity-100`};
  }

  button svg {
    ${tw`w-2.5 h-2.5`}
  }

  button:first-of-type {
    ${tw`left-2.5`}
  }

  button:last-of-type {
    ${tw`right-2.5`}
  }

  img {
    ${tw`object-cover w-full h-full`}
  }
`;

export const RoomItemCSS = {
  Image,
  Container,
  Content,
  Title,
  Desc,
  Detail,
  Price,
  PriceNight,
  Rating,
};
