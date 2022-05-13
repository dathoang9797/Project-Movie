import { FormCSS } from './Form.styles';
import { FormButtonCSS } from './FormButton';
import { FormDateCSS } from './FormDate';
import { FormIconCSS } from './FormIcon';
import { FromSwitchCSS } from './FormSwitch';
import { FormSelectCSS } from './FormSelect';
import { FormInputNumberCSS } from './FormInputNumber';
import FormInput from './FormInput';

const Form = {
  ...FormButtonCSS,
  ...FormIconCSS,
  ...FormCSS,
  ...FormDateCSS,
  ...FromSwitchCSS,
  ...FormSelectCSS,
  ...FormInputNumberCSS,
  FormInput,
};

export default Form;
