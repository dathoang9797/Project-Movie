import React, { useMemo } from 'react';
import { DetailReviewRatingCSS } from './DetailReviewRating.styles';
import moment from 'moment';

function DetailReviewRating(props) {
  const { Container, Content, ImageUser, Item, Paragraph } = DetailReviewRatingCSS;
  const { danhSachDanhGia } = props;
  const formatDay = 'DD/MM/YYYY';

  const renderUserReview = useMemo(() => {
    if (!danhSachDanhGia.length) return null;
    return danhSachDanhGia.slice(0, 8).map((item, index) => {
      return (
        <Item key={item._id}>
          <ImageUser>
            <img src='https://dummyimage.com/80x80' alt='user' />
            <div>
              <h1>Some Body</h1>
              <p>{moment(item.created_at).format(formatDay)}</p>
            </div>
          </ImageUser>
          <Paragraph>{item.content}</Paragraph>
        </Item>
      );
    });
  }, [danhSachDanhGia]);

  return (
    <Container>
      <Content>{renderUserReview}</Content>
    </Container>
  );
}

export default DetailReviewRating;
