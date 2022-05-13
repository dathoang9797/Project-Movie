import React from 'react';
import { DetailReviewTitleCSS } from './DetailReviewTitle.styles';
import { AiFillStar } from 'react-icons/ai';

function DetailReviewTitle() {
  const { Container } = DetailReviewTitleCSS;
  return (
    <Container>
      <span>
        <AiFillStar />
      </span>
      <span>
        <h2>
          <span aria-hidden='true'>4,73 · 260 đánh giá</span>
        </h2>
      </span>
    </Container>
  );
}

export default React.memo(DetailReviewTitle);
