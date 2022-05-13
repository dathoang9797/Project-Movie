import { CloseOutlined } from '@ant-design/icons';
import ModalHoc from '@HOC/ModalHoc';
import React from 'react';
import { DetailReviewCSS } from './DetailReview.styles';
import DetailReviewModal from './DetailReviewModal';
import DetailReviewPoint from './DetailReviewPoint';
import DetailReviewRating from './DetailReviewRating';
import DetailReviewTitle from './DetailReviewTitle';
import { ButtonCSS } from '@Components/Button';

function DetailReview(props) {
  const { Container, Content, ButtonOpen } = DetailReviewCSS;
  const { Close } = ButtonCSS;
  const {
    showModal,
    handlePropsModal,
    handlePropsContentModal,
    handleContentModal,
    danhSachDanhGia,
  } = props;
  
  const closeIcon = (
    <Close>
      <CloseOutlined />
    </Close>
  );
  const handleShowModal = () => {
    handleContentModal(DetailReviewModal);
    handlePropsContentModal({ danhSachDanhGia });
    handlePropsModal({ wrapClassName: 'wrap-modal-review', closeIcon });
    showModal();
  };
  return (
    <Container>
      <Content>
        <DetailReviewTitle />
        <DetailReviewPoint />
        <DetailReviewRating danhSachDanhGia={danhSachDanhGia} />
        {danhSachDanhGia.length > 10 && (
          <ButtonOpen onClick={handleShowModal}>
            Hiển thị tất cả {danhSachDanhGia.length} đánh giá
          </ButtonOpen>
        )}
      </Content>
    </Container>
  );
}

export default ModalHoc(React.memo(DetailReview));
