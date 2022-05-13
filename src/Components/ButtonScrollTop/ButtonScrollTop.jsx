import React, { useState, useEffect } from 'react';
import { ButtonScrollTopCSS } from './ButtonScrollTop.styles';

function ButtonScrollTop(props) {
  const [showButton, setShowButton] = useState(false);
  const { FaArrowUpCSS, LinkCSS } = ButtonScrollTopCSS;
  const handleScrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleShowButton = () => {
      setShowButton(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleShowButton);
    return () => window.removeEventListener('scroll', handleShowButton);
  }, []);

  return (
    <LinkCSS className={showButton ? 'fade-in' : ''} onClick={handleScrollTop} id='scroll-top' {...props}>
      <FaArrowUpCSS />
    </LinkCSS>
  );
}

export default React.memo(ButtonScrollTop);
