import Form from '@Components/Form';
import moment from 'moment';

const client = process.env.REACT_APP_NGUOI_DUNG_CLIENT;
const admin = process.env.REACT_APP_NGUOI_DUNG_ADMIN;

const {
  FormControl,
  FormGroup,
  FormItem,
  FormInput,
  FormUserOutlined,
  FormMailOutlined,
  FormLockOutlined,
  FormEyeOutlined,
  FormEyeInvisibleOutlined,
  FormPhoneOutlined,
  FormHomeOutlined,
  FormDatePicker,
  FormCheckOutlined,
  FormSelect,
  FormOption,
  FormSwitch,
} = Form;

export const renderFormUserField = (
  typeInput = null,
  field = null,
  errors = null,
  values = null,
  handleChange = null,
  handleChangeTypeInput = null,
  handleChangeDatePicker = null,
  handleChangeSelect = null,
  handleChangeSwitch = null
) => {
  return Object.keys(field).map((key, index) => {
    switch (key) {
      case 'name': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.name : ''}
              >
                <FormUserOutlined />
                <FormInput
                  type='text'
                  placeholder=' '
                  name='name'
                  onChange={handleChange}
                  childrenProps='Your Name'
                  value={values.name}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'email': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.email : ''}
              >
                <FormMailOutlined />
                <FormInput
                  type='email'
                  placeholder=' '
                  name='email'
                  onChange={handleChange}
                  childrenProps='Your Email'
                  value={values.email}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'password': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.password : ''}
              >
                <FormLockOutlined />
                {typeInput === 'password' ? (
                  <FormEyeInvisibleOutlined onClick={handleChangeTypeInput} />
                ) : (
                  <FormEyeOutlined onClick={handleChangeTypeInput} />
                )}
                <FormInput
                  type={typeInput}
                  placeholder=' '
                  name='password'
                  onChange={handleChange}
                  childrenProps='Your PassWord'
                  value={values.password}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'phone': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.phone : ''}
              >
                <FormPhoneOutlined />
                <FormInput
                  type='text'
                  placeholder=' '
                  name='phone'
                  onChange={handleChange}
                  childrenProps='Your Phone'
                  value={values.phone}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'birthday': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.birthday : ''}
                label='Birthday'
              >
                <FormDatePicker
                  format={'DD/MM/YYYY'}
                  onChange={handleChangeDatePicker}
                  defaultValue={values.birthday !== '' ? moment(values.birthday) : null}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'gender': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Gender'>
                <FormSwitch onChange={handleChangeSwitch} checked={values.gender} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'type': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Type'>
                <FormSelect
                  bordered={false}
                  onChange={handleChangeSelect}
                  defaultValue={client}
                  menuItemSelectedIcon={<FormCheckOutlined />}
                >
                  <FormOption value={client}>{client}</FormOption>
                  <FormOption value={admin}>{admin}</FormOption>
                </FormSelect>
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'address': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.address : ''}
              >
                <FormHomeOutlined />
                <FormInput
                  type='text'
                  placeholder=' '
                  name='address'
                  onChange={handleChange}
                  childrenProps='Your Address'
                  value={values.address}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      default:
        return null;
    }
  });
};
