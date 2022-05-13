import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { DetailBookingPricePopupCSS } from './DetailBookingPricePopup.styles';

function DetailBookingPricePopup() {
  const {
    Container,
    ItemGuest,
    Item,
    ItemLabel,
    Popup,
    PopupClose,
    PopupCountUser,
    PopupCountUserChangeValue,
    PopupCountUserDesc,
  } = DetailBookingPricePopupCSS;

  const [numberUser, setNumberUser] = useState(0);

  const handleIncreaseUser = (e) => setNumberUser(numberUser + 1);

  const handleDecreaseUser = (e) => setNumberUser(numberUser - 1);

  const [visible, setVisible] = useState(false);

  return (
    <Container
      trigger='click'
      visible={visible}
      onVisibleChange={(visible) => setVisible(visible)}
      placement='bottom'
      overlayClassName='wrapper-price-popup'
      content={
        <Popup>
          <PopupCountUser>
            <PopupCountUserDesc>
              <h1>Khách</h1>
            </PopupCountUserDesc>
            <PopupCountUserChangeValue>
              <button
                type='button'
                disabled={numberUser <= 0 ? true : false}
                onClick={handleDecreaseUser}
              >
                <MinusOutlined />
              </button>
              <div>
                <span>{numberUser}</span>
              </div>
              <button type='button' aria-label='thêm' onClick={handleIncreaseUser}>
                <PlusOutlined />
              </button>
            </PopupCountUserChangeValue>
          </PopupCountUser>
          <PopupClose>
            <button
              type='button'
              onClick={() => {
                setVisible(false);
              }}
            >
              Đóng
            </button>
          </PopupClose>
        </Popup>
      }
    >
      <Item>
        <ItemLabel>
          <span>Khách</span>
          <ItemGuest>
            <span>{numberUser} khách</span>
          </ItemGuest>
        </ItemLabel>
      </Item>
    </Container>
  );
}

export default React.memo(DetailBookingPricePopup);
