import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from '.';

storiesOf('Composites|SignInForm', module).add('default', () => {
  return <SignInForm onSignIn={UserAPI.signIn} />;
});
