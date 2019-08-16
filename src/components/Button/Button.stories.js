import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from '.';

storiesOf('Button', module)
  .add('primary', () => {
    return <Button level="primary">Let's go!</Button>;
  })
  .add('secondary', () => {
    return <Button level="secondary">Let's go!</Button>;
  });
