import axios from 'axios';

export function getRecentBlogPosts() {
  return axios.get('https://dev-api.afito.com/blog/page-data/index/page-data.json', {
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
}
