import React from 'react';
import { RoomNotFoundCSS } from './RoomNotFound.styles';
import SpinnerDot from '@Components/SpinnerDot';

function RoomNotFound({ showSpinnerMap }) {
  const { SmileFace, Container, Title } = RoomNotFoundCSS;
  return showSpinnerMap ? (
    <SpinnerDot className='my-10 relative' />
  ) : (
    <Container>
      <SmileFace />
      <Title>
        <p>Sorry, We couldn't find what you are looking for!</p>
        <p>PLease move the map to find more</p>
      </Title>
    </Container>
  );
}

export default RoomNotFound;
