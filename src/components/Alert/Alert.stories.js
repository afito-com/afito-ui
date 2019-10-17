import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '.';

storiesOf('Primitives|Alert', module)
  .add('info', () => {
    return <Alert type="info">Hello World</Alert>;
  })
  .add('success', () => {
    return <Alert type="success">Hello World</Alert>;
  })
  .add('warning', () => {
    return <Alert type="warning">Hello World</Alert>;
  })
  .add('danger', () => {
    return <Alert type="danger">Hello World</Alert>;
  })
  .add('default', () => {
    return <Alert type="">Hello World</Alert>;
  });
