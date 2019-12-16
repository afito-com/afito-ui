import axios from 'axios';
import Cookies from 'js-cookie';
import * as keys from '../../config.js';

const url = keys.base_url;

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

function resizeImage(token, file, filetype, width, height) {
  const headers = {
    Authorization: `JWT ${token}`,
    'Content-Type': 'multipart/form-data'
  };
  const url = `https://image-resize.afito.com/upload/${width}/${height}/${filetype}`;
  const formData = new FormData();
  formData.append('file', file);

  return axios.post(url, formData, { headers });
}

function getJpegUpload(token) {
  const headers = { Authorization: `JWT ${token}` };

  return axios.get(url + 'upload/jpeg', { headers });
}

function uploadJpeg(url, file) {
  const headers = { 'Content-Type': file.type };

  return axios.put(url, file, { headers });
}

export function uploadImage(image, width = 1200, height = 800) {
  const token = Cookies.get('token');

  return resizeImage(token, image, image.type.split('/')[1], width, height)
    .then(res => dataURLtoFile(res.data, 'image.jpeg'))
    .then(file => {
      const result = new Promise(function(resolve, reject) {
        getJpegUpload(token)
          .then(urlData => {
            return {
              imageId: keys.photoBucketUrl + urlData.data.key,
              url: urlData.data.url
            };
          })
          .then(({ imageId, url }) => {
            uploadJpeg(url, file)
              .then(res => {
                if (res.status === 200) {
                  resolve(imageId);
                } else {
                  reject('Image failed to upload');
                }
              })
              .catch(console.error);
          })
          .catch(reject);
      });
      return result;
    });
}
