import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUpWizard from '.';

storiesOf('Composites|SignUpWizard', module).add('default', () => {
  return (
    <SignUpWizard
      onSignUp={() => {
        return new Promise((resolve, reject) => {
          reject({ response: { data: { message: 'Sorry there was an error' } } });
        });
      }}
    />
  );
});
