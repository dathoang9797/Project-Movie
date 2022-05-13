import React, { useEffect, useState, useMemo } from 'react';
import { DateRange } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import moment from 'moment';
import { DetailBookingDatePickerCSS } from './DetailBookingDatePicker.styles';
import { quanLyPhongChoThueAction } from '@Redux/Reducers/QuanLyPhongChoThueSlice';
import { useDispatch, batch, shallowEqual, useSelector } from 'react-redux';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';

function DetailBookingDatePicker(props) {
  const { Container, Heading, Title } = DetailBookingDatePickerCSS;
  const dispatch = useDispatch();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [direction, setDirection] = useState('horizontal');
  const minDate = useMemo(() => new Date(), []);
  const maxDate = useMemo(() => new Date(moment().add(6, 'M')), []);
  const dateFormatDateRange = 'dd/MM/yyyy';
  const { roomId, price } = props;
  const { setBookingRoomAction, setTotalPriceBookingAction } = quanLyPhongChoThueAction;
  const { selectBookingRoom } = quanLyPhongChoThueSelector;
  const bookingRoom = useSelector(selectBookingRoom, shallowEqual);
  const { checkIn, checkOut } = bookingRoom;

  useEffect(() => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      setDate([{ startDate, endDate, key: 'selection' }]);
    }
  }, [checkIn, checkOut]);

  const handlerResize = () => {
    const domMonth = document.querySelectorAll('.rdrMonth');
    if (window.innerWidth < 600) {
      setDirection('vertical');
      domMonth.forEach((item) => {
        item.style.width = '100%';
      });
      return;
    }
    setDirection('horizontal');
    domMonth.forEach((item) => {
      item.style.width = '27.667em';
    });
  };

  useEffect(() => {
    handlerResize();
    window.addEventListener('resize', handlerResize);
    return () => window.removeEventListener('resize', handlerResize);
  });

  const handleDateChange = async (date) => {
    const { startDate, endDate } = date.selection;
    const params = { roomId, checkIn: startDate, checkOut: endDate };
    const totalPrice = handlePrice(startDate, endDate);
    batch(() => {
      dispatch(setTotalPriceBookingAction(totalPrice));
      dispatch(setBookingRoomAction(params));
    });
    setDate([date.selection]);
  };

  const handlePrice = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const day = moment(checkOut).diff(moment(checkIn), 'days');
      return (price * day).toLocaleString();
    }
    return (price * 1).toLocaleString();
  };

  return (
    <Container>
      <Title>
        <Heading>
          <h1>Chọn ngày nhận phòng</h1>
          <div>
            <p>Thêm ngày đi để biết giá chính xác</p>
          </div>
        </Heading>
      </Title>
      <DateRange
        months={2}
        calendarFocus='forwards'
        showSelectionPreview={false}
        ranges={date}
        onChange={handleDateChange}
        direction={direction}
        preventSnapRefocus={true}
        locale={locales['vi']}
        rangeColors={['#ff3d67']}
        minDate={minDate}
        maxDate={maxDate}
        dateDisplayFormat={dateFormatDateRange}
      />
    </Container>
  );
}

export default DetailBookingDatePicker;
