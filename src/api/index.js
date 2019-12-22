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

function API(name, apis) {
  const resourceURL = `${keys.base_url}search/${name}`;
  const methods = {
    getAll: ({ params } = {}) => axios.get(`${resourceURL}`, { params }),
    getOne: ({ params }) => axios.get(`${resourceURL}/${id}`),
    create: resource => axios.post(resourceURL, resource),
    update: resource => axios.put(`${resourceURL}/${resource.id}`, resource),
    delete: ({ id }) => axios.delete(`${resourceURL}/${id}`)
  };

  const enabledMethods = {};
  apis.forEach(f => {
    if (methods[f]) enabledMethods[f] = methods[f];
  });

  return enabledMethods;
}

export const UserAPI = API('users', ['getAll', 'getOne', 'create']);
export const AreaAPI = API('areas', ['getAll', 'getOne']);
export const PropertyAPI = API('properties', ['getAll', 'getOne']);
export const AnalyticsAPI = API('analytics', ['create']);

export const createProperty = ({ property, user_id }) => {
  const { line1, line2, city, state, ...rest } = property;
  return instance.post(`${keys.base_url}property`, {
    ...rest,
    address: { line1, line2, city, state }
  });
};

export const reportPhoneClick = ({ landlord_id, property_id }) =>
  axios.post(`${keys.base_url}contact/landlord/${property_id}`, { landlord_id });

export const contactLandlord = ({
  user_id,
  landlordName,
  landlordEmail,
  message,
  name,
  email,
  phoneNumber,
  property_id,
  address
}) =>
  axios.post(`${keys.base_url}contact/landlord`, {
    landlord: {
      user_id: user_id,
      firstName: landlordName.first,
      email: landlordEmail
    },
    tenant: {
      message: message,
      name: name,
      email: email,
      phone: phoneNumber
    },
    property: {
      property_id: property_id,
      address: address
    }
  });
