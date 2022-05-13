import tw, { styled } from 'twin.macro';
import { Image } from 'antd';

const Container = tw.section`text-gray-600 h-full overflow-y-auto container px-5 py-0 mx-auto`;

const ModalContent = tw.div`flex flex-wrap -m-4`;

const ModalItem = tw.div`lg:w-1/4 md:w-1/2 px-2 w-full `;

const ModalItemLink = tw.button`block relative h-48 rounded overflow-hidden`;

const ModalImage = styled(Image)`
  ${tw`object-cover object-center w-full h-full block rounded-xl`}
  & ~ div.ant-image-mask:hover {
    ${tw` rounded-xl`}
  }
`;

export const DetailGridImageModalCSS = {
  Container,
  ModalContent,
  ModalItem,
  ModalItemLink,
  ModalImage,
};
