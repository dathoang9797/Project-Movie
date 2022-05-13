import React from 'react';
import { RoomManagerProfileCSS } from './RoomManagerProfilePage.styles';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { capitalize, renderUtilityIcon } from '@Utils/Common';

function RoomManagerProfilePage() {
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;
  const chiTietPhong = useSelector(selectChiTietPhongChoThue, _.isEqual);
  const isHasChiTietPhong = _.isEmpty(chiTietPhong);
  const urlRoomManager = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const { description, image, locationId, name, price } = chiTietPhong;
  const {
    Container,
    Content,
    Image,
    Desc,
    Profile,
    Rate,
    Service,
    Social,
    Title,
    FacebookIcon,
    TwitterIcon,
    MessageIcon,
  } = RoomManagerProfileCSS;

  const renderService = () => {
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
        <div key={`${key}-${index}`}>
          <span>
            <span>{capitalize(key)}:</span>
            <span>{renderUtilityIcon(key)}</span>
          </span>
        </div>
      );
    });
  };

  return isHasChiTietPhong ? (
    <Redirect to={urlRoomManager} />
  ) : (
    <Container>
      <Content>
        <Image alt={image} src={image} />
        <Profile>
          <Title>{name}</Title>
          <Social>
            <span>
              <Rate defaultValue={4}>
                <span>4 Reviews</span>
              </Rate>
            </span>
            <span>
              <a href='@a'>
                <FacebookIcon />
              </a>
              <a href='@a'>
                <TwitterIcon />
              </a>
              <a href='@a'>
                <MessageIcon />
              </a>
            </span>
          </Social>
          <Desc>{description}</Desc>
          <Service>
            <div>{renderService()}</div>
            <div>{locationId ? <></> : null}</div>
            <div>
              <span>${price.toLocaleString()}</span>
            </div>
          </Service>
        </Profile>
      </Content>
    </Container>
  );
}

export default RoomManagerProfilePage;
