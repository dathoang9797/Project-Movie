import tw, { styled } from 'twin.macro';
import { Image as ImageAnt } from 'antd';

const ContainerCSS = styled.section`
  ${tw`text-gray-600 bg-gray-100  overflow-hidden container  py-24 mx-auto h-full lg:pl-1.5`};
`;

const ContentCSS = styled.div`
  ${tw` mx-auto flex flex-wrap justify-center items-center`};

  .ant-image-mask {
    ${tw`rounded-lg`};
  }

  .ant-image {
    ${tw`h-full w-1/2 flex-grow`};
  }

  @media only screen and (max-width: 1200px) {
    .ant-image {
      ${tw`h-[400px] w-1/2`};
    }
  }
`;

const ImageCSS = styled(ImageAnt)`
  ${tw` w-full  h-full object-cover object-center rounded-lg`};
`;

const ProfileCSS = styled.div`
  ${tw`lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0`};
`;

const TitleCSS = styled.h1`
  ${tw`text-white text-3xl  font-medium mb-1 color[var(--color-primary)]`};
`;

const DescCSS = styled.div`
  & > div:not(:last-child) {
    ${tw`block my-2`};
    div {
      ${tw`lg:block mr-2`};
      span {
        ${tw`mr-0.5 mb-1 text-base  lg:text-xl`};
        &:last-child {
          ${tw`mr-0`};
        }
        & > span {
          ${tw`lg:text-sm`};
        }
      }
    }
  }

  & > span {
    ${tw`text-gray-600 text-sm font-medium mr-1.5`};
  }
`;

export const LocationManagerProfileCSS = {
  ContainerCSS,
  ContentCSS,
  ImageCSS,
  ProfileCSS,
  TitleCSS,
  DescCSS,
};
