import tw, { css } from 'twin.macro';

export const PopoverCSS = css`
  .wrap-card-popup,
  .wrapper-price-popup,
  .wrapper-userprofile-popup,
  .wrapper-search-popup {
    .ant-popover-arrow {
      ${tw`hidden`};
    }
  }

  .wrap-card-popup {
    ${tw`p-0 bg-white rounded-lg box-shadow[ 0 0 0 1px rgb(0 0 0 / 32%)] color[var(--color-text-dark)] pointer-events-auto font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    ] overflow-hidden`};

    .ant-popover-content {
      ${tw`inline-block w-[250px]`};
    }

    .ant-popover-placement-bottom,
    .ant-popover-placement-bottomLeft,
    .ant-popover-placement-bottomRight {
      ${tw`mt-[15px]`};
    }

    .ant-popover-title,
    .ant-popover-inner-content {
      ${tw`p-0 border-b-0`};
    }
  }

  .wrapper-price-popup {
    ${tw`w-full max-w-[410px] padding[0 1.5rem 0rem 1.5rem]`}

    .ant-popover-title,
    .ant-popover-inner-content {
      ${tw`p-0 border-b-0 overflow-hidden`};
    }
  }

  .wrapper-userprofile-popup {
    ${tw`absolute shadow-md p-0 overflow-hidden mt-8 z-50 bg-white border[1px solid rgba(0,0,0,.15)] rounded-2xl text-left color[var(--color-text-dark)] text-base min-width[10rem] bg-clip-padding w-full max-w-[240px]
   box-shadow[rgba(100, 100, 111, 0.2) 0px 7px 29px 0px] transition-shadow duration-200
    `};

    .ant-popover-inner-content {
      ${tw`p-0 border-b-0`};
    }

    .ant-popover-inner {
      ${tw`box-shadow[none]`}
    }
  }

  .wrapper-search-popup {
    ${tw`absolute shadow-md p-0 overflow-hidden z-50 bg-white border[1px solid rgba(0,0,0,.15)] rounded-2xl text-left color[var(--color-text-dark)] text-base min-width[10rem] bg-clip-padding w-full  mt-12 max-w-[700px] box-shadow[rgba(0, 0, 0, 0.35) 0px 5px 15px]`};

    ${tw`lg:max-w-[480px]`}

    .ant-popover-inner-content {
      ${tw`h-full max-h-80 overflow-y-auto`};
    }
  }
`;
