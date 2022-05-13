import { css } from 'twin.macro';

export const Mixins = {
  backgroundLinearGradient: () =>
    css`
      background: linear-gradient(
        to right,
        rgb(230, 30, 77) 0,
        rgb(227, 28, 95) 51%,
        rgb(230, 30, 77) 100%
      ) !important;
    `,
  backgroundLinearGradientCancel: () =>
    css`
      background: linear-gradient(
        to right,
        rgb(221, 51, 94) 0,
        rgb(221, 51, 51) 51%,
        rgb(221, 51, 94)100%
      ) !important;
    `,
};
