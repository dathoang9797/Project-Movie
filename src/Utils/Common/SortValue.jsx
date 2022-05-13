import _ from 'lodash';
import { removeSpace, removeUnicode } from '@Utils/Common';

export const sortValue = (valueA, valueB, type) => {
  switch (true) {
    case (type === 'content' ||
      type === 'province' ||
      type === 'name' ||
      type === 'nameLocation' ||
      type === 'type' ||
      type === 'email' ||
      type === 'roomName' ||
      type === 'locationRoomName' ||
      type === 'userIdName' ||
      type === 'roomIdName') &&
      !_.isNull(valueA) &&
      !_.isNull(valueB): {
      const valueFormatA = removeSpace(removeUnicode(valueA));
      const valueFormatB = removeSpace(removeUnicode(valueB));
      if (valueFormatA === '' || !valueFormatA) {
        return 1;
      }
      if (valueFormatB === '' || !valueFormatB) {
        return -1;
      }
      if (valueFormatA < valueFormatB) {
        return -1;
      }
      if (valueFormatA > valueFormatB) {
        return 1;
      }
      return 0;
    }

    case (type === 'checkOut' ||
      type === 'checkIn' ||
      type === 'created_at' ||
      type === 'updatedAt') &&
      !_.isNull(valueA) &&
      !_.isNull(valueB): {
      if (valueA === '' || !valueA) {
        return 1;
      }
      if (valueB === '' || !valueB) {
        return -1;
      }
      const convertIsoTimeA = new Date(valueA);
      const convertIsoTimeB = new Date(valueB);
      const formatTimeA = convertIsoTimeA.getFullYear();
      const formatTimeB = convertIsoTimeB.getFullYear();
      return formatTimeA - formatTimeB;
    }

    case type === 'userIdTickets' && !_.isNull(valueA) && !_.isNull(valueB): {
      if (valueA === '' || !valueA) {
        return 1;
      }
      if (valueB === '' || !valueB) {
        return -1;
      }
      const ticketsA = valueA.length;
      const ticketsB = valueB.length;
      return ticketsA - ticketsB;
    }

    default: {
      return null;
    }
  }
};
