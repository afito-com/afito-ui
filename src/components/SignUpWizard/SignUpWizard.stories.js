import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SignUpWizard from '.';
import Button from '../Button';

storiesOf('SignUpWizard', module).add('default', () => {
  return <SignUpWizard onSignUp={() => console.log('signed up')} />;
});
