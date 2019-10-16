import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from '.';

storiesOf('Composites|SignInForm', module).add('default', () => {
  let isFetching = false;

  return (
    <SignInForm
      onSignIn={({ email, password }) => {
        isFetching = true;
        return new Promise(resolve => {
          setTimeout(300);
          resolve(console.log({ email, password }));
        }).then(() => {
          isFetching = false;
        });
      }}
      loading={isFetching}
    />
  );
});
