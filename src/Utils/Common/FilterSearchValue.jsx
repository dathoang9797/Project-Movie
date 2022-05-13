import { removeSpace, removeUnicode } from '@Utils/Common';

const keyTypeFilterRoom = process.env.REACT_APP_KEY_FILTER_ROOM_LIST;
const keyTypeFilterTicket = process.env.REACT_APP_KEY_FILTER_TICKET_LIST;
const keyTypeFilterLocation = process.env.REACT_APP_KEY_FILTER_LOCATION_LIST;
const keyTypeFilterUser = process.env.REACT_APP_KEY_FILTER_USER_LIST;
const keyTypeFilterEvaluate = process.env.REACT_APP_KEY_FILTER_EVALUATE_LIST;

export const filterSearchValue = (searchValue, data, type) => {
  return data.filter((item, index) => {
    switch (true) {
      case type === keyTypeFilterRoom: {
        const formatItemName = removeSpace(removeUnicode(item.name)) ?? '';
        const formatDescription = removeSpace(removeUnicode(item.description)) ?? '';
        const formatLocationIdName = removeSpace(removeUnicode(item.locationId?.name)) ?? '';
        const formatLocationIdprovince =
          removeSpace(removeUnicode(item.locationId?.province)) ?? '';
        const formatSearchValue = removeSpace(removeUnicode(searchValue));
        return (
          formatItemName.includes(formatSearchValue) ||
          formatDescription.includes(formatSearchValue) ||
          (item?.locationId && formatLocationIdName.includes(formatSearchValue)) ||
          (item?.locationId && formatLocationIdprovince.includes(formatSearchValue))
        );
      }

      case type === keyTypeFilterTicket: {
        const formatUserIdName = removeSpace(removeUnicode(item.userId?.name)) ?? '';
        const formatUserIdEmail = removeSpace(removeUnicode(item.userId?.email)) ?? '';
        const formatRoomIdName = removeSpace(removeUnicode(item.roomId?.name)) ?? '';
        const formatRoomIdDesc = removeSpace(removeUnicode(item.roomId?.description)) ?? '';
        const formatSearchValue = removeSpace(removeUnicode(searchValue));
        return (
          formatUserIdName.includes(formatSearchValue) ||
          formatUserIdEmail.includes(formatSearchValue) ||
          formatRoomIdName.includes(formatSearchValue) ||
          formatRoomIdDesc.includes(formatSearchValue)
        );
      }

      case type === keyTypeFilterLocation: {
        const formatItemName = removeSpace(removeUnicode(item.name)) ?? '';
        const formatProvince = removeSpace(removeUnicode(item.province)) ?? '';
        const formatSearchValue = removeSpace(removeUnicode(searchValue));
        return (
          formatItemName.includes(formatSearchValue) || formatProvince.includes(formatSearchValue)
        );
      }

      case type === keyTypeFilterUser: {
        const formatItemName = removeSpace(removeUnicode(item.name)) ?? '';
        const formatItemEmail = removeSpace(removeUnicode(item.email)) ?? '';
        const formatSearchValue = removeSpace(removeUnicode(searchValue));
        return (
          formatItemName.includes(formatSearchValue) || formatItemEmail.includes(formatSearchValue)
        );
      }

      case type === keyTypeFilterEvaluate: {
        const formatItemContent = removeSpace(removeUnicode(item.content)) ?? '';
        const formatSearchValue = removeSpace(removeUnicode(searchValue));
        return formatItemContent.includes(formatSearchValue);
      }

      default: {
        return null;
      }
    }
  });
};
