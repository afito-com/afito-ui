import axios from 'axios';
import * as keys from '../../config.js';

export function getRecentBlogPosts() {
  return axios.get(`${keys.base_url}blog/page-data/index/page-data.json`, {
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
}
