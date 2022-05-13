import React, { useEffect, useState } from 'react';
import { DetailMapCSS } from './DetailMap.styles';
import { geoCodeService } from '@Services/GeoCodeService';

function DetailMap({ name }) {
  const { Container, Header, Inject } = DetailMapCSS;
  const googleKeyAPI = process.env.REACT_APP_API_KEY_GOOGLE;
  const [place, setPlace] = useState({ lat: 0, lng: 0, address: '' });
  const { lat, lng, address } = place;
  const src = `https://www.google.com/maps/embed/v1/place?key=${googleKeyAPI}&zoom=18&center=${lat},${lng}
  &q=${encodeURIComponent(address)}`;

  useEffect(() => {
    if (!name) return;
    geoCodeService.getGeoCodeByAddress(name, false, false).then((data) => {
      const { lat, lng } = data[0].geometry.location;
      const address = data[0].formatted_address;
      setPlace({ lat, lng, address });
    });
  }, [name]);

  return !address.length ? null : (
    <Container>
      <Header>
        <h1>Nơi bạn sẽ đến</h1>
      </Header>
      <Inject>
        <iframe
          title='room'
          style={{ border: 0 }}
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src={src}
        />
      </Inject>
    </Container>
  );
}

export default React.memo(DetailMap);
