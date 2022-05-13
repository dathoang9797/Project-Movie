import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`whitespace-nowrap z-10 absolute mt-6 left-1/2 -translate-x-1/2  transition-all duration-300 -webkit-box-pack[center] -webkit-box-align[center] bg-white box-shadow[rgb(0 0 0 / 12%) 0px 6px 16px] rounded-lg inline-flex items-center justify-center flex-row h-10 top[15%]`};

  @media (max-width: 1100px) {
    ${tw` top[5%]`};
  }

  &:hover {
    ${tw`bg-white`};
  }
`;

const Move = styled.div`
  ${tw`whitespace-nowrap color[rgb(34,34,34) ] px-3 table-cell`};
`;

const MoveLabel = styled.label`
  ${tw`-webkit-box-align[center] flex items-center cursor-pointer m-0`};
`;

const MoveSpan = styled.span`
  ${tw`relative inline-block cursor-pointer p-0`};

  & > input {
    ${tw`absolute opacity-0 `};
  }

  & > span {
    ${tw`inline-block border-1 h-6 w-6 text-center overflow-hidden align-top border-radius[4px] 
    text-white border-color[rgb(34, 34, 34)] background-color[rgb(34, 34, 34)]`};
    svg {
      ${tw`h-full`}
    }
  }
`;

const MoveContentSearch = styled.div`
  ${tw`ml-2`}
  span {
    ${tw`text-sm m-0 overflow-wrap[break-word] font-semibold`}
  }
`;

export const SearchMapCSS = {
  Container,
  Move,
  MoveContentSearch,
  MoveSpan,
  MoveLabel,
};
