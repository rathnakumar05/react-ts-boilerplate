import axios from 'axios';
import { Global } from '../constants/global';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      window.location.href = Global.login_url;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
