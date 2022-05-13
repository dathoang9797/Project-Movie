import tw, { css } from 'twin.macro';

export const DatePickerCSS = css`
  #date-picker_modal {
    ${tw`top[5%] left[15%] bg-transparent backdrop-filter[unset]`};

    button[data-id='button-icon-element'] {
      ${tw`color[var(--color-text-dark)] transition-all duration-300`};
      &:hover {
        ${tw`background[rgb(247, 247, 247)]`};
      }
    }

    td[role='gridcell'] {
      button:hover {
        ${tw`border[1px solid var(--color-text-dark)]`};
      }
    }

    td[role='gridcell'] div.cOiteX,
    td[role='gridcell'] div.dnmLbY,
    td[role='gridcell'] div.bhKBNK,
    td[role='gridcell'] div.iunbWn,
    td[role='gridcell'] div.fUNNLN,
    td[role='gridcell'] div.lhdeXO,
    td[role='gridcell'] div.dgExyT,
    td[role='gridcell'] div.bhKBNK,
    td[role='gridcell'] div.hlwPvy,
    td[role='gridcell'] div.gLkOtR,
    td[role='gridcell'] div.eWjXmP,
    td[role='gridcell'] div.cXaskz,
    td[role='gridcell'] div.eMLSDn,
    td[role='gridcell'] div.jsQYfv,
    td[role='gridcell'] div.goFqHh,
    td[role='gridcell'] div.gzDbxb,
    td[role='gridcell'] div.QOpYK,
    td[role='gridcell'] div.esqqhf,
    td[role='gridcell'] div.jCKzHR,
    td[role='gridcell'] div.jztmMv,
    td[role='gridcell'] div.cWUvNl,
    td[role='gridcell'] div.hgxmAV,
    td[role='gridcell'] div.hEpUKJ, {
      button {
        &[data-selected='true'],
        &:focus[data-selected='true'],
        &:active[data-selected='true'],
        &[data-selected='true'].gygcQf,
        &[data-selected='false'].lmmDLb,
        &[data-selected='false'].bgxOcY {
          ${tw` box-shadow[0 0 2px var(--color-box-shadow-datepicker)]
          border[1px solid var(--color-border-datepicker)] background-color[var(--color-primary)]`};
        }
        &:active[data-selected='false'],
        &:focus[data-selected='false'] {
          ${tw` box-shadow[0 0 2px var(--color-box-shadow-datepicker)]
          border[1px solid var(--color-border-datepicker)] `};
        }

        &[data-selected='false'].dJHgI {
          color: var(--color-primary);
          &:after {
            background-color: var(--color-primary);
          }
        }
      }
    }

    td[role='gridcell'] div.iunbWn,
    td[role='gridcell'] div.jsQYfv,
    td[role='gridcell'] div.cWUvNl,
    td[role='gridcell'] div.kTnhxE {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(to left, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
      background: linear-gradient(
        to left,
        rgba(255, 56, 9, 0.2),
        rgba(255, 56, 9, 0.2) 50%,
        rgba(255, 56, 9, 0) 50%,
        rgba(255, 56, 9, 0)
      );
    }

    td[role='gridcell'] div.eMLSDn,
    td[role='gridcell'] div.jztmMv {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(to left, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
      background: linear-gradient(
        to left,
        rgba(255, 56, 9, 0),
        rgba(255, 56, 9, 0) 50%,
        rgba(255, 56, 9, 0.2) 50%,
        rgba(255, 56, 9, 0)
      );
    }

    td[role='gridcell'] div.fUNNLN,
    td[role='gridcell'] div.goFqHh {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(to right, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
    }

    td[role='gridcell'] div.lhdeXO,
    td[role='gridcell'] div.jCKzHR {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(to left, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
    }

    td[role='gridcell'] div.bhKBNK,
    td[role='gridcell'] div.gzDbxb {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(
        to right,
        rgba(255, 56, 9, 0.2),
        rgba(255, 56, 9, 0.2) 50%,
        rgba(255, 56, 9, 0) 50%,
        rgba(255, 56, 9, 0)
      );
    }

    td[role='gridcell'] div.hlwPvy,
    td[role='gridcell'] div.cXaskz {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(to right, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
      background: linear-gradient(
        to right,
        rgba(255, 56, 9, 0.2),
        rgba(255, 56, 9, 0.2) 50%,
        rgba(255, 56, 9, 0) 50%,
        rgba(255, 56, 9, 0)
      );
    }

    td[role='gridcell'] div.gLkOtR,
    td[role='gridcell'] div.hgxmAV {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(to right, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
      background: linear-gradient(
        to right,
        rgba(255, 56, 9, 0),
        rgba(255, 56, 9, 0) 50%,
        rgba(255, 56, 9, 0.2) 50%,
        rgba(255, 56, 9, 0)
      );
    }

    td[role='gridcell'] div.esqqhf {
      background: rgba(255, 56, 9, 0.2);
      background: linear-gradient(to left, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
      background: linear-gradient(to right, rgba(255, 56, 9, 0.2), rgba(255, 56, 9, 0));
      background: linear-gradient(
        to right,
        rgba(255, 56, 9, 0),
        rgba(255, 56, 9, 0.2) 50%,
        rgba(255, 56, 9, 0)
      );
      background: linear-gradient(
        to left,
        rgba(255, 56, 9, 0),
        rgba(255, 56, 9, 0) 50%,
        rgba(255, 56, 9, 0.2) 50%,
        rgba(255, 56, 9, 0)
      );
    }

    td[role='gridcell'] div.eWjXmP {
      background: rgba(255, 56, 9, 0.2);
    }

    button.gBfPDK:focus {
      outline: 0;
      box-shadow: 0 0 2px var(--color-primary);
    }

    td[role='gridcell'] div.dgExyT {
      background: rgba(255, 56, 9, 0.2);
    }

    .jUiQSI:hover,
    .jUiQSI:focus,
    .jUiQSI:active,
    .jUiQSI:visited {
      color: var(--color-primary);
      box-shadow: 0 0 2px var(--color-primary);
    }

    .jUiQSI:visited .sc-jnlKLf:focus,
    .jUiQSI:active {
      box-shadow: 0 0 2px rgb(255, 56, 92);
    }
  }
`;
