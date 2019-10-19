import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from '.';
import { resolve } from 'q';

storiesOf('Composites|SignInForm', module).add('default', () => {
  let isFetching = false;

  return (
    <SignInForm
      onSignIn={({ email, password }) => {
        return new Promise((resolve, reject) => {
          reject({ response: { data: { message: 'Sorry there was an error' } } });
        });
      }}
      loading={isFetching}
    />
  );
});
