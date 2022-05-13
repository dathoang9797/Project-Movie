import React from 'react';
import { DetailBookingPriceCSS } from './DetailBookingPrice.styles';
import DetailBookingPriceBill from './DetailBookingPriceBill';
import DetailBookingPriceDateModal from './DetailBookingPriceDateModal';
import DetailBookingPriceHeader from './DetailBookingPriceHeader';
import DetailBookingPricePopup from './DetailBookingPricePopup';

const DetailBookingPrice = (props) => {
  const { Container, Booking, BookingContent } = DetailBookingPriceCSS;
  const { price, roomId } = props;

  return (
    <Container>
      <Booking>
        <BookingContent>
          <DetailBookingPriceHeader price={price} />
          <DetailBookingPriceDateModal roomId={roomId} price={price} />
          <DetailBookingPricePopup />
          <DetailBookingPriceBill price={price} />
        </BookingContent>
      </Booking>
    </Container>
  );
};

export default DetailBookingPrice;
