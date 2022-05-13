import React, { Fragment } from 'react';
import { UserManagerProfileCSS } from './UserManagerProfilePage.styles';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router';
import moment from 'moment';
import { VectorSVG } from '@Assets/Svgs';

function UserManagerProfile() {
  const urlUserManager = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const { Container, Content, About, Desc, Grid, GridContent, GridItem, GridKey, Img } =
    UserManagerProfileCSS;
  const { AccountSVG } = VectorSVG;

  const { selectChiTietNguoiDung } = quanLyNguoiDungSelector;

  const chiTietNguoiDung = useSelector(selectChiTietNguoiDung, _.isEqual);
  const { address, avatar, birthday, email, gender, name, phone, tickets } = chiTietNguoiDung;
  const isHasChiTietNguoiDung = _.isEmpty(chiTietNguoiDung);

  return isHasChiTietNguoiDung ? (
    <Redirect to={urlUserManager} />
  ) : (
    <Container>
      <Content>
        <Desc>
          <Img>{avatar ? <img src={avatar} alt={avatar} /> : <AccountSVG />}</Img>
        </Desc>

        <About>
          <Grid>
            <GridContent>
              <GridKey>Name </GridKey>
              <GridItem>{name}</GridItem>
            </GridContent>

            <GridContent>
              <GridKey>Email:</GridKey>
              <GridItem>{email}</GridItem>
            </GridContent>

            <GridContent>
              <GridKey>Address:</GridKey>
              <GridItem>{address}</GridItem>
            </GridContent>

            <GridContent>
              <GridKey>Gender:</GridKey>
              <GridItem>{gender ? 'Nam' : 'Nữ'}</GridItem>
            </GridContent>

            <GridContent>
              <GridKey>Phone:</GridKey>
              <GridItem>{phone}</GridItem>
            </GridContent>

            <GridContent>
              <GridKey>Tickets:</GridKey>
              <GridItem>
                {tickets.map((ticket, index) => {
                  return (
                    <Fragment key={`${index}-${ticket}`}>
                      {ticket} {index < tickets.length - 1 ? ', ' : ''}
                    </Fragment>
                  );
                })}
              </GridItem>
            </GridContent>

            <GridContent>
              <GridKey>Birthday</GridKey>
              <GridItem>{moment(birthday).format('DD/MM/YYYY')}</GridItem>
            </GridContent>
          </Grid>
        </About>
      </Content>
    </Container>
  );
}

export default UserManagerProfile;
