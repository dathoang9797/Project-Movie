import React from 'react';
import { SpinnerMapCSS } from './SpinnerMap.styles';

function SpinnerMap() {
  const { Container, SpinnerMapButton } = SpinnerMapCSS;
  return (
    <Container>
      <SpinnerMapButton>
        <div>
          <span>
            <span />
            <span />
            <span />
          </span>
        </div>
      </SpinnerMapButton>
    </Container>
  );
}

export default SpinnerMap;
