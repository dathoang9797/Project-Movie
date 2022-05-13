import tw, { styled } from 'twin.macro';
import { ButtonScrollTopCSS } from '@/Components/ButtonScrollTop/ButtonScrollTop.styles';

const { LinkCSS } = ButtonScrollTopCSS;

const Container = styled.div`
  ${tw`relative`};
  & ${LinkCSS} {
    ${tw`bottom-12 `};
  }

  @media (max-width: 992px) {
    & > section.ant-layout:after {
      ${tw`absolute bottom-0 left-0 right-0 content `};
    }

    & > section.ant-layout.opacity:after {
      ${tw`background-color[rgba(0, 0, 0, 0.5)] opacity[0.5] h-full w-full z-50`};
    }
  }
`;

export const AdminTemplateCSS = {
  Container,
};
