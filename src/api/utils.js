import axios from 'axios';
import * as keys from '../../config';

export function getAddressLocation(address) {
  let base = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  let mapLink = base + address + `&key=${keys.mapsKey}`;

  return axios.get(mapLink);
}

export function toCurrency(number) {
  if (number == null) return 'N/A';
  if (parseInt(number, 10) < 0) {
    return `-$${formatCommas(Math.abs(number))}`;
  } else {
    return `$${formatCommas(number)}`;
  }

  function formatCommas(n) {
    let result = [];
    let numString = n
      .toString()
      .split('')
      .reverse();
    let i = 0;
    while (i < numString.length) {
      if (i % 3 === 0 && i !== 0) {
        result.push(',');
      }
      result.push(numString[i]);
      i++;
    }

    return result.reverse().join('');
  }
}

export function getDisplayPrice({ hometype, max_price, min_price, price, contact_for_pricing }) {
  const isBuilding = hometype => hometype === 'building';

  if (contact_for_pricing) {
    return 'Contact For Price';
  } else if (isBuilding(hometype)) {
    if (max_price != null && min_price != null) {
      if (max_price > min_price) {
        return `${toCurrency(min_price)} - ${toCurrency(max_price)}`;
      } else {
        return toCurrency(max_price);
      }
    } else {
      return 'No Price';
    }
  } else if (price) {
    return toCurrency(price);
  } else {
    return 'No Price';
  }
}

export function formatAddress(address) {
  if (!address) return;
  if (Object.entries(address).length === 0 && address.constructor === Object) return;
  return `${address.line1}${address.line2 ? ` ${address.line2}` : ''}, ${address.city}, ${address.state}`;
}
