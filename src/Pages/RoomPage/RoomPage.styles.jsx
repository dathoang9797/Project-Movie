import { Pagination as PaginationAnt, Layout } from 'antd';
import tw, { styled } from 'twin.macro';

const { Sider } = Layout;

const Container = styled.main`
  ${tw`relative pt-20 font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    ]`}

  .ant-pagination-item-active {
    ${tw`font-medium bg-white border-color[var(--color-primary)] `};
  }

  .ant-pagination-item-active:hover a,
  .ant-pagination-item:hover a,
  .ant-pagination-item-active a {
    ${tw`transition-colors duration-300 color[var(--color-primary)]`};
  }

  .ant-pagination-item:hover {
    ${tw`transition-all duration-300 border-color[var(--color-primary)]`};
  }

  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    ${tw`color[var(--color-primary)] border-color[var(--color-primary)]`};
  }

  .ant-layout {
    ${tw`min-height[100vh]`};
  }

  .ant-layout-has-sider {
    ${tw`flex-direction[initial]`}

    @media (max-width: 1100px) {
      ${tw`flex-col-reverse`};
    }
  }

  #scroll-top {
    ${tw`right[45px] bottom[23px]`};

    @media (max-width: 1050px) {
      ${tw`right[0] `};
    }
  }
`;

const Map = styled.div`
  ${tw` w-[calc(100% - 60%)] absolute right-0 top-0 bottom-0 transition-all duration-300`}
  @media (max-width: 1100px) {
    ${tw`static w-full`};
  }
`;

const MainContent = styled.div`
  ${tw`height[100vh] flex items-center justify-center sticky top-0`}
  @media (max-width: 1100px) {
    ${tw`height[450px]`};
  }
`;

const Pagination = styled(PaginationAnt)`
  ${tw`flex justify-center items-center`}
`;

const List = styled.div``;

const Scarcity = styled.div`
  ${tw`flex items-center py-4 font-normal `};
  img {
    ${tw` mr-[15px]`};
  }
`;

const Filter = styled.div`
  ${tw` pt-3.5`}

  button {
    ${tw`mr-1.5 py-2 px-4 outline-none bg-transparent m-0 border-1 border-color[#b0b0b0] border-radius[30px] transition-all duration-300`}
    &:hover {
      ${tw`border-color[var(--color-text-light)]`}
    }
  }
`;

const ContentSider = styled(Sider)`
  ${tw` max-width[60% !important] min-width[60% !important] width[100% !important] px-6 py-6 background-color[white !important]  flex[0 0 200px !important]  font-normal  `}

  &.ant-layout-sider {
    ${tw`transition-all duration-300`}
  }

  &.ant-layout-sider-collapsed {
    ${tw`min-h-[0 !important] max-width[0 !important] width[0 !important] padding[0!important] background-color[white !important] min-width[0 !important]
   flex[0 0 0 !important]
    `}

    .ant-layout-sider-children,
    ${Filter} {
      ${tw`transition-all duration-300 opacity-0 invisible cursor-text`}
    }
  }

  &.ant-layout-sider-collapsed ~ ${Map} {
    width: 100%;
  }

  .ant-layout-sider-children,
  ${Filter} {
    ${tw`transition-all duration-300 opacity-100 visible cursor-text`}
  }

  @media (max-width: 1100px) {
    ${tw`max-width[100% !important] min-width[100% !important]`};
  }
`;

const ButtonCollapse = styled.button`
  ${tw`items-center border[2px solid transparent] inline-flex px-[14px] color[rgb(34, 34, 34)] rounded-lg outline-none whitespace-nowrap absolute ml-6 mt-6 top[15%] left-0 z-10 transition-all duration-300 bg-white h-10 flex-row box-shadow[rgb(0 0 0 / 12%) 0px 6px 16px] justify-center`}

  &:focus {
    ${tw`outline-none`}
  }

  svg {
    ${tw` h-4 w-4 `}
  }

  @media (max-width: 1100px) {
    ${tw`hidden`};
  }
`;

const ButtonShowRoom = styled(ButtonCollapse)`
  span {
    ${tw`font-semibold pl-1`}
  }
`;

export const RoomCSS = {
  Container,
  ContentSider,
  Filter,
  Scarcity,
  List,
  Pagination,
  Map,
  MainContent,
  ButtonCollapse,
  ButtonShowRoom,
};
