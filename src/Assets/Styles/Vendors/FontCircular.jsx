import { css } from 'twin.macro';
import { fontCircular } from '@Assets/Fonts/Circular';

const { circularBold, circularBook, circularMedium } = fontCircular;

export const fontCircularCSS = css`
  @font-face {
    font-family: Circular;
    unicode-range: U+0000-03FF, U+0500-058F, U+0700-074F, U+0780-FAFF, U+FE00-FE6F, U+FF00-EFFFF,
      U+FFFFE-10FFFF;
    font-weight: normal;
    font-style: normal;
    src: url(${circularBook}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: Circular;
    unicode-range: U+0000-03FF, U+0500-058F, U+0700-074F, U+0780-FAFF, U+FE00-FE6F, U+FF00-EFFFF,
      U+FFFFE-10FFFF;
    font-weight: 600;
    font-style: normal;
    src: url(${circularMedium}) format('woff2'), url(${circularMedium}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: Circular;
    unicode-range: U+0000-03FF, U+0500-058F, U+0700-074F, U+0780-FAFF, U+FE00-FE6F, U+FF00-EFFFF,
      U+FFFFE-10FFFF;
    font-weight: 800;
    font-style: normal;
    src: url(${circularBold}) format('woff2'), url(${circularBold}) format('woff');
    font-display: swap;
  }
`;
