import React from 'react';
import * as styled from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { Abstracts } from './Abstracts';
import { Base } from './Base';
import { Vendors } from './Vendors';
import { ModalCSS } from './Components/ModalCSS';
import { DatePickerCSS } from './Components/DatePickerCSS';
import { SweetAlertCSS } from './Components/SweetAlertCSS';
import { PopoverCSS } from './Components/PopoverCSS';
import { DropDownCSS } from './Components/DropdownCSS';
import 'antd/dist/antd.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'animate.css';
import '@/index.css';

const CustomStyles = styled.createGlobalStyle`
  ${Base};
  ${Abstracts};
  ${Vendors};
  ${ModalCSS};
  ${DatePickerCSS};
  ${SweetAlertCSS};
  ${PopoverCSS};
  ${DropDownCSS};
  #root {
    ${tw`w-[100%!important]`}
  }

  .ant-dropdown-arrow {
    --tw-bg-opacity: 1;
    ${tw`dark:background-image[linear-gradient(135deg, transparent 40%, rgba(55, 65, 81, var(--tw-bg-opacity)) 40%)]`};
  }

  .ant-dropdown-arrow::before {
    --tw-bg-opacity: 1;
    ${tw`dark:background-image[linear-gradient(to left, rgba(55, 65, 81, var(--tw-bg-opacity)) 50%, rgba(55, 65, 81, var(--tw-bg-opacity)) 50%) no-repeat -10px -10px]`};
  }

  .ant-modal-close-x {
    ${tw` width[30px] height[30px] line-height[30px]`};
  }

  .ant-modal {
    ${tw`top[60px]`};
  }

  .ant-select-dropdown {
    ${tw` mt-1 w-full bg-white  border-1 max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`};
  }

  .ant-image-preview-img {
    ${tw`inline-block mx-auto`};
  }

  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
    ${tw`border-color[var(--color-primary)]`};
  }

  .ant-picker-today-btn {
    ${tw`color[var(--color-primary)]`};
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    ${tw` bg-white font-weight[500] color[rgba(0, 0, 0, 0.85)]`};
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    ${tw`transition-all duration-300 text-white background-color[var(--color-primary)]`};
    .anticon {
      ${tw`transition-all duration-300 text-white`};
    }
  }

  .ant-dropdown-menu-item-selected,
  .ant-dropdown-menu-submenu-title-selected {
    ${tw`color[var(--color-primary)] bg-[var(--color-primary-blur)]`};
  }

  .ant-btn-link {
    ${tw`color[var(--color-primary)]`};
  }

  .ant-btn-primary,
  .ant-checkbox-checked .ant-checkbox-inner {
    ${tw`bg-[var(--color-primary)] border-[var(--color-primary)]`};
  }

  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    ${tw`border-[var(--color-primary)]`};
  }

  .ant-checkbox-checked::after {
    ${tw`border-[var(--color-primary)]`};
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    ${tw`color[var(--color-primary)] border-[var(--color-light)] bg-[var(--color-white)]`};
  }
  .ant-dropdown-menu {
    ${tw`rounded-lg`};
    li.ant-dropdown-menu-item {
      ${tw`rounded-full mx-2 my-1 px-2 py-1 text-[var(--color-text-light)] text-sm hover:text-[#000] transition-all duration-300`};
    }
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    color: #fff;
    background: var(--color-primary);
  }

  .ant-picker-header-view button:hover {
    ${tw`color[var(--color-primary)] `};
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
