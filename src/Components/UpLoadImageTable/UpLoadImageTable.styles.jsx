import tw, { styled } from 'twin.macro';
import { LoadingOutlined } from '@ant-design/icons';

const Container = styled.div`
  .ant-upload.ant-upload-select-picture-card:hover {
    ${tw`border-color[var(--color-primary)]`};
  }
  .ant-upload-select-picture {
    ${tw` w-[250px !important] sm:h-[150px !important] `};
  }

  .ant-upload-select-picture-card {
    ${tw`md:w-[80px] md:h-[80px]`};
    ${tw`lg:w-[90px] lg:h-[90px]`};
    ${tw`xl:w-[104px] xl:h-[104px]`};
  }

  .ant-upload.ant-upload-select {
    ${tw`relative`}
  }

  .ant-upload.ant-upload-select.ant-upload-select-picture:hover:after,
  .ant-upload.ant-upload-select.ant-upload-select-picture:hover .ant-btn {
    ${tw`opacity-100`};
  }

  .ant-upload.ant-upload-select.ant-upload-select-picture:after {
    ${tw`content absolute inset-0 flex justify-center items-center text-white background-color[rgba(0, 0, 0, 0.5)] cursor-pointer transition-opacity duration-300 rounded-lg opacity-0  `};
  }

  .ant-btn {
    ${tw`z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white border-none opacity-0 transition-all duration-300 hover:bg-transparent hover:text-white hover:border-color[transparent] w-full h-full focus:bg-transparent focus:text-white focus:border-color[transparent] shadow-none p-0 rounded-lg`};
  }

  .ant-btn span:first-child {
    ${tw`text-base align-bottom`};
  }

  [ant-click-animating-without-extra-node='true']::after {
    display: none;
  }

  img {
    ${tw`rounded-lg w-full h-full object-cover`};
  }
`;

const LoadingOutlinedCSS = styled(LoadingOutlined)`
  ${tw` absolute top-1/2 text-white   transition-all duration-300  text-2xl`};
`;

const LoadingContentCSS = styled.div`
  ${tw`content absolute z-50 inset-0 flex justify-center items-center text-white background-color[rgba(0, 0, 0, 0.5)] cursor-pointer transition-opacity duration-300 rounded-lg`};
`;

export const UpLoadImageTableCSS = {
  Container,
  LoadingOutlinedCSS,
  LoadingContentCSS,
};
