import tw, { styled } from 'twin.macro';

const Container = tw.div`
  py-12  border-top-color[rgb(221, 221, 221)] border-top-width[1px !important]  border-top-style[solid !important] font-family[Circular, -apple-system, 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', sans-serif] w-full
`;

const Header = styled.div`
  ${tw`pb-6`}
  h1 {
    ${tw`color[var(--color-text-dark)] font-semibold text-2xl m-0 p-0`};
  }
  @media (min-width: 744px) {
    ${tw`pb-4`}
  }

  @media (min-width: 1128px) {
    ${tw`pb-5`}
  }
`;
const Inject = styled.div`
  ${tw`border-radius[12px 12px 0px 0px] overflow-hidden backface-visibility[hidden] relative h-[218px] transform[translate3d(0px, 0px, 0px)]
`};

  @media (min-width: 744px) {
    ${tw`rounded-lg h-[480px] mb-8 overflow-visible`}
  }
  iframe{
    ${tw`w-full h-full`}
  }
`;

export const DetailMapCSS = { Container, Header, Inject };
