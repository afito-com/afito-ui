import axios from 'axios';
import Cookies from 'js-cookie';
import * as keys from '../../config';

export function makeInitialPayment(property_id, stripeToken, amount) {
  const token = Cookies.get('token');
  const headers = { Authorization: `JWT ${token}` };
  const body = {
    property_id: property_id,
    stripeToken: stripeToken,
    amount: amount
  };

  return axios.post(`${keys.base_url}user/payments/signup`, body, { headers });
}

export function makeInitialSubscriptionPayment(property_id, stripeToken) {
  /*
  const token = Cookies.get('token');
  const headers = { Authorization: `JWT ${token}` };
  const body = {
    property_id: property_id,
    stripeToken: stripeToken
  };
  return axios.post(`${keys.base_url}user/payments/signup`, body, { headers });
  */

  return null;
}

export function makeSubscriptionPayment(property_id) {
  const token = Cookies.get('token');
  const headers = { Authorization: `JWT ${token}` };
  const body = {
    property_id: property_id
  };
  return axios.post(`${keys.base_url}user/payments/signup`, body, { headers });
}

export function makePayment(property_id, amount) {
  const token = Cookies.get('token');

  const headers = { Authorization: `JWT ${token}` };
  const body = {
    property_id: property_id,
    amount: amount
  };

  return axios.post(`${keys.base_url}payments/charge`, body, { headers });
}

export function getProratedCost(property_id, target_id) {
  if (!property_id || !target_id) throw new Error('property_id or target_id is missing from the parameters.');
  const token = Cookies.get('token');
  const headers = { Authorization: `JWT ${token}` };
  const body = {
    targetProperty: target_id ? target_id : null,
    upgradeProperty: property_id
  };

  return axios.post(`${keys.base_url}premium/rate`, body, { headers });
}
