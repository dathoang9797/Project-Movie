import React from 'react';
import { RoomItemCSS } from './RoomItem.styles';
import { VectorSVG } from '@Assets/Svgs';
import SpinnerDot from '@Components/SpinnerDot';

function RoomItem({ phong, showSpinnerMap }) {
  const urlDetailPage = process.env.REACT_APP_LINK_DETAIL;
  const { ChevronLeftSVG, ChevronRightSVG, HeartSVG, StarSVG } = VectorSVG;
  const {
    _id,
    name,
    guests,
    bedRoom,
    bath,
    description,
    price,
    elevator,
    hotTub,
    pool,
    indoorFireplace,
    dryer,
    gym,
    kitchen,
    wifi,
    heating,
    cableTV,
    image,
    locationId,
  } = phong;

  const { Container, Content, Image, Title, Desc, Detail, Price, PriceNight, Rating } = RoomItemCSS;

  return showSpinnerMap ? (
    <SpinnerDot className='my-10 relative' />
  ) : (
    <Container to={`${urlDetailPage}/${_id}`}>
      <Image>
        <button>
          <ChevronLeftSVG />
        </button>
        <button>
          <ChevronRightSVG />
        </button>
        <img
          src={image ?? `https://picsum.photos/id/300/200`}
          alt={image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = `https://picsum.photos/id/300/200`;
          }}
        />
      </Image>
      <Content>
        <Title>
          <div>
            <span className='greyText'>{name}</span>
            <h2>{description}</h2>
          </div>
          <div>
            <button>
              <HeartSVG />
            </button>
          </div>
        </Title>
        <Desc>
          <span className='greyText'>
            {guests} Guest . {bedRoom} bedroom . {bath ? `${bath} bath` : ''}
          </span>
          <span className='greyText'>
            {kitchen ? 'Kitchen .' : ''} {wifi ? 'Wifi .' : ''} {gym ? 'Gym .' : ''}
            {hotTub ? 'HotTub .' : ''} {elevator ? 'Elevator .' : ''} {pool ? 'Pool .' : ''}
            {indoorFireplace ? 'Indoor Fireplace .' : ''} {dryer ? 'Dryer .' : ''}
            {heating ? 'Heating .' : ''} {cableTV ? 'CableTV' : ''}
          </span>
        </Desc>
        <Detail>
          <Rating>
            <StarSVG />
            <span>{locationId ? locationId.valueate : 0}</span>
          </Rating>
          <Price>
            <PriceNight>
              £{price} <span> / night</span>
            </PriceNight>
          </Price>
        </Detail>
      </Content>
    </Container>
  );
}

export default RoomItem;
