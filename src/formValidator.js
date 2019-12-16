import React from 'react';
import validator from 'validator';

export const isPriceSet = (value, props) => {
  if (!props.isPriceSet) {
    return <p className="error-message">Price is required.</p>;
  }
};

export const required = value => {
  if (!value.toString().trim().length) {
    return <p className="error-message">Required</p>;
  }
};

export const email = value => {
  if (!validator.isEmail(value)) {
    return <p className="error-message">{value} is not a valid email.</p>;
  }
};

export const lt = (value, props) => {
  if (!value.toString().trim().length > props.maxLength) {
    return <p className="error-message">The value exceeded {props.maxLength} characters.</p>;
  }
};

export const gt = (value, props) => {
  if (!value.toString().trim().length > props.minLength) {
    return <p className="error-message">The value must be greater than {props.minLength} characters.</p>;
  }
};

export const password = (value, props, components) => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  if (value !== components['passwordConfirm'][0].value) {
    // components['password'][0].value !== components['confirm'][0].value
    // 'confirm' - name of input
    // components['confirm'] - array of same-name components because of checkboxes and radios
    return <p className="error-message">Passwords are not equal.</p>;
  }
};
