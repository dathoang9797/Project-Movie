import tw, { styled } from 'twin.macro';
import { Popover as PopoverAnt } from 'antd';
import { Rate as RateAnt } from 'antd';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  ${tw`absolute bottom-0 z-0 pointer-events-auto translate[calc(-50% + 0px), calc(50% + 0px)] transition-transform duration-300 ease-in-out left-1/2 font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif] font-semibold `}
`;

const Content = styled.div`
  --content-mini-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.32), 0px 2px 4px rgba(0, 0, 0, 0.18);
  ${tw`flex items-center cursor-pointer  relative h-7 scale-100 origin-[50% 50%] transition-transform duration-150 ease-in-out`}

  div {
    ${tw`bg-white rounded-[28px] text-[rgb(34, 34, 34)] h-[30px] relative scale-100 origin-[50% 50%]
    transition-all  duration-300  ease-in-out shadow-[rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px]
    `}
  }

  &:hover div,
  ${Container}.ant-popover-open & div {
    ${tw`transition-all  duration-300 text-white background-color[var(--color-text-dark)]`};
  }

  div div {
    ${tw`flex items-center justify-center h-full opacity-100 transition-opacity duration-300 whitespace-normal px-2 ease-in-out`};
  }
`;

const Button = styled.button`
  ${tw`border-none m-0 p-0 bg-transparent w-auto overflow-visible font[inherit] color[inherit]`}
`;

const Popover = styled(PopoverAnt)`
  ${tw`font-extrabold text-sm `}
`;

const ContentPopover = styled.div``;

const PopoverLink = styled(NavLink)`
  img {
    ${tw`h-full w-full object-cover`};
  }
`;

const PopoverDesc = styled.div`
  ${tw`py-3 px-2`};
`;

const PopoverTitle = styled.span`
  ${tw`mb-1 text-sm items-center flex w-full overflow-hidden text-overflow[ellipsis] -webkit-box-orient[vertical] -webkit-line-clamp[1] color[#717171]`};
`;

const PopoverParagraph = styled.p`
  ${tw`mb-0.5 overflow-clip text-base text-overflow[ellipsis] -webkit-box-orient[vertical] -webkit-line-clamp[1] color[var(--color-text-dark)] font-normal `};
`;

const PopoverPrice = styled.div`
  ${tw`mt-1.5 flex items-start justify-start text-base color[var(--color-text-dark)] font-normal`}
  & > span:first-child {
    ${tw`font-extrabold`};
  }
  & > span:last-child {
    ${tw`whitespace-nowrap font-normal text-sm`};
  }
`;

const PopoverRating = styled.span`
  ${tw`flex items-center text-sm`};
`;

const Rate = styled(RateAnt)`
  ${tw`color[var(--color-primary)] text-sm mr-1`};
`;

export const RoomCardCSS = {
  Container,
  Content,
  Button,
  Popover,
  ContentPopover,
  PopoverLink,
  PopoverDesc,
  PopoverTitle,
  PopoverParagraph,
  PopoverPrice,
  PopoverRating,
  Rate,
};
