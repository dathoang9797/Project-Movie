import tw, { css } from 'twin.macro';

//Everything in below can't access direct in component so we set css in like the global
export const ResetCSS = css`
  html {
    --antd-wave-shadow-color: var(--color-primary);
    --scroll-bar: 0;
  }

  body {
    ${tw`font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif !important] text-sm color[var(--color-text-light)] bg-white m-0 overflow-visible w-[100% !important] relative  font-semibold overflow-y[auto !important]`}
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: rgb(0, 0, 0) !important;
    transition: background-color 600000s 0s, white 600000s 0s;
  }

  button:focus {
    ${tw`outline[0px auto transparent] `}
  }
`;
