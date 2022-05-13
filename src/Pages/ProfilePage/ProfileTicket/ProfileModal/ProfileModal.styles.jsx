import tw, { styled } from 'twin.macro';

const Container = tw.div`text-gray-600  overflow-y-auto h-full px-5  py-5 mx-auto sm:max-w-full sm:m-0 md:max-w-full md:m-0  md:pr-2 lg:px-0`;

const ModalContent = tw.div`-my-8 divide-y-2 divide-gray-100`;

const ModalItem = tw.div`py-8 flex flex-wrap md:flex-nowrap`;

const ModalContentLeft = tw.div`md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col w-full h-full`;

const ModalContentRight = tw.div`md:flex-grow ml-4 `;

const ModalImageRoom = tw.img` h-52 w-full object-cover rounded-xl  lg:h-48 `;

const ModalDateBook = tw.span`mt-2 text-gray-500 text-sm text-center color[var(--color-text-dark)]`;

const ModalNameRoom = tw.h1`text-2xl font-semibold text-gray-900  mb-2`;

const ModalService = styled.div`
  ${tw`flex items-center flex-wrap`}
  & > span {
    ${tw` flex items-center flex-wrap`};
    & > span {
      ${tw`mr-1`}
    }
    &:not(:last-child) {
      ${tw`mr-2`};
    }
  }
`;

export const ProfileTicketCSS = {
  Container,
  ModalContent,
  ModalItem,
  ModalContentLeft,
  ModalContentRight,
  ModalImageRoom,
  ModalDateBook,
  ModalNameRoom,
  ModalService,
};
