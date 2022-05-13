import Form from '@Components/Form';
const {
  FormControl,
  FormGroup,
  FormItem,
  FormBedOutline,
  FormInput,
  FormHiOutlineClipboard,
  InputNumber,
  FormSwitch,
  FormSelect,
  FormOption,
  FormCheckOutlined,
} = Form;

export const renderFormRoomField = (
  field = null,
  sortDanhSachViTri = [],
  errors = null,
  values = null,
  handleChange = null,
  handleInputNumber = null,
  handleChangeSwitch = null,
  handleChangeSelect = null
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
                <FormBedOutline />
                <FormInput
                  type='text'
                  placeholder=' '
                  name='name'
                  onChange={handleChange}
                  childrenProps='Your Name Room'
                  value={values.name}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'description': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem
                validateStatus={errors ? 'error' : 'success'}
                help={errors ? errors.description : ''}
              >
                <FormHiOutlineClipboard />
                <FormInput
                  type='text'
                  placeholder=' '
                  name='description'
                  onChange={handleChange}
                  childrenProps='Your Description'
                  value={values.description}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'guests': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Guests'>
                <InputNumber onChange={handleInputNumber('guests')} value={values.guests} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'bedRoom': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='BedRoom'>
                <InputNumber onChange={handleInputNumber('bedRoom')} value={values.bedRoom} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'bath': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Bath'>
                <InputNumber onChange={handleInputNumber('bath')} value={values.bath} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'price': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Price'>
                <InputNumber
                  onChange={handleInputNumber('price')}
                  value={values.price ? values.price : null}
                  defaultValue={10000}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'dryer': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Dryer'>
                <FormSwitch onChange={handleChangeSwitch('dryer')} checked={values.dryer} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'indoorFireplace': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='IndoorFireplace'>
                <FormSwitch
                  onChange={handleChangeSwitch('indoorFireplace')}
                  checked={values.indoorFireplace}
                />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'pool': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Pool'>
                <FormSwitch onChange={handleChangeSwitch('pool')} checked={values.pool} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'hotTub': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='HotTub'>
                <FormSwitch onChange={handleChangeSwitch('hotTub')} checked={values.hotTub} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'elevator': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Elevator'>
                <FormSwitch onChange={handleChangeSwitch('elevator')} checked={values.elevator} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'wifi': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Wifi'>
                <FormSwitch onChange={handleChangeSwitch('wifi')} checked={values.wifi} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'kitchen': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Kitchen'>
                <FormSwitch onChange={handleChangeSwitch('kitchen')} checked={values.kitchen} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'gym': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Gym'>
                <FormSwitch onChange={handleChangeSwitch('gym')} checked={values.gym} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'cableTV': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='CableTV'>
                <FormSwitch onChange={handleChangeSwitch('cableTV')} checked={values.cableTV} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'heating': {
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Heating'>
                <FormSwitch onChange={handleChangeSwitch('heating')} checked={values.heating} />
              </FormItem>
            </FormGroup>
          </FormControl>
        );
      }

      case 'locationId': {
        console.log({ values });
        return (
          <FormControl key={`${key}-${index}`}>
            <FormGroup>
              <FormItem label='Location'>
                <FormSelect
                  bordered={false}
                  onChange={handleChangeSelect}
                  defaultValue={values.locationId?.province}
                  menuItemSelectedIcon={<FormCheckOutlined />}
                  dropdownClassName='select-location'
                >
                  {sortDanhSachViTri.map((viTri, index) => {
                    return (
                      <FormOption key={`ViTriSelect-${viTri._id}-${index}`} value={viTri._id}>
                        {viTri.province}
                      </FormOption>
                    );
                  })}
                </FormSelect>
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
