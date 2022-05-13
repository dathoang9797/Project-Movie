import React from 'react';
import { DetailBookingUtilityCSS } from './DetailBookingUtility.styles';
import { capitalize, renderUtilityIcon } from '@Utils/Common';

function DetailBookingUtility(propsUtility) {
  const { Container, Heading, IconContent, IconContentItem, IconContentItemDesc } =
    DetailBookingUtilityCSS;

  const renderUtility = () => {
    return Object.keys(propsUtility).map((key, index) => {
      if (!propsUtility[key]) return null;
      return (
        <IconContentItem key={`${key}-${index}`}>
          <IconContentItemDesc>
            <span>{capitalize(key)}</span>
            <div>{renderUtilityIcon(key)}</div>
          </IconContentItemDesc>
        </IconContentItem>
      );
    });
  };

  return (
    <Container>
      <Heading>
        <h2>Nơi này có những gì cho bạn</h2>
      </Heading>
      <IconContent>{renderUtility()}</IconContent>
    </Container>
  );
}

export default DetailBookingUtility;
