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
