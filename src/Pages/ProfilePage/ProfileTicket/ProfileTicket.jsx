import { CloseOutlined } from '@ant-design/icons';
import { ButtonCSS } from '@Components/Button';
import ModalHoc from '@HOC/ModalHoc';
import { capitalize, renderUtilityIcon } from '@Utils/Common';
import _ from 'lodash';
import moment from 'moment';
import React, { useMemo } from 'react';
import { ProfileTicketCSS } from './ProfileTicket.styles';
import ProfileModal from './ProfileModal';

function ProfileTicket(props) {
  const {
    Container,
    TicketContent,
    TicketItem,
    TicketContentLeft,
    TicketContentRight,
    TicketImageRoom,
    TicketDateBook,
    TicketNameRoom,
    TicketService,
    TicketShowMore,
  } = ProfileTicketCSS;
  const formatDay = 'DD/MM/YYYY';
  const { Close } = ButtonCSS;
  const {
    showModal,
    handlePropsContentModal,
    handleContentModal,
    danhSachVeTheoNguoiDung,
    handlePropsModal,
  } = props;

  const closeIcon = (
    <Close>
      <CloseOutlined />
    </Close>
  );

  const handleShowModalTicket = () => {
    handleContentModal(ProfileModal);
    handlePropsModal({ wrapClassName: 'wrap-modal-profile-ticket', closeIcon });
    handlePropsContentModal({ danhSachVeTheoNguoiDung });
    showModal();
  };

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
    return danhSachVeTheoNguoiDung.slice(0, 2).map((item, index) => {
      const { checkIn, checkOut, roomId, _id } = item;
      const { image, description, name } = roomId;
      return (
        <TicketItem key={`${_id}-${index}`}>
          <TicketContentLeft>
            <TicketImageRoom src={image} alt={image} />
            <TicketDateBook>
              {moment(checkIn).format(formatDay)} - {moment(checkOut).format(formatDay)}
            </TicketDateBook>
          </TicketContentLeft>
          <TicketContentRight>
            <TicketNameRoom>{name}</TicketNameRoom>
            <p className='leading-relaxed'>{description}</p>

            <TicketService>{renderService(roomId)}</TicketService>
          </TicketContentRight>
        </TicketItem>
      );
    });
  }, [danhSachVeTheoNguoiDung]);
  return (
    <Container>
      <TicketContent>{renderTicketInfo}</TicketContent>
      {danhSachVeTheoNguoiDung.length > 2 ? (
        <TicketShowMore onClick={handleShowModalTicket}> Hiển thị thêm</TicketShowMore>
      ) : null}
    </Container>
  );
}

export default ModalHoc(React.memo(ProfileTicket));
