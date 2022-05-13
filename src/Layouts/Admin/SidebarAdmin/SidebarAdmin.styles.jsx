import { Layout, Menu } from 'antd';
import tw, { styled } from 'twin.macro';

const { Sider } = Layout;

const Menus = styled(Menu)`
  ${tw`mt-6 bg-white overflow-hidden`}

  &.ant-menu-inline,&.ant-menu-vertical {
    ${tw`border-r-0`}
  }

  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    ${tw`bg-white `};

    svg {
      color: var(--color-primary);
    }
    span a {
      color: var(--color-primary);
    }
  }

  & .ant-menu-item {
    ${tw`transition-all duration-300 text-sm line-height[40px]`};
    ${tw`sm:px-0`};
    ${tw`md:text-xs md:px-2`};
    ${tw`lg:px-4`};
    ${tw`xl:px-6`};

    span,
    svg {
      ${tw`vertical-align[baseline] color[var(--color-text-dark)] `}
      ${tw`lg:text-base `};
    }
    span a {
      ${tw`vertical-align[baseline] text-sm `}
    }

    &:hover {
      span svg,
      svg {
        ${tw`transition-all duration-300 color[var(--color-text-dark)]`};
        color: var(--color-primary);
      }
      span a {
        ${tw`transition-all duration-300 color[var(--color-text-dark)]`};
        color: var(--color-primary);
      }
    }

    &:active,
    .ant-menu-submenu-title:active {
      ${tw`bg-gray-200`}
    }

    &::after {
      ${tw`inset-y-0  w-1 rounded-tr-lg rounded-br-lg left-0 border-l-[3px] border-solid border-r-0`}
      border-color: var(--color-primary);
    }

    &.ant-menu-item-selected::after {
      transform: scaleY(1);
      opacity: 1;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
`;

const SiderBar = styled(Sider)`
  ${tw`z-[999]   bg-white  block flex-shrink-0 flex-none border-t-1 border-r-1   position[fixed !important] w-full h-full lg:h-auto lg:position[static !important]`};

  &.ant-layout-sider-collapsed {
    color: var(--color-primary);

    div.ant-layout-sider-trigger {
      ${tw`bg-white border-t-1 border-r-1 `};
    }
    width: calc(100%-230px);
  }

  div.ant-layout-sider-children {
    ${tw`py-4   `}
    div {
      ${tw`  pl-[12px] mr-[2px] overflow-hidden`};
    }

    div svg {
      ${tw`m-auto`};
    }
  }
  div.ant-layout-sider-trigger {
    ${tw`bg-white border-t-1 border-r-1  color[var(--color-primary)]`}
  }

  span.ant-layout-sider-zero-width-trigger {
    ${tw`top-[10px] right[-50px] bg-transparent`};
    &:after {
      ${tw`bg-transparent w-screen h-screen m-[15px] `}
    }
  }
`;

const BuggerSiderBar = styled.button`
  ${tw`bg-transparent border-none  cursor-pointer flex p-0 w-full h-full rounded-lg `};
  &:hover {
  }
  svg {
    ${tw` w-full h-full`};
  }
  .line {
    ${tw`fill[none] stroke[var(--color-primary)] stroke-width[6] transition[stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)]`}
  }
  .line1 {
    ${tw`stroke-dasharray[60 207] stroke-width[6]`};
  }
  .line2 {
    ${tw`stroke-dasharray[60 60] stroke-width[6]`};
  }
  .line3 {
    ${tw`stroke-dasharray[60 207] stroke-width[6]`};
  }
  &.opened .line1 {
    ${tw`stroke-dasharray[ 90 207] stroke-dashoffset[-134] stroke-width[6]`};
  }
  &.opened .line2 {
    ${tw`stroke-dasharray[ 1 60] stroke-dashoffset[-30] stroke-width[6]`};
  }
  &.opened .line3 {
    ${tw`stroke-dasharray[ 90 207] stroke-dashoffset[-134] stroke-width[6]`};
  }
`;

export const SiderBarCSS = {
  SiderBar,
  Menus,
  BuggerSiderBar,
};
