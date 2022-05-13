import React from 'react';
import { DetailBookingPriceHeaderCSS } from './DetailBookingPriceHeader.styles';
import { AiFillStar } from 'react-icons/ai';

function DetailBookingPriceHeader(props) {
  const { Container, PricingContainer, PricingContent, PricingEvaluate } =
    DetailBookingPriceHeaderCSS;
  const { price } = props;
  return (
    <Container>
      <PricingContainer>
        <PricingContent>
          <span>
            <span>${price - 1000}</span>&nbsp;
          </span>
          <span> ${price}</span>
          <span>&nbsp;/ đêm</span>
        </PricingContent>
        <span>$19/đêm, giá gốc $25</span>
      </PricingContainer>
      <PricingEvaluate>
        <div>
          <span>
            <AiFillStar className='h-4 w-4' />
          </span>
          <span aria-hidden='true'>4,73 ·</span>
          <a aria-label='Xếp hạng 4,73/5 theo 260 đánh giá.' href='@a'>
            <span>260 đánh giá</span>
          </a>
        </div>
      </PricingEvaluate>
    </Container>
  );
}

export default DetailBookingPriceHeader;
