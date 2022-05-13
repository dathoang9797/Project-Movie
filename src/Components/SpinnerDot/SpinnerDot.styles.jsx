import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`my-0 mx-auto text-center whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
`;

const FirstDot = styled.div`
  width: 6px;
  height: 6px;
  margin-right: 4px;
  border-radius: 100%;
  display: inline-block;
  animation-name: spinner-dot;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  vertical-align: middle;
  background-color: var(--color-text-dark);
  animation-delay: -0.3s;
`;

const SecondDot = styled.div`
  width: 6px;
  height: 6px;
  margin-right: 4px;
  border-radius: 100%;
  display: inline-block;
  animation-name: spinner-dot;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  vertical-align: middle;
  background-color: var(--color-text-dark);
  animation-delay: -0.15s;
`;

const ThirdDot = styled.div`
  width: 6px;
  height: 6px;
  margin-right: 4px;
  border-radius: 100%;
  display: inline-block;
  animation-name: spinner-dot;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  vertical-align: middle;
  background-color: var(--color-text-dark);
`;

export const SpinnerDotCSS = {
  Container,
  FirstDot,
  SecondDot,
  ThirdDot,
};
