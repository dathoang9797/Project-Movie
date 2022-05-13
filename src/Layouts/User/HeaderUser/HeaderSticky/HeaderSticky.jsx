import { VectorSVG } from '@Assets/Svgs';
import ProfileMenu from '@Layouts/User/HeaderUser/ProfileMenu';
import React, { useEffect, useState } from 'react';
import { HeaderStickyCSS } from './HeaderSticky.styles';

function HeaderSticky() {
  const [visible, setVisible] = useState(false);
  const { LogoSVG } = VectorSVG;
  const { Logo, Container, WrapHeader } = HeaderStickyCSS;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <WrapHeader>
      <Container className={`cloned ${visible ? 'sticky' : 'unsticky'}`}>
        <Logo to={urlHome}>
          <LogoSVG />
        </Logo>
        <ProfileMenu />
      </Container>
    </WrapHeader>
  );
}

export default React.memo(HeaderSticky);
