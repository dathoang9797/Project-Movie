import tw, { styled, css } from 'twin.macro';

const Container = styled.section`
  ${tw`m-auto h-full pt-6 font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]`};
`;

const Content = styled.div`
  ${tw`relative overflow-y-hidden rounded-xl min-height[300px]  max-height[calc(100vh - 144px)]`};
  @media (min-width: 1128px) {
    ${tw`max-height[calc(60vh - 64px)]`};
  }
`;

const ImagesContainer = styled.div`
  ${tw`relative height[0]  min-height[100%] min-w-full   padding-top[50%]`};
`;

const ImagesContentLeft = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full`};
`;

const ImagesContentRight = styled.div`
  ${tw`hidden`};
  ${tw`md:flex md:justify-center md: items-center`};
`;

const ImagesItemCommonCSS = css`
  ${tw`max-height[calc(100vh - 144px)] min-height[300px]`};

  @media (min-width: 700px) {
    ${tw`max-height[calc(60vh - 64px)]`}
  }
`;

const ImagesItemChangeHeight = css`
  & > :first-child {
    ${tw`h-full`};
  }

  & > :last-child {
    ${tw`h-full hidden`};
  }

  @media (min-height: 450px) {
    & > :first-child {
      ${tw`h-1/2`};
    }
    & > :last-child {
      ${tw`h-1/2 block mt-2`}
    }
  }
`;

const ImagesItemFirst = styled.div`
  ${ImagesItemCommonCSS};
  ${tw`h-full  absolute w-full  `};
  ${tw`md:width[50%] md:left[0px] md:top[0px]`}
`;

const ImagesItemSecond = styled.div`
  ${ImagesItemCommonCSS};
  ${ImagesItemChangeHeight};
  ${tw`absolute top-0 left-1/2 flex h-full w-3/12 pl-2   flex-col`};
`;

const ImagesItemsThird = styled.div`
  ${ImagesItemCommonCSS};
  ${ImagesItemChangeHeight};
  ${tw`absolute top-0 right-0 flex h-full w-3/12 pl-2 flex-col`};
`;

const ImagesItemsContent = styled.div`
  ${tw`relative h-full w-full background-color[rgba(34, 34, 34, 0.1)]
  `}

  &:after {
    ${tw`bg-black inset-0 content opacity-0 pointer-events-none absolute z-10  transition-all duration-300`};
  }
  &:hover:after {
    ${tw` opacity-20`};
  }
`;

const ImagesItemLink = styled.a`
  ${tw`relative  underline h-full w-full block outline-none font-size[ inherit] font-weight[ inherit] font-family[ inherit]
  font-style[ inherit] font-variant[ inherit] line-height[ inherit] color[ inherit]  -webkit-tap-highlight-color[ transparent]`};
  &:after {
    ${tw`absolute content inset-0 h-full w-full z-index[1] border-0 border-solid border-color[#000] block pointer-events-none left-0 top-0 `};
  }
  &:hover {
    ${tw`cursor-pointer color[inherit] underline`}
  }
`;

const ImagesItemLinkContent = styled.div`
  ${tw`relative inline-block align-bottom h-full w-full min-height[1px] bg-no-repeat background-position[50% 50%]`};
  img {
    ${tw`absolute h-full w-full align-bottom object-cover`};
  }
  div {
    ${tw`bg-cover hidden align-bottom bg-none w-full h-full bg-no-repeat background-position[50% 50% !important]`};
  }
`;

const ButtonShowImage = styled.button`
  ${tw`absolute z-10 bottom-6 right-6 `}
  & > div {
    ${tw`-webkit-box-align[center] flex items-center cursor-pointer m-0 relative text-center text-decoration[none] w-auto touch-action[manipulation] text-sm font-semibold border-1 rounded-lg border-solid outline-none padding[7px 15px] transition-all duration-300
     -webkit-tap-highlight-color[transparent] border-color[rgb(34, 34, 34) ] background[rgb(255, 255, 255)] color[rgb(34, 34, 34)]`};
    svg {
      ${tw`block h-6 w-6 fill[currentcolor] `}
    }
    div {
      ${tw`ml-2`}
    }
  }
`;

export const DetailGridImagesCSS = {
  Container,
  Content,
  ImagesContainer,
  ButtonShowImage,
  ImagesContentLeft,
  ImagesContentRight,
  ImagesItemFirst,
  ImagesItemSecond,
  ImagesItemsThird,
  ImagesItemsContent,
  ImagesItemLink,
  ImagesItemLinkContent,
};
