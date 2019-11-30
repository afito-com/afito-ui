import axios from 'axios';
import * as keys from '../../config.js';

export function getRecentSearches() {
  return axios.get(`${keys.base_url}search/most_recent`);
}

export function getOneProperty({ params }) {
  return axios.get(`${keys.base_url}search/property`, { params });
}
