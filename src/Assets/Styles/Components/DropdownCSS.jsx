import tw, { css } from 'twin.macro';

export const DropDownCSS = css`
  .dropdown-province {
    ${tw`h-[300px] max-w-[700px] w-full overflow-y-auto rounded-xl box-shadow[rgba(0, 0, 0, 0.35) 0px 5px 15px]`}
    ${tw`lg:w-[300px]`};

    .ant-dropdown-menu li.ant-dropdown-menu-item {
      ${tw`transition-colors duration-150`};
    }

    .ant-dropdown-menu-item:hover {
      ${tw`background-color[ var(--color-primary)] color[#fff!important]`};
    }
  }

  .select-location,
  .select-province {
    &::-webkit-scrollbar {
      ${tw`hidden`};
    }
  }
`;
