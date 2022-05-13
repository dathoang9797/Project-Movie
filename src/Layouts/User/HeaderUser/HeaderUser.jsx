import { HeaderCSS } from '@Layouts/User/HeaderUser/HeaderUser.styles';
import React from 'react';
import HeaderDefault from './HeaderDefault';
import HeaderSticky from './HeaderSticky';
import HeaderPrimary from './HeaderPrimary';
import { useLocation } from 'react-router-dom';

function HeaderUser() {
  const { Container } = HeaderCSS;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const { pathname } = useLocation();

  return urlHome === pathname ? (
    <Container>
      <HeaderDefault />
      <HeaderSticky />
    </Container>
  ) : (
    <Container>
      <HeaderPrimary />
    </Container>
  );
}

export default React.memo(HeaderUser);
