import axios from 'axios';
import Cookies from 'js-cookie';
import * as keys from '../../config.js';

const instance = axios.create();
instance.interceptors.request.use(
  function(config) {
    let token = Cookies.get('token');
    if (token) config.headers = { Authorization: `JWT ${token}` };
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export function getOneProperty(property_id) {
  return axios.get(`${keys.base_url}property/${property_id}`);
}
