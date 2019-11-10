import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Primitives|Button', module)
  .add('primary', () => {
    return <Button level="primary">Lets go!</Button>;
  })
  .add('secondary', () => {
    return <Button level="secondary">Lets go!</Button>;
  })
  .add('danger', () => {
    return <Button level="danger">Lets not go!</Button>;
  })
  .add('outline', () => {
    return <Button level="outline">Lets go!</Button>;
  })
  .add('side by side', () => {
    return (
      <>
        <Button level="secondary">Lets go!</Button>
        <Button level="outline">Lets go!</Button>
      </>
    );
  });
