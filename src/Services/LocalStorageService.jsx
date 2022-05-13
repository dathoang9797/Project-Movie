import _ from 'lodash';

export const localService = {
  setUserInfo(value) {
    const data = JSON.stringify(value);
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_USER_INFO, data);
  },

  setCityName(value) {
    const data = JSON.stringify(value);
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_CITYNAME_INFO, data);
  },

  getUserInfo() {
    const userInfo = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_USER_INFO);
    if (!_.isEmpty(userInfo) && !_.isNull(userInfo)) return JSON.parse(userInfo);
  },

  getCityName(value) {
    const cityName = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_CITYNAME_INFO);
    if (!_.isEmpty(cityName) && !_.isNull(cityName)) return JSON.parse(cityName);
  },

  removeUserInfo() {
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_USER_INFO, '');
  },
};
