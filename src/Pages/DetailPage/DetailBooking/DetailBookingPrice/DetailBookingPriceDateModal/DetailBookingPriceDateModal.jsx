import { quanLyPhongChoThueAction } from '@Redux/Reducers/QuanLyPhongChoThueSlice';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import moment from 'moment';
import React, { useEffect, useState, useMemo } from 'react';
import { DatePickerModal } from 'react-rainbow-components';
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { DetailBookingPriceDateModalCSS } from './DetailBookingPriceDateModal.styles';

function DetailBookingPriceDateModal(props) {
  const { Container, Content, Heading, Title, Item, Button, CheckIn, CheckOut } =
    DetailBookingPriceDateModalCSS;
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState({ startDate: null, endDate: null });
  const [valueDatePicker, setValueDatePicker] = useState(null);
  const dispatch = useDispatch();
  const { roomId, price } = props;
  const addDayStr = 'Thêm Ngày';
  const dateFormat = 'DD-MM-YYYY';
  const minDate = useMemo(() => new Date(), []);
  const maxDate = useMemo(() => new Date(moment().add(6, 'M')), []);
  const { setBookingRoomAction, setTotalPriceBookingAction } = quanLyPhongChoThueAction;
  const { selectBookingRoom } = quanLyPhongChoThueSelector;
  const bookingRoom = useSelector(selectBookingRoom, shallowEqual);
  const { checkIn, checkOut } = bookingRoom;

  useEffect(() => {
    if (checkIn && checkOut) {
      setDate({
        startDate: moment(checkIn).format(dateFormat),
        endDate: moment(checkOut).format(dateFormat),
      });
    }
  }, [checkIn, checkOut]);

  const handleOpen = () => setIsOpen(!isOpen);

  const handlePrice = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const day = moment(checkOut).diff(moment(checkIn), 'days');
      return (price * day).toLocaleString();
    }
    return (price * 1).toLocaleString();
  };

  const formatDates = (dates) => {
    if (dates) {
      const startDay = moment(dates[0]).format(dateFormat);
      if (dates.length > 1) {
        const endDay = moment(dates[1]).format(dateFormat);
        return { startDay, endDay };
      }
      return { startDay };
    }
    return '';
  };

  const handleDatePickerChange = async (value) => {
    const { startDay, endDay } = formatDates(value);
    const checkIn = startDay ? moment(startDay, dateFormat).toISOString() : '';
    const checkOut = endDay ? moment(endDay, dateFormat).toISOString() : '';
    const params = { roomId, checkIn, checkOut };

    if (startDay && endDay) {
      setDate({ startDate: startDay, endDate: endDay });
      setValueDatePicker(value);
      setIsOpen(!isOpen);
      const totalPrice = handlePrice(checkIn, checkOut);
      batch(() => {
        dispatch(setBookingRoomAction(params));
        dispatch(setTotalPriceBookingAction(totalPrice));
      });
      return;
    }

    if (startDay) {
      setDate({ ...date, startDate: startDay });
      setValueDatePicker(value);
      return;
    }
  };

  return (
    <Container>
      <DatePickerModal
        title={
          <Title>
            <Heading>
              <h1>Chọn ngày</h1>
              <div>
                <p>Thêm ngày đi để biết giá chính xác</p>
              </div>
            </Heading>
          </Title>
        }
        isOpen={isOpen}
        value={valueDatePicker}
        variant='double'
        onChange={handleDatePickerChange}
        onRequestClose={() => setIsOpen(false)}
        selectionType='range'
        locale='vi-VN'
        id='date-picker_modal'
        minDate={minDate}
        maxDate={maxDate}
      />
      <Content>
        <Item isOpen={isOpen}>
          <Button type='button' onClick={handleOpen}>
            <CheckIn>
              <h1>Nhận phòng</h1>
              <span>{date.startDate ? date.startDate : addDayStr}</span>
            </CheckIn>
            <CheckOut>
              <h1>Trả phòng</h1>
              <span>{date.endDate ? date.endDate : addDayStr}</span>
            </CheckOut>
          </Button>
        </Item>
      </Content>
    </Container>
  );
}

export default DetailBookingPriceDateModal;
