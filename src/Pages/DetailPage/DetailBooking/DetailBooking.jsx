import React from 'react';
import { DetailBookingCSS } from './DetailBooking.styles';
import DetailBookingDatePicker from './DetailBookingDatePicker';
import DetailBookingInfo from './DetailBookingInfo';
import DetailBookingUtility from './DetailBookingUtility';
import DetailBookingPrice from './DetailBookingPrice';

function DetailBooking(props) {
  const { Container, ContentLeft, ContentRight } = DetailBookingCSS;
  const { chiTietPhong } = props;
  const {
    _id,
    guests,
    bedRoom,
    bath,
    description,
    price,
    elevator,
    hotTub,
    pool,
    indoorFireplace,
    dryer,
    gym,
    kitchen,
    wifi,
    heating,
    cableTV,
  } = chiTietPhong;
  return (
    <Container>
      <ContentLeft>
        <DetailBookingInfo
          guests={guests}
          bedRoom={bedRoom}
          bath={bath}
          description={description}
        />
        <DetailBookingUtility
          elevator={elevator}
          hotTub={hotTub}
          pool={pool}
          indoorFireplace={indoorFireplace}
          dryer={dryer}
          gym={gym}
          kitchen={kitchen}
          wifi={wifi}
          heating={heating}
          cableTV={cableTV}
        />
        <DetailBookingDatePicker price={price} roomId={_id} />
      </ContentLeft>
      <ContentRight>
        <DetailBookingPrice price={price} roomId={_id} />
      </ContentRight>
    </Container>
  );
}

export default React.memo(DetailBooking);
