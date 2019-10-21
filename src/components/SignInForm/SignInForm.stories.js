import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from '.';
import { resolve } from 'q';

storiesOf('Composites|SignInForm', module)
  .add('Valid Login', () => {
    let isFetching = false;

    return (
      <SignInForm
        onSignIn={({ email, password }, callback) => {
          // Send email & password to API
          callback({ status: 200, data: { message: 'Logged in' } });
        }}
        loading={isFetching}
      />
    );
  })
  .add('Invalid Login', () => {
    let isFetching = false;

    return (
      <SignInForm
        onSignIn={({ email, password }, callback) => {
          // Send email & password to API
          callback({ status: 400, data: { message: 'Invalid username/password' } });
        }}
        loading={isFetching}
      />
    );
  });
