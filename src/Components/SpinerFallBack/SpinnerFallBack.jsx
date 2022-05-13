import React from 'react';
import { SpinnerFallBackCSS } from './SpinnerFallBack.styles';

function SpinnerFallBack() {
  const { Container, Ripple } = SpinnerFallBackCSS;
  return (
    <Container>
      <Ripple>
        <div></div>
        <div></div>
      </Ripple>
    </Container>
  );
}

export default SpinnerFallBack;
