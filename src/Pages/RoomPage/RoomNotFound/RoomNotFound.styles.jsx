import tw, { styled } from 'twin.macro';
import { VectorSVG } from '@Assets/Svgs';
const { SmileFaceSVG } = VectorSVG;

const Container = tw.div`mx-auto`;

const SmileFace = tw(SmileFaceSVG)`
relative animation[face-move 2.5s infinite] mx-auto
`;

const Title = styled.div`
  ${tw`text-center mt-10`};
  p {
    ${tw`text-gray-500 text-base`};
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    &:last-child {
      ${tw`font-semibold`};
    }
  }
`;

export const RoomNotFoundCSS = { SmileFace, Container, Title };
