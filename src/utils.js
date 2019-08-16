export function toCurrency(number) {
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

export function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);

    return memo;
  }, {});
}

export function formatPhoneNumber(number) {
  if (!number) {
    return;
  }
  let phone = number.toString();
  phone = phone.replace(/[^\d]/g, '');

  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

export function formatAddress(address) {
  return `${address.line1} ${address.line2 ? address.line2 : ''}`;
}

export function bodyBuilder(options) {
  let body = {};

  for (let field in options) {
    if (!!options[field]) {
      body[field] = options[field];
    }
  }

  return body;
}
