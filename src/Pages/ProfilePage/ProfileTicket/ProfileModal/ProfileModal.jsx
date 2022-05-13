import { capitalize, renderUtilityIcon } from '@Utils/Common';
import _ from 'lodash';
import moment from 'moment';
import React, { useMemo } from 'react';
import { ProfileTicketCSS } from './ProfileModal.styles';

function ProfileModal({ danhSachVeTheoNguoiDung }) {
  const {
    Container,
    ModalContent,
    ModalItem,
    ModalContentLeft,
    ModalContentRight,
    ModalDateBook,
    ModalImageRoom,
    ModalNameRoom,
    ModalService,
  } = ProfileTicketCSS;
  const formatDay = 'DD/MM/YYYY';
  const renderService = (chiTietPhong) => {
    const utility = _.omit(chiTietPhong, [
      '__v',
      '_id',
      'description',
      'image',
      'locationId',
      'guests',
      'bedRoom',
      'bath',
      'name',
      'price',
    ]);
    return Object.keys(utility).map((key, index) => {
      if (!chiTietPhong[key]) return null;
      return (
        <span key={`${key}-${index}`}>
          <span>{capitalize(key)}:</span>
          <span>{renderUtilityIcon(key)}</span>
        </span>
      );
    });
  };

  const renderTicketInfo = useMemo(() => {
    return danhSachVeTheoNguoiDung.map((item, index) => {
      const { checkIn, checkOut, roomId, _id } = item;
      const { image, description, name } = roomId;
      return (
        <ModalItem key={`${_id}-${index}`}>
          <ModalContentLeft>
            <ModalImageRoom src={image} alt={image} />
            <ModalDateBook>
              {moment(checkIn).format(formatDay)} - {moment(checkOut).format(formatDay)}
            </ModalDateBook>
          </ModalContentLeft>
          <ModalContentRight>
            <ModalNameRoom>{name}</ModalNameRoom>
            <p className='leading-relaxed'>{description}</p>
            <ModalService>{renderService(roomId)}</ModalService>
          </ModalContentRight>
        </ModalItem>
      );
    });
  }, [danhSachVeTheoNguoiDung]);

  return (
    <Container>
      <ModalContent>{renderTicketInfo}</ModalContent>
    </Container>
  );
}

export default ProfileModal;
