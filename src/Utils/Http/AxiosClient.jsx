import axios from 'axios';
import queryString from 'query-string';
import { handleChooseEndLoading, handleChooseStartLoading } from '@Utils/Common';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_AIRBNB,
  timeout: 3000,
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
    tokenByClass: process.env.REACT_APP_TOKEN_CYBERSOFT,
    isLoading: false,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    handleChooseStartLoading(config.headers);
    return config;
  },
  (error) => {}
);

axiosClient.interceptors.response.use(
  async (response) => {
    handleChooseEndLoading(response.config.headers);
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response) {
      handleChooseEndLoading(error.config.headers);
      return error.response.data;
    }
    if (error.request) {
      handleChooseEndLoading(error.config.headers);
      console.log('🚀 ~ file: AxiosClient.ts ~ line 34 ~ error.request', error.request);
      return;
    }
    if (error.message) {
      handleChooseEndLoading(error.config.headers);
      console.log('🚀 ~ file: AxiosClient.ts ~ line 39 ~ error.message', error.message);
      return;
    }
  }
);

export default axiosClient;
