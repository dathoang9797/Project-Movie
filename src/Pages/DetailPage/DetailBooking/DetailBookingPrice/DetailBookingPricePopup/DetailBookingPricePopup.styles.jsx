import tw, { styled } from 'twin.macro';
import { Popover } from 'antd';

const Container = styled(Popover)`
  ${tw`w-full flex-1 inset[0px 0px -1px !important]   relative bg-none  z-50 overflow-hidden margin-bottom[24px !important]`};
  &:after {
    ${tw`content absolute top-0 left-0 w-full h-full border[1px solid #b0b0b0] border-radius[0px 0px 8px 8px !important] cursor-pointer`};

    ${(props) => (props.visible ? tw`  border[2px solid var(--color-text-dark)!important]   ` : '')};
  }

  &.ant-collapse > .ant-collapse-item {
    border-bottom: 0px;
  }

  .ant-collapse-content {
    padding: 5px 12px;
  }
  &.ant-collapse > .ant-collapse-item > .ant-collapse-header,
  &.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header,
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }

  &.ant-collapse-icon-position-right
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow {
    font-size: 16px;
  }
`;

const Item = tw.div`
 relative flex w-full  m-0 border-none border-transparent color[rgb(34, 34, 34)] bg-transparent rounded-none box-shadow[none] text-base font-normal outline-none
`;

const ItemLabel = styled.label`
  ${tw`relative flex-1 p-0 w-full overflow-hidden mb-0`}

  & > span {
    ${tw`absolute top-3 left-3 right-3 m-0 p-0 font-size[10px] line-height[12px] color[rgb(34, 34, 34)] uppercase font-extrabold max-w-full overflow-hidden text-overflow[ellipsis] whitespace-nowrap block`};
  }
`;

const ItemGuest = styled.div`
  ${tw`min-height[56px] w-full border-none outline-none m-0 padding[26px 36px 10px 12px] bg-transparent color[inherit] font-family[inherit] font-size[inherit] line-height[inherit] font-weight[inherit] appearance-none overflow-hidden text-overflow[ellipsis] whitespace-nowrap  cursor-pointer`}
  & > span {
    ${tw`text-sm block`};
  }
`;

const ItemArrow = styled.div`
  ${tw`-webkit-box-pack[center] -webkit-box-align[center] absolute right-0 flex items-center justify-center h-full max-w-max-w-1/2 min-width[36px] pr-3 color[rgb(34, 34, 34)]`}
  svg {
    ${tw`block fill[none] h-4 w-4 stroke-current stroke-width[4] overflow-visible`}
  }
`;

const Popup = styled.div`
  ${tw`box-shadow[rgb(0 0 0 / 15%) 0px 2px 6px, rgb(0 0 0 / 7%) 0px 0px 0px 1px] box-border w-full overflow-hidden px-6 py-2 rounded-lg`};
`;

const PopupCountUser = tw.div`
mb-4 mt-2 -webkit-box-align[center] flex items-center w-full color[rgb(34, 34, 34)] font-normal
 
`;

const PopupCountUserDesc = styled.div`
  ${tw`flex-1`};
  h1 {
    ${tw`text-base pb-1 font-normal`};
  }
  p {
    ${tw`text-xs`};
  }
`;

const PopupCountUserChangeValue = styled.div`
  ${tw`flex -webkit-box-pack[justify]  -webkit-box-align[center] items-center justify-between 
  width[104px] height[32px] color[rgb(34, 34, 34)] font-normal text-sm
  `};
  button {
    ${tw`-webkit-box-pack[center] -webkit-box-align[center] -webkit-box-flex[0] w-8 h-8 flex-grow-0 flex-shrink-0 cursor-pointer inline-flex m-0 p-0 text-center text-decoration[none] border-1 border-solid border-color[rgb(176, 176, 176)] color[rgb(113, 113, 113)] font-family[inherit] outline-none touch-action[manipulation] items-center justify-center bg-white border-radius[50%]`};
    &:disabled {
      ${tw`cursor-not-allowed color[rgb(235, 235, 235)] border-color[rgb(235, 235, 235)] bg-white`};
    }
    &:hover {
      ${tw`color[rgb(34, 34, 34)] border-color[rgb(34, 34, 34)] bg-white`}
    }

    span {
      ${tw`h-6 w-6 p-1.5 color[rgb(34, 34, 34)] flex items-center`};

      svg {
        ${tw` color[rgb(34, 34, 34)]`};
      }
    }
  }
`;

const PopupClose = styled.div`
  ${tw`-webkit-box-pack[end] flex justify-end`};

  button {
    ${tw`cursor-pointer inline-block margin[0px -10px] relative text-center w-auto touch-action[manipulation] text-sm font-semibold rounded-lg outline-none p-[10px] transition-shadow duration-300 -webkit-tap-highlight-color[transparent] border-none bg-transparent color[rgb(34, 34, 34)] underline contain[paint]`}
    &:hover {
      ${tw`border-none background[rgb(247, 247, 247)] text-black`};
    }
  }
  div {
    ${tw`relative color[inherit] font-family[inherit] font-size[inherit] line-height[inherit]`};
  }
`;

export const DetailBookingPricePopupCSS = {
  Container,
  Item,
  ItemGuest,
  ItemLabel,
  ItemArrow,
  Popup,
  PopupCountUser,
  PopupCountUserDesc,
  PopupCountUserChangeValue,
  PopupClose,
};
