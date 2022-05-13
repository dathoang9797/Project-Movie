import tw, { css } from 'twin.macro';
import { Mixins } from '@Assets/Styles/Abstracts/Mixins';

const { backgroundLinearGradient, backgroundLinearGradientCancel } = Mixins;

export const SweetAlertCSS = css`
  .swal2-popup .swal2-confirm {
    ${backgroundLinearGradient()};
    ${tw`outline-none box-shadow[none !important] background-size[200% !important] transition-all duration-300 filter[drop-shadow(22.9008px 11.4504px 68.7023px rgba(255, 56, 92, 0.1))]`}
  }

  .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-confirm:hover {
    ${tw`text-white background-position[right center !important] box-shadow[0px 10px 15px 0px rgb(255 56 92 / 50%) !important]  border-color[transparent]`};
  }

  .swal2-popup .swal2-cancel {
    ${backgroundLinearGradientCancel()};
    ${tw`outline-none box-shadow[none !important] background-size[200% !important] transition-all duration-300 filter[drop-shadow(22.9008px 11.4504px 68.7023px rgba(221, 51, 51,0.1))]`}
  }

  .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-cancel:hover {
    ${tw`text-white background-position[right center !important] box-shadow[0px 10px 15px 0px rgb(255 56 92 / 50%) !important]  border-color[transparent]`};
  }
`;
