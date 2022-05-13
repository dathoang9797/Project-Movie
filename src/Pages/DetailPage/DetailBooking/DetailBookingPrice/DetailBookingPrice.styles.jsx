import tw, { styled } from 'twin.macro';

const Container = tw.div`
font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif] sticky top-20 z-10 w-full inline-block pr-[1px] pb-12  
xl:max-w-[500px] 

`;

const Booking = tw.div`
mt-12 border[1px solid rgb(221, 221, 221)] rounded-xl p-6 box-shadow[rgb(0 0 0 / 12%) 0px 6px 16px]
`;

const BookingContent = styled.div`
  ${tw`color[rgb(34, 34, 34)] font-normal text-base flex flex-col -webkit-box-direction[normal] -webkit-box-orient[vertical]`}
`;

export const DetailBookingPriceCSS = {
  Container,
  Booking,
  BookingContent,
};
