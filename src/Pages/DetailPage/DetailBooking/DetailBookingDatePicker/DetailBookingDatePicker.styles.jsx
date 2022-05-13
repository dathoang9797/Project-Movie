import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`relative mb-4  bg-white font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif] pt-12 border-top[1px solid rgb(221,221,221)]`};
  .rdrDayToday .rdrDayNumber span:after {
    background: var(--color-primary);
  }
  .rdrCalendarWrapper {
    ${tw`w-full`};
    .rdrMonths.rdrMonthsHorizontal {
      ${tw`justify-evenly`};
    }
  }
`;

const Title = styled.div`
  ${tw`-webkit-box-align[start] -webkit-box-pack[justify] flex justify-between items-start pb-4`}
`;

const Heading = styled.div`
  ${tw`order-1  color[var(--color-text-dark)] font-semibold text-2xl`};
  h1 {
    ${tw`m-0 p-0 mb-3`};
  }
  div {
    ${tw`color[#717171] font-normal text-sm`};
    p {
      ${tw` line-height[18px] overflow-hidden display[-webkit-box] -webkit-line-clamp[2]-webkit-box-orient[vertical] h-9`};
    }
  }
`;

export const DetailBookingDatePickerCSS = {
  Container,
  Title,
  Heading,
};
