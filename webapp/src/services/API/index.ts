import axios from 'axios';
import { BaseErrorResponse, ErrorCode } from './types';
import { parseErrorMessage } from './errors';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    config.headers.authorization = accessToken;
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 ||
      error.response.data.errorCode === ErrorCode.INVALID_CREDENTIALS
    ) {
      localStorage.removeItem('access_token');
    }

    return Promise.reject(error);
  },
);

export type { BaseErrorResponse };
export { ErrorCode, parseErrorMessage };

export default API;
