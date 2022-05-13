import React from 'react';
import { HeaderPrimaryCSS } from './HeaderPrimary.styles';
import { VectorSVG } from '@Assets/Svgs';
import ProfileMenu from '@Layouts/User/HeaderUser/ProfileMenu';

function HeaderPrimary() {
  const { LogoSVG } = VectorSVG;
  const { Logo, Container } = HeaderPrimaryCSS;
  const urlHome = process.env.REACT_APP_LINK_HOME;

  return (
    <Container>
      <Logo to={urlHome}>
        <LogoSVG />
      </Logo>
      <ProfileMenu />
    </Container>
  );
}

export default React.memo(HeaderPrimary);
