import axios from 'axios';
import * as keys from '../../config.js';

export function getAmenities() {
  return axios.get(`${keys.base_url}amenities`);
}
