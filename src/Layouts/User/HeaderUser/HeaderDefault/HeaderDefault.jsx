import React from 'react';
import ProfileMenu from '@Layouts/User/HeaderUser/ProfileMenu';
import { VectorSVG } from '@Assets/Svgs';
import { HeaderDefaultCSS } from './HeaderDefault.styles';

function HeaderDefault() {
  const { LogoSVG } = VectorSVG;
  const { Logo, Container, WrapHeader } = HeaderDefaultCSS;
  const urlHome = process.env.REACT_APP_LINK_HOME;

  return (
    <WrapHeader>
      <Container>
        <Logo to={urlHome}>
          <LogoSVG />
        </Logo>
        <ProfileMenu />
      </Container>
    </WrapHeader>
  );
}

export default React.memo(HeaderDefault);
