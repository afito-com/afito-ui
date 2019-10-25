import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from '.';
import { resolve } from 'q';

storiesOf('Composites|SignInForm', module)
  .add('Valid Login', () => {
    return (
      <SignInForm
        onSignIn={({ email, password }, callback) => {
          console.log({ email, password });
          // Send email & password to API
          callback({ status: 200, data: { message: 'Logged in' } });
        }}
      />
    );
  })
  .add('Invalid Login', () => {
    return (
      <SignInForm
        onSignIn={({ email, password }, callback) => {
          // Send email & password to API
          callback({ status: 400, data: { message: 'Invalid username/password' } });
        }}
      />
    );
  });
