import { Popover } from 'antd';
import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';

const ContainerPopover = styled(Popover)``;

const Container = styled.div`
  flex: 1;
  border-right: 1px solid #e9e9e9;
  margin-top: 3px;
  position: relative;
  @media (max-width: 992px) {
    margin-bottom: 10px;
    margin-bottom: 10px;
    padding: 0;
    border-color: transparent;
  }
`;

const SearchInput = styled.input`
  font-size: 16px !important;
  border: none;
  font-weight: 500 !important;
  background-color: #fff;
  margin: 0;
  padding: 0;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  outline: none;
  color: gray !important;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  display: block;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;
  padding: 0 15px;

  &[type='text'] {
    font-family: inherit;
  }
  &::placeholder {
    color: gray !important;
  }
  @media (max-width: 992px) {
    padding: 0 15px;
    height: 55px;
    line-height: 55px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
  }
`;

const PopupSearchGoAnyWhere = styled.div`
  p {
    ${tw`font-semibold mb-6`};
  }
  & > button {
    ${tw`rounded-full px-4 py-2 border-1 border-gray-200 shadow-lg text-lg w-full flex justify-between items-center hover:shadow-xl transition-shadow duration-300`};
    span,
    svg {
      ${tw`color[var(--color-primary)] font-semibold text-xl`}
    }
  }
`;
const PopupItemProvince = styled(NavLink)`
  ${tw`cursor-pointer list-none w-full flex padding[8px 32px 8px 24px]`};
  &:hover {
    ${tw`background-color[rgb(247, 247, 247)] transition-colors duration-300 rounded-xl`}
  }
`;

const PopupItemProvinceImage = styled.div`
  ${tw`text-base background-color[rgb(235, 235, 235)] rounded-xl min-w-[48px ] mr-4 h-12 flex items-center justify-center`};
  img {
    ${tw`w-12 h-12 object-cover rounded-xl`};
  }
  svg {
    ${tw`block h-6 w-6 fill-current`};
  }
`;

const PopupItemProvinceName = styled.div`
  ${tw` flex items-center justify-center w-full`};
  p {
    ${tw`overflow-clip text-base font-medium color[rgb(34, 34, 34)] text-overflow[ellipsis] m-0`}
  }
`;

export const BannerSearchCSS = {
  PopupSearchGoAnyWhere,
  PopupItemProvince,
  PopupItemProvinceImage,
  PopupItemProvinceName,
  Container,
  SearchInput,
  ContainerPopover,
};
