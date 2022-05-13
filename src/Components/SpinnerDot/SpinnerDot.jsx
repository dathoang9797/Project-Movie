import React from 'react';
import { SpinnerDotCSS } from './SpinnerDot.styles';

function SpinnerDot(props) {
  const { Container, FirstDot, SecondDot, ThirdDot } = SpinnerDotCSS;
  return (
    <Container id='spinner-dot' {...props}>
      <FirstDot />
      <SecondDot />
      <ThirdDot />
    </Container>
  );
}

export default SpinnerDot;
