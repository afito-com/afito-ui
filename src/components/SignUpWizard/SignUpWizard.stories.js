import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SignUpWizard from '.';
import Button from '../Button';

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
