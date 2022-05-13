import DetailReviewPoint from '@Pages/DetailPage/DetailReview/DetailReviewPoint';
import DetailReviewRating from '@Pages/DetailPage/DetailReview/DetailReviewRating';
import DetailReviewTitle from '@Pages/DetailPage/DetailReview/DetailReviewTitle';
import React from 'react';
import { DetailReviewModalCSS } from './DetailReviewModal.styles';

function DetailReviewModal(props) {
  const { Container, ContentLeft, ContentRight } = DetailReviewModalCSS;
  const { danhSachDanhGia } = props;

  return (
    <Container>
      <ContentLeft>
        <DetailReviewTitle />
        <DetailReviewPoint />
      </ContentLeft>
      <ContentRight>
        <DetailReviewRating danhSachDanhGia={danhSachDanhGia} />
      </ContentRight>
    </Container>
  );
}

export default DetailReviewModal;
