import { loadingSelector } from '@/Redux/Selector/LoadingSelect';
import React, { useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SpinnerCSS } from './Spinner.styles';

const Spinner = () => {
  const { selectIsLoadingState } = loadingSelector;
  const isLoading = useSelector(selectIsLoadingState);
  const spinRef = useRef(null);
  const timeOut1 = useRef(null);
  const timeOut2 = useRef(null);
  const { Container, Ripple } = SpinnerCSS;
  
  useLayoutEffect(() => {
    clearTimeout(timeOut1.current);
    clearTimeout(timeOut2.current);
    spinRef.current.style.zIndex = 99999;
    spinRef.current.style.display = 'block';
    spinRef.current.classList.remove('animate__fadeOut');
    if (!isLoading) {
      timeOut1.current = setTimeout(() => {
        spinRef.current.classList.add('animate__fadeOut');
        timeOut2.current = setTimeout(() => {
          spinRef.current.style.zIndex = 0;
          spinRef.current.style.display = 'none';
        }, 300);
      }, 200);
    }
  },[isLoading]);

  return (
    <Container ref={spinRef} className='animate__animated'>
      <Ripple>
        <div></div>
        <div></div>
      </Ripple>
    </Container>
  );
};

export default Spinner;
