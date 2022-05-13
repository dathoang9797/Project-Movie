import { ResetCSS } from './Reset';
import { AnimationCSS } from './Animation';
import { css } from 'twin.macro';

export const Base = css`
  ${ResetCSS};
  ${AnimationCSS};
`;
