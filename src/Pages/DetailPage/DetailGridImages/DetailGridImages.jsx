import React from 'react';
import { DetailGridImagesCSS } from './DetailGridImages.styles';
import { BsThreeDots } from 'react-icons/bs';
import ModalHoc from '@HOC/ModalHoc';
import DetailGridImageModal from './DetailGridImageModal';
import { CloseOutlined } from '@ant-design/icons';
import { ButtonCSS } from '@Components';

function DetailGridImages(props) {
  const { Close } = ButtonCSS;
  const { showModal, handlePropsContentModal, handleContentModal, handlePropsModal, image } = props;
  const imgSrc = !image?.length
    ? 'https://a0.muscache.com/im/pictures/67b6fa80-52e0-4b76-9d56-6f34d9ccec0e.jpg'
    : image;
  const closeIcon = (
    <Close>
      <CloseOutlined />
    </Close>
  );
  const handleShowModalGridImage = () => {
    handleContentModal(DetailGridImageModal);
    handlePropsModal({ wrapClassName: 'wrap-modal-grid-image', closeIcon, getContainer: '#root' });
    handlePropsContentModal({ image });
    showModal();
  };

  const {
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
  } = DetailGridImagesCSS;

  return (
    <Container>
      <Content>
        <ImagesContainer>
          <ImagesContentLeft>
            <ImagesItemFirst>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemFirst>
          </ImagesContentLeft>
          <ImagesContentRight>
            <ImagesItemSecond>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemSecond>
            <ImagesItemsThird>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
              <ImagesItemsContent>
                <ImagesItemLink href='#@'>
                  <ImagesItemLinkContent>
                    <img src={imgSrc} alt={imgSrc} />
                  </ImagesItemLinkContent>
                </ImagesItemLink>
              </ImagesItemsContent>
            </ImagesItemsThird>
          </ImagesContentRight>
        </ImagesContainer>
        <ButtonShowImage onClick={handleShowModalGridImage}>
          <div>
            <BsThreeDots />
            <div>Hiển thị tất cả ảnh</div>
          </div>
        </ButtonShowImage>
      </Content>
    </Container>
  );
}

export default ModalHoc(React.memo(DetailGridImages));
